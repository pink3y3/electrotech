import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from './pages/home/index.jsx'
import About from './pages/aboutus/index.jsx'
import Clientele from './pages/clientele/index.jsx'
import Products from './pages/products/index.jsx'
import Contact from './pages/contact/index.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'
function App(){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clientele" element={<Clientele />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;