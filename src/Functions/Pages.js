import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Frontend/Pages/Home";

import { AnimatePresence } from "framer-motion";
import Shop from "../Frontend/Pages/Shop";
import Contact from "../Frontend/Pages/Contact";
import Login from "../Auth/Login";
import Cart from "../Frontend/Pages/Cart";
import AddProducts from "../Backend/Pages/AddProducts";


const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/userauthentication" element={<Login />} />
        <Route path="/addproducts" element={<AddProducts />} />
        <Route path="/editproducts/:id" element={<AddProducts />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
