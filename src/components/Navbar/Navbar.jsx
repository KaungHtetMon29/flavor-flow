/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("authToken");

  const handleLogOut = () => {
    dispatch(userLogOut(token)).then(() => {
      console.log("");
      sessionStorage.clear();
      navigate("/");
    });
  };
  return (
    <div>
      <h1>This is Navbar</h1>
      <button
        className="bg-blue px-3 py-1 bg-blue-500 text-white"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
