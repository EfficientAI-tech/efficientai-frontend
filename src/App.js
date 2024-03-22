import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import PricingPage from "./Pages/PricingPage";
import AboutPage from "./Pages/AboutPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactForm from './Components/ContactForm';
const App = () => {
  return (
    <div className="overflow-hidden">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      <Footer />
    </Router>
  </div>
  )
}

export default App