import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import CheckoutForm from "./CheckoutForm";
// import Payment from './Payment';
const stripePromise = loadStripe(
  "pk_test_51L3aalI91qInqKJOIAqYBOQOdXZn76vNUqa36AQts178GmeLrYGwFWH2smTlGkytVjjHsvS5Rm8O5RHveOueLnAu00gchEF5KD"
);
const Payment = ({ totalPrice, email, setCheckOut, checkOut, id }) => {
  // console.log(checkOut);
  return (
    <div className="">
      <div className="flex justify-end">
        <button className="" onClick={() => setCheckOut(!checkOut)}>
          <RxCross2 className="text-error w-5 h-5"></RxCross2>
        </button>
      </div>
      <h1 className="font-bold text-gray-200 mb-4">Payment</h1>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          id={id}
          email={email}
          totalPrice={totalPrice}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
