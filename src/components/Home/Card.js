import React, { useContext, useState } from "react";
import {
  BsArrowRightCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Card = ({ product }) => {
  const [user, error, loading] = useAuthState(auth);
  // console.log(user);
  // let email = user?.email;
  const navigate = useNavigate();
  const { name, imgURL, price } = product;
  const [viewDetails, setViewDetails] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  // const [quantity, setQuantity] = useState(0);

  // hover effect
  const handleMouseEnter = () => {
    setIsButtonVisible(true);
    setIsPrice(true);
  };
  const handleMouseLeave = () => {
    setIsButtonVisible(false);
    setIsPrice(false);
  };
  // let messageUser;
  const handlePostAddToCart = (user, name, price) => {
    const email = user?.email;
    let totalPrice = price;
    let quantity = 1;
    if (user === null) {
      navigate("/login");
    } else {
      fetch(`http://localhost:4000/cart/${email}`)
        .then((res) => res.json())
        .then((data) => {
          const result = data.allCart;
          const filterData = result?.filter(
            (filterName) => filterName?.name === name
          );
          if (filterData.length === 0) {
            fetch("http://localhost:4000/cart/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
                name,
                price,
                imgURL,
                totalPrice,
                quantity,
              }),
            })
              .then((res) => res.json())
              .then((postData) => {
                if (postData.status === "success") {
                  toast.success("product add to cart");
                } else {
                  toast.error("can not add the product");
                }
              });
          } else {
            toast.warning("alredy added product");
          }
        });
    }
  };

  const handleviewDetails = () => {
    setViewDetails(!viewDetails);
  };
  return (
    <div>
      {/* {messageUser && <h1>alredy added the product</h1>} */}
      <div
        className="relative lg:shadow-2xl shadow-lg rounded-xl p-8 w-96 lg:h-96 h-auto "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div class="">
          {isButtonVisible && (
            <button
              onClick={() => handlePostAddToCart(user, name, price)}
              data-aos="fade-up"
              data-aos-duration="1000"
              class=" absolute bottom-36 left-36 bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 backdrop-blur-md backdrop-opacity-50 border-2 border-white border-opacity-50 text-opacity-80 font-serif"
            >
              Add to Cart
            </button>
          )}
        </div>

        <div className="flex justify-center items-center">
          <img className="w-72 h-72 " src={imgURL} alt="" />
        </div>
        {isPrice && (
          <p
            className=" absolute text-secondary top-5 left-20  z-40 lg:text-3xl text-xl font-bold font-serif"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Price$ {price}
          </p>
        )}

        <div className="flex justify-around items-center">
          <h3 className="text-center text-xl  font-serif">{name}</h3>
          <button
            className="btn btn-outline btn-primary btn-xs hover:text-white"
            onClick={handleviewDetails}
          >
            DETAILS
          </button>
        </div>
      </div>
      <section className="flex justify-center items-center p-10 lg:p-0 ">
        {viewDetails && (
          <div
            className=" fixed lg:top-4 top-2   lg:right-96 z-40 w-full h-full lg:w-[500px] lg:h-[500px] bg-white  rounded-2xl p-10 shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="flex justify-end">
              <button className="" onClick={handleviewDetails}>
                <RxCross2 className="text-red-500 w-10 h-10"></RxCross2>
              </button>
            </div>
            <div className="flex justify-center items-center ">
              <img
                className="lg:w-80 lg:h-80 w-64 h-64 rounded-2xl"
                src={imgURL}
                alt=""
              />
            </div>
            <div>
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                class=" absolute lg:bottom-24 lg:left-40 bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 backdrop-blur-md backdrop-opacity-50 border-2 border-white border-opacity-50 text-opacity-80 font-serif"
              >
                Add to Cart
              </button>
              <p>
                <span className="font-bold text-primary ">Description</span>:
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                culpa totam placeat, non eveniet iure deserunt aliquam
                perferendis blanditiis ad...
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Card;
