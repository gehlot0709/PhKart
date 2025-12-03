import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Fashion from "./pages/Fashion.jsx";
import Electronics from "./pages/Electronics.jsx";
import Furniture from "./pages/Furniture.jsx";
import TVs from "./pages/TVs.jsx";
import Gifts from "./pages/Gifts.jsx";
import Grocery from "./pages/Grocery.jsx";
import MobileTablets from "./pages/MobileTablets.jsx";
import More from "./pages/More.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="tvs" element={<TVs />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="grocery" element={<Grocery />} />
          <Route path="mobile" element={<MobileTablets />} />
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
