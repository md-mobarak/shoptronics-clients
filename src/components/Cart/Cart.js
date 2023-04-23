import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineDelete, AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Payment from "../Payment/Payment";
import Loaders from "./../Loaders/Loaders";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, error, loading] = useAuthState(auth);
  const [disableButton, setDisableButton] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const email = user?.email;
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:4000/cart/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.allCart);
        setCartItems(data.allCart.reverse());
      });
  }, [cartItems]);

  const handleDeleteCart = (id) => {
    fetch(`http://localhost:4000/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("cart product is Delete");
        }
      });
  };
  const id = cartItems.map((Id) => Id._id);
  // console.log(id);

  const calculatePrice = cartItems.reduce((prev, present) => {
    return prev + present.totalPrice + 3;
  }, 0);
  const totalPrice = parseInt(calculatePrice);

  const handleIncrease = (_id, Quantity, Price) => {
    const quantity = parseInt(Quantity + 1);
    const totalPrice = parseInt(Price * quantity);

    fetch(`http://localhost:4000/cart/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity, _id, totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };
  const handleDecrease = (_id, Quantity, Price, TotalPrice) => {
    const quantity = parseInt(Quantity - 1);
    const totalPrice = parseInt(TotalPrice - Price);
    fetch(`http://localhost:4000/cart/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity, _id, totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="font-serif lg:my-16">
      {cartItems.length === 0 && (
        <h1 className="text-5xl text-center text-black my-12">
          <span className="border-b-4 border-black ">
            {" "}
            Please Buy a Product{" "}
          </span>
        </h1>
      )}
      <div>
        <h1 className="text-5xl text-center text-primary my-12">
          <span className="border-b-4 border-primary "> Shopping cart</span>
        </h1>

        <table className="w-full">
          <thead>
            <tr className="text-center text-2xl ">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product) => (
              <tr className="text-center font-semibold">
                <td className="flex justify-center items-center">
                  <img className="w-32 h-32" src={product.imgURL} alt="" />
                </td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() =>
                      handleDecrease(
                        product._id,
                        product.quantity,
                        product.price,
                        product.totalPrice
                      )
                    }
                    disabled={product.quantity === 1}
                    className={` ${product.quantity === 1 && "text-red-500"}`}
                  >
                    -
                  </button>
                  <span className="mx-5"> {product.quantity}</span>{" "}
                  <button
                    onClick={() =>
                      handleIncrease(
                        product._id,
                        product.quantity,
                        product.price
                      )
                    }
                  >
                    +
                  </button>
                </td>
                <td>{product.totalPrice}</td>
                <td>
                  <button onClick={() => handleDeleteCart(product._id)}>
                    <AiTwotoneDelete className="w-8 h-8 text-red-600"></AiTwotoneDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* second section  */}

        <section className="flex justify-center items-center my-6 px-36 ">
          <div className="w-full h-[200px]  bg-[#fadecf] shadow-md backdrop-blur-lg focus:outline-none rounded-xl">
            <div className="flex h-[100px] justify-evenly items-center">
              <h3 className="text-xl font-semibold">ADD NOTE</h3>
              <h3 className="text-xl font-semibold ">
                SUB TOTAL{" "}
                {<span className="mx-8">${parseInt(calculatePrice)}</span>}
              </h3>
            </div>
            <div className="text-center">
              <button
                disabled={cartItems.length === 0}
                onClick={() => setCheckOut(!checkOut)}
                className="btn w-80 btn-primary text-white"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </section>

        {/* stripe method */}
        {checkOut && (
          <section className="relative flex justify-center items-center">
            <div className="w-96 h-44 p-5  fixed bottom-44 bg-[#4FC1DB]  shadow-2xl rounded-xl ">
              <Payment
                setCheckOut={setCheckOut}
                checkOut={checkOut}
                email={email}
                totalPrice={totalPrice}
                id={id}
              ></Payment>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;
