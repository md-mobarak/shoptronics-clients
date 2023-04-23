import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useHook from "../useHook/useHook";
import auth from "./../../firebase.init";
import Loaders from "./../Loaders/Loaders";
// import useHook from "./../useHook/useHook";

const Singup = ({ setToggleSignup, toggleSignup }) => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;
    createUserWithEmailAndPassword(email, password, name);
    reset();
  };
  const [token] = useHook(user || gUser);
  // console.log(user);
  const handleGoogle = () => {
    signInWithGoogle();
  };
  // if (user || gUser) {
  // }
  if (loading || gLoading) {
    return <Loaders></Loaders>;
  }

  return (
    <div
      className="flex justify-center items-center  mt-10 mb-16 px-5 lg:px-0 font-serif"
      data-aos="flip-right"
    >
      <div className="w-96 border border-primary  py-5 rounded-xl shadow-2xl">
        <h1 className="text-center text-4xl font-bold ">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center px-10 my-4">
            <p className="text-left font-semibold">Name</p>
            <input
              placeholder="Type your Name"
              className="w-full px-2 rounded-xl h-12 border border-black"
              {...register("name", { required: true })}
              type="text"
              name="name"
              id=""
            />
            {errors?.message && (
              <p role="alert" className="text-red-500">
                {errors?.message}
              </p>
            )}
          </div>
          <div className="text-center px-10">
            <p className="text-left font-semibold">Email</p>
            <input
              {...register("email", { required: true })}
              placeholder="type your Email"
              className="w-full px-2 rounded-xl h-12 border border-black"
              type="email"
              id=""
              name="email"
            />
            {errors?.message && (
              <p role="alert" className="text-red-500">
                {errors?.message}
              </p>
            )}
          </div>
          <div className="text-center  px-10 my-4">
            <p className="text-left font-semibold">Password</p>
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full rounded-xl h-12 border px-2 border-black"
              type="password"
              name="password"
              id=""
            />
            {errors?.message && (
              <p role="alert" className="text-red-500">
                {errors?.message}
              </p>
            )}
          </div>
          <div className=" px-10">
            <button type="submit" className="btn btn-primary w-full text-white">
              SUBMIT
            </button>
          </div>
        </form>
        <div className="divider px-10 text-primary font-semibold">OR</div>
        <div className=" px-10">
          <button
            onClick={handleGoogle}
            className="btn w-full  btn-error border-0"
          >
            Google
          </button>
        </div>
        <div className="px-10 mt-3">
          <p className="text-left">
            I have an account{" "}
            <button
              onClick={() => setToggleSignup(!toggleSignup)}
              className="text-primary font-bold"
            >
              Login!
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
