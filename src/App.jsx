import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Media from "./pages/Media";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import WACGrantPage from "./pages/WACGrantPage";
import Mentorship from "./pages/Mentorship";
import Speaking from "./pages/Speaking";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className='mt-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/research' element={<Research />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/wac' element={<WACGrantPage />} />
            <Route path='/mentorship' element={<Mentorship />} />
            <Route path='/media' element={<Media />} />
            <Route path='/speaking' element={<Speaking />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <SpeedInsights />
      </Router>
    </div>
  );
};

export default App;
