import React from "react";
import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loaders from "../Loaders/Loaders";
import useHook from "../useHook/useHook";
import Singup from "./Singup";

const Login = () => {
  const [toggleSignup, setToggleSignup] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, displayName } = data;
    signInWithEmailAndPassword(email, password);
    console.log(data);
    reset();
  };
  const handleGoogle = () => {
    signInWithGoogle();
  };
  if (user || gUser) {
    navigate("/");
  }
  const [token] = useHook(user || gUser);

  if (loading) {
    return <Loaders></Loaders>;
  }
  return (
    <section>
      {!toggleSignup && (
        <div
          className="flex justify-center items-center  my-16 px-5 lg:px-0 font-serif"
          data-aos="flip-left"
        >
          <div className="w-96 py-10 border border-primary rounded-xl shadow-2xl">
            <h1 className="text-center text-4xl font-bold ">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center px-10">
                <p className="text-left font-semibold">Email</p>
                <input
                  {...register("email", { required: true })}
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
                  className="w-full rounded-xl h-12 border px-2 border-black"
                  type="password"
                  name="password"
                />
                {errors?.message && (
                  <p role="alert" className="text-red-500">
                    {errors?.message}
                  </p>
                )}
              </div>
              <div className=" px-10">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-white"
                >
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
                Don't have an account?{" "}
                <button
                  onClick={() => setToggleSignup(!toggleSignup)}
                  className="text-primary font-bold"
                >
                  Sign up!
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
      {toggleSignup && (
        <Singup
          setToggleSignup={setToggleSignup}
          toggleSignup={toggleSignup}
        ></Singup>
      )}
    </section>
  );
};

export default Login;
