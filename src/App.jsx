/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate, useNavigation } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import React from "react";
import SplashPage from "./pages/SplashPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TestMoodles from "./components/moodles/tester";
import SalePage from "./pages/Sale/Salepage";
import Stockpage from "./pages/stock/Stockpage";
import DeliPage from "./pages/Delipage/Delipage";
import RouteProtector from "./pages/salemain/Salemain";
import TruckPage from "./pages/Truckpage/Truckpage";
import DeliStatus from "./pages/Delistatus/Delistatus";

const App = () => {
	const navi = useNavigate();
	return (
		<Routes>
			<Route path="/" element={<SplashPage />}></Route>
			<Route path="/signup" element={<Signup />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/home" element={<Home />}></Route>
			<Route
				path="/sale"
				element={
					<RouteProtector mroute={"sale"} subroute={"preorder"} />
				}
			>
				<Route path="preorder" element={<SalePage />}></Route>
				<Route path="stock" element={<Stockpage />}></Route>
				<Route path="delivery" element={<DeliPage />}></Route>
			</Route>
			<Route
				path="/logistic"
				element={
					<RouteProtector
						mroute={"logistic"}
						subroute={"deliverystatus"}
					/>
				}
			>
				<Route path="deliverystatus" element={<DeliStatus />}></Route>
				<Route path="truck" element={<TruckPage />}></Route>
			</Route>

			<Route path="*" element={<ErrorPage />}></Route>
			<Route path="/testMoodles" element={<TestMoodles />}></Route>
		</Routes>
	);
};

export default App;
