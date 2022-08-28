import React, { useState, useContext } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = { email: "", password: "" };

const Register = () => {
  const [state, setstate] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let { email, password } = state;

    setIsProcessing(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user created");
      })
      .catch((error) => {
        console.error(error);
        setIsProcessing(false);
      });
  };

  return (
    <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <h2
        class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
      >
        Register
      </h2>
      <div class="mt-12">
        <form onSubmit={handleRegister}>
          <div>
            <div class="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
            </div>
            <input
              class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div class="mt-10">
            <button
              class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
            >
              Register
            </button>
          </div>
        </form>
        <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Already have an account ?{" "}
          <a class="cursor-pointer text-indigo-600 hover:text-indigo-800">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
