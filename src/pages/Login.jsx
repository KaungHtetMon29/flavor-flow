import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogIn } from "../redux/authSlice";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
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
				navigate("/home");
			} else {
				setErrorMessage("Log In Failed Please Try Again !!!  ");
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
		<div className="flex justify-center w-[100vw] items-center flex-col p-7">
			<h1 className=" text-2xl p-2">This is login page</h1>
			<form
				action=""
				className="flex min-w-[40vw] justify-center flex-col rounded-lg shadow-xl border-slate-600 p-10"
			>
				<input
					type="email"
					name="email"
					placeholder="email"
					className="border rounded-md p-2"
					value={newUser.user.email}
					onChange={(e) => handleChange("email", e.target.value)}
				/>
				<br></br>
				<input
					type="password"
					name="password"
					placeholder="password"
					value={newUser.user.password}
					className="border rounded-md p-2"
					onChange={(e) => handleChange("password", e.target.value)}
				/>
				<br />
				<small className=" italic lowercase text-yellow-500 ">
					{errorMessage}
				</small>{" "}
				<br />
				<button
					type="submit"
					onClick={handleSubmit}
					className="border px-3 py-1 bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
