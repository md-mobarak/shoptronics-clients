import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ totalPrice, email, id }) => {
  // console.log({ id });
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [cart, setCart] = useState([]);
  const [paymetnAll, setPaymentAll] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/payment")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.payments);
        setPaymentAll(data.payments);
      });

    fetch("http://localhost:4000/cart")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.carts);
        setCart(data.carts);
      });

    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.paymentIntent.client_secret);
        const client_secret = data.paymentIntent.client_secret;
        setClientSecret(client_secret);
      });
  }, [totalPrice, paymetnAll, cart]);

  const emailCart = cart.map((email) => email.email);

  const paymentEmail = paymetnAll.map((email) => email.email);

  const filterEmail = emailCart.filter((email) => paymentEmail.includes(email));
  // console.log(filterEmail);

  const handleSubmit = async (event, cart, filterEmail) => {
    // console.log(cart);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });
    console.log(confirmError);
    if (confirmError) {
      console.log(confirmError.message);
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      // console.log(paymentIntent.status === "succeeded");
      const payment = {
        totalPrice,
        email,
        transactionId: paymentIntent.id,
        cartIds: id,
      };
      fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Congrats! Your payments completed");
          }
          console.log(data);
        });
      filterEmail.map((e) => {
        console.log(e);
        if (e) {
          const paid = true;
          const transactionId = paymentIntent.id;
          fetch(`http://localhost:4000/cart/${e}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ paid, transactionId }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      });
      // console.log(filterEmail);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, cart, filterEmail)}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "white",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-error mt-6 btn-xs"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {!success && <p className="text-red-500">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
