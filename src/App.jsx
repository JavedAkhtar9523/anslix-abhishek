import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ServicesPage from "./components/service/Service";
import AboutUs from "./components/About/AboutUs";
import CareerPage from "./components/career/Career";
import ContactPage from "./components/contact/Contact";
import ComingSoon from "./components/comingSoon/ComingSoon";
import WhatsAppIcon from "./components/Whatsapp/WhatsAppIcon";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solution" element={<ComingSoon />} />
        </Routes>
        <WhatsAppIcon phoneNumber="+919131890800" />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
