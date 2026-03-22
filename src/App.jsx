import React from "react";
import Home from "./components/homepage/home";
import Loginform from "./context/auth/Loginform";
import SignupForm from "./context/auth/Signupform";
import Useraccount from "./components/useraccount/Useraccount";
import Products from "./components/products/Products";
import Swage from "./components/products/grilproduct/swage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/products/CheckoutPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import HomePage from "./components/homepage/HomePage";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import SalePage from "./components/SalePage";
import Navbar from "./components/nav/Navbar";
import Layout from "./components/Layout/Layout";
import ForgotPasswordPage from "./context/auth/ForgotPasswordPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClothingPage from "./components/shop/ClothingPage";
import FavoritesPage from "./components/FavoritesPage";
import ProductDetailPage from "./components/ProductDetailPage";
import FooterwearPage from "./components/shop/FootwearPage";
import { FavoritesProvider } from "./context/FavoritesContext";
import AccessoriesPage from "./components/shop/AccessoriesPage";
import NewArrivalsPage from "./components/NewArrivalsPage";
const App = () => {
  return (
    <>
      {/* <Navuseracc /> */}
      {/* <HomePage /> */}
      {/* <Home /> */}
      {/* <Products />
      <Swage />
      <Loginform />
      <SignupForm />
      <Useraccount />
      <CartPage />
      <CheckoutPage />
      <AboutPage />
      <ServicesPage />
      <ContactPage />
      <SalePage />
      <Footer /> */}
      <FavoritesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ClothingPage />} />
            <Route path="/shop/men" element={<ClothingPage />} />
            <Route path="/shop/women" element={<ClothingPage />} />
            <Route path="/shop/kids" element={<ClothingPage />} />
            <Route path="/shop/activewear" element={<ClothingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/shop/sneakers" element={<FooterwearPage />} />
            <Route path="/shop/sandals" element={<FooterwearPage />} />
            <Route path="/shop/formal" element={<FooterwearPage />} />
            <Route path="/shop/boots" element={<FooterwearPage />} />
            <Route path="/shop/bags" element={<AccessoriesPage />} />
            <Route path="/shop/jewelry" element={<AccessoriesPage />} />
            <Route path="/shop/watches" element={<AccessoriesPage />} />
            <Route path="/shop/hats" element={<AccessoriesPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<Useraccount />} />
          </Route>

          <Route path="/login" element={<Loginform />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />

          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </FavoritesProvider>
    </>
  );
};

export default App;
