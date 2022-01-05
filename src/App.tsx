import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddServices from "./Pages/Dashboard/AddServices/AddServices";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DefaultDashboard from "./Pages/Dashboard/Dashboard/DefaultDashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Not-Found/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/about-us" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/purchase/:id"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DefaultDashboard />} />
            <Route path="/dashboard/my-orders" element={<MyOrders />} />
            <Route path="/dashboard/add-services" element={<AddServices />} />
            <Route path="/dashboard/make-admin" element={<MakeAdmin />} />
          </Route>
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
