import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const pathName = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [user, error, loading] = useAuthState(auth);
  const email = user?.email;
  const [cartItems, setCartItems] = useState([]);
  const [toggleLogin, setToggleToglin] = useState(false);
  const [signOut] = useSignOut(auth);

  useEffect(() => {
    fetch(`http://localhost:4000/cart/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.allCart);
        setCartItems(data.allCart);
      });
  }, [cartItems]);
  const handleLogin = (user) => {
    //
    if (!user) {
      navigate("/login");
    } else {
      setToggleToglin(!toggleLogin);
    }
    // console.log(user);
  };

  const handleLogOut = () => {
    signOut();
    setToggleToglin(false);
  };
  // if (pathName.pathname === "/userProfile") {
  //   return setToggleToglin(!toggleLogin);
  // }

  return (
    <div>
      {/* mobile responsive navbar */}
      <nav className=" lg:hidden">
        <div className="w-full px-5 py-3 flex justify-between">
          <button
            onClick={() => navigate("/")}
            className="text-3xl text-primary pointer"
          >
            Shop<span className="font-semibold">tronics</span>
          </button>
          <div className="flex  items-center">
            <section className="relative">
              <span class="indicator-item badge badge-primary w-1 text-[10px] font-bold absolute bottom-4 left-4">
                {cartItems?.length ? cartItems.length : 0}
              </span>
              <AiOutlineShoppingCart className="h-[24px] w-[24px] "></AiOutlineShoppingCart>
            </section>
            <AiOutlineUser className="h-[24px] w-[24px] mx-4"></AiOutlineUser>

            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? (
                <RxCross1 className="h-[24px] w-[24px]"></RxCross1>
              ) : (
                <RxHamburgerMenu className="h-[24px] w-[24px]"></RxHamburgerMenu>
              )}
            </button>
          </div>
        </div>
        {toggleMenu && (
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="flex justify-center bg-primary"
          >
            <ul>
              <li className="font-semibold text-white">Home</li>
              <li className="font-semibold text-white">Shop</li>
              <li className="font-semibold text-white">About</li>
              <li className="font-semibold text-white">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      {/* destop and tablet responsive  */}
      <div className="hidden lg:block  ">
        <div>
          <nav className="flex justify-evenly items-center h-[100px]">
            <button
              onClick={() => navigate("/")}
              className="text-3xl text-primary"
            >
              Shop<span className="font-semibold">tronics</span>
            </button>
            <span>
              <span className="relative">
                <BsSearch className="absolute top-1 left-3 font-bold"></BsSearch>
              </span>
              <input
                className="focus:outline-none w-[607px] h-[45px] border border-primary text-center"
                autocomplete="off"
                type="search"
                name="SEARCH"
                id=""
                placeholder="Search for products"
              />
              <button className="bg-primary w-[189px] h-[45px] font-semibold text-white">
                SEARCH
              </button>
            </span>
            <div className="flex justify-evenly items-center">
              <section className="relative">
                <span class="indicator-item badge badge-primary text-white w-2 text-[10px] font-bold absolute bottom-4 left-4">
                  {cartItems?.length ? cartItems.length : 0}
                </span>
                <Link to="/cart">
                  <AiOutlineShoppingCart className="h-[28px] w-[28px] mr-7"></AiOutlineShoppingCart>
                </Link>
              </section>
              <section>
                <button onClick={() => handleLogin(user)}>
                  {user ? (
                    <AiOutlineUser className="h-[28px] w-[28px]"></AiOutlineUser>
                  ) : (
                    <h1
                      className={
                        pathName.pathname === "/login"
                          ? `text-primary text-xl  font-semibold`
                          : `text-black font-semibold hover:text-primary`
                      }
                    >
                      Login
                    </h1>
                  )}
                </button>
              </section>
            </div>
          </nav>
          {/* toggle navbar  */}
          {toggleLogin && (
            <nav className="fixed top-16 shadow-2xl right-10 z-50  w-28 h-24 rounded-xl p-2 text-center font-serif  text-primary">
              <Link to="/userProfile">
                <button className="hover:btn hover:btn-neutral hover:text-white hover:btn-xs">
                  Profile
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="hover:btn hover:btn-neutral hover:text-white hover:btn-xs">
                  Dashboard
                </button>
              </Link>
              <button
                onClick={() => handleLogOut()}
                className="hover:btn hover:btn-error hover:btn-xs"
              >
                LogOut
              </button>
            </nav>
          )}
        </div>

        {/* 2nd navbar  */}
        <nav className="w-[700px] ml-[120px] ">
          <ul className="flex justify-evenly">
            <li className="flex items-center font-semibold">
              <RxHamburgerMenu className="mr-3"></RxHamburgerMenu>
              Departments
              <IoIosArrowDown className="mt-2"></IoIosArrowDown>
            </li>
            <li className="font-semibold">
              <Link
                to="/"
                className={
                  pathName.pathname === "/"
                    ? `text-primary text-xl text-semibold`
                    : `text-black hover:text-primary`
                }
              >
                Home
              </Link>
            </li>
            <li className="font-semibold">
              <Link
                to="/shop"
                className={
                  pathName.pathname === "/shop"
                    ? `text-primary text-xl text-semibold`
                    : `text-black hover:text-primary`
                }
              >
                Shop
              </Link>
            </li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
