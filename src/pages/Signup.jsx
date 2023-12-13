import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { userSignUp } from '../redux/authSlice';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [newUser, setNewUser] = useState({
    user: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const dispatch = useDispatch();

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
    dispatch(userSignUp(newUser)).then((res) => {
      if (res.payload.status.code === 404) {
        setErrorMessage(res.payload.error.message);
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <div className="w-[40%] mx-auto">
      <h1>This is sign up page </h1>
      <form action="">
        <input
          type="name"
          name="name"
          placeholder="name"
          className="border"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="border"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
          className="border"
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
        />
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          className="border bg-blue-500 px-3 py-1 text-white mt-5"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
