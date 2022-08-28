import React, { useState, useContext } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

const initialState = { email: "", password: "" };

const Login = () => {
  //   const { dispatch } = useAuthContext();

  const [state, setstate] = useState(initialState);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let { email, password } = state;

    setIsProcessing(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        // dispatch({ type: "LOGIN", payload: { user } });
        console.log(user);
        // dispatch({ type: "LOGIN", payload: {user} })
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <h2
        class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
      >
        Log in
      </h2>
      <div class="mt-12">
        <form onSubmit={handleLogin}>
          <div>
            <div class="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </div>
          <div class="mt-8">
            <div class="flex justify-between items-center">
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <div>
                <a
                  class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <input
              class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div class="mt-10">
            <button
              class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
            >
              Log In
            </button>
          </div>
        </form>
        <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Don't have an account ?{" "}
          <a class="cursor-pointer text-indigo-600 hover:text-indigo-800">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
