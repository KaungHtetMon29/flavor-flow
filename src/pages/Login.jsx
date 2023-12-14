import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogIn } from "../redux/authSlice";
import logo from "@/assets/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.authentication.response);
  const [errorMessage, setErrorMessage] = useState("");
  const [newUser, setNewUser] = useState({
    user: {
      email: "",
      password: "",
    },
  });

  const handleChange = (name, value) => {
    setNewUser((prev) => ({
      user: {
        ...prev.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogIn(newUser)).then((res) => {
      if (res.payload) {
        setErrorMessage("");
        navigate("/sale");
        // selector.department !== null && selector.department !== "logistic"
        //   ? navigate("/sale/dashboard")
        //   : navigate("/logistic");
      } else {
        setErrorMessage("Login Failed Check email and password  ");
        setNewUser((prev) => ({
          user: {
            ...prev.user,
            email: "",
            password: "",
          },
        }));
      }
    });
  };

  return (
    <div className="overflow-hidden flex w-[100vw] h-[100vh] bg-secondarycolor items-center flex-col p-7 relative justify-center ">
      {/* <img src={logo} className="w-82 rotate-45 absolute left-0" /> */}
      <div className="w-12 h-12 right-[50rem] bottom-[5rem] absolute bg-opacity-30 bg-primarycolor rounded-full"></div>
      <div className="w-12 h-12 left-[50rem] top-[5rem] absolute bg-opacity-30 bg-white rounded-full"></div>
      <div className="w-12 h-12 left-[40rem] bottom-32 absolute  bg-opacity-30 bg-white rounded-full"></div>
      <div className="w-12 h-12 right-[40rem] top-32 absolute  bg-opacity-30 bg-primarycolor rounded-full"></div>
      <div className="w-12 h-12 left-64 top-96 absolute  bg-opacity-60 bg-primarycolor rounded-full"></div>
      <div className="w-24 h-24 right-32 bottom-12 absolute  bg-opacity-80 bg-primarycolor rounded-full"></div>
      <div className="w-24 h-24 left-32 top-12 absolute  bg-opacity-80 bg-white rounded-full"></div>
      <div className="w-72 h-72 absolute right-[12rem] top-50 bg-opacity-5 bg-white rounded-full"></div>
      <div className="w-80 h-80 absolute -right-32 -top-20 bg-opacity-80 bg-white rounded-full"></div>
      <div className="w-80 h-80 absolute -right-32 -top-20 bg-opacity-80 bg-white rounded-full"></div>
      <div className="w-64 h-64 absolute left-[35rem] top-50 bg-opacity-20 bg-primarycolor rounded-full"></div>
      <div className="w-64 h-64 absolute -left-24 -bottom-10 bg-opacity-80 bg-primarycolor rounded-full"></div>
      <form
        action=""
        className="overflow-hidden relative gap-4 flex w-96 justify-center  bg-primarycolor flex-col rounded-lg border-slate-600 p-10"
      >
        <div className="w-28 h-28 bg-secondarycolor rounded-full absolute -top-12 -right-12"></div>
        <div className="w-full flex items-center justify-center">
          <img src={logo} className="w-28 h-28 drop-shadow-lg" />
        </div>
        <h1 className=" text-2xl p-2 text-center pb-8 text-white">
          Enter your email and password
        </h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded-md p-2 text-lg"
          value={newUser.user.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.user.password}
          className="border rounded-md p-2 text-lg"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <small className="lowercase text-[1.05rem] text-yellow-500 ">
          {errorMessage}
        </small>{" "}
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-xl px-3 py-3 bg-secondarycolor/80 text-white hover:bg-secondarycolor/100 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
