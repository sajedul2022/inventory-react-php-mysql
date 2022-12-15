import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';

import AllProduct from "./product/AllProduct";
import AddProduct from "./product/AddProduct";
import EditProduct from "./product/EditProduct";




export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/products" element={<AllProduct />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:pid" element={<EditProduct />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterApp />);

reportWebVitals();




