import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import TVs from "./pages/TVs";
import Gifts from "./pages/Gifts";
import Grocery from "./pages/Grocery";
import MobileTablets from "./pages/MobileTablets";
import More from "./pages/More";
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
