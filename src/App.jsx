/* eslint-disable no-unused-vars */
import { Routes, Route, useNavigate, useNavigation } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import React from "react";
import SplashPage from "./pages/SplashPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TestMoodles from "./components/moodles/tester";
import SalePage from "./pages/Sale/Salepage";
import Stockpage from "./pages/stock/Stockpage";
import DeliPage from "./pages/Delipage/Delipage";
import RouteProtector from "./pages/salemain/Salemain";
import TruckPage from "./pages/Truckpage/Truckpage";
import DelistatusTable from "./components/Delistatus/DelistatusTable";
import DeliStatus from "./pages/Delistatus/Delistatus";
import AddSalePage from "./pages/Sale/addsale/AddSale";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ClientPage from "./pages/client/Client";
import PermissionPage from "./pages/permission/PermissionPage";

const App = () => {
  const navi = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/home" element={<Home />}></Route>
      <Route
        path="/sale"
        element={<RouteProtector mroute={"sale"} subroute={"dashboard"} />}
      >
        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="client" element={<ClientPage />}></Route>
        <Route path="permission" element={<PermissionPage />}></Route>
        <Route path="preorder" element={<SalePage />}></Route>
        <Route path="preorder/new" element={<AddSalePage />}></Route>
        <Route path="stock" element={<Stockpage />}></Route>
        <Route path="delivery" element={<DeliPage />}></Route>
      </Route>
      <Route
        path="/logistic"
        element={
          <RouteProtector mroute={"logistic"} subroute={"deliverystatus"} />
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
