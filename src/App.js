import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Home, About, Error } from "./pages";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const location = useLocation();
    const [showNav, setShowNav] = useState(true);

    useEffect(
        () =>
            window.scrollTo({
                top: 0,
                // top: 500,
                behavior: "smooth",
                // behavior: "auto",
            }),
        [location.pathname]
    );

    return (
        <>
           <ToastContainer autoClose={3000} />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="*" element={<Error setShowNav={setShowNav} />} />
                </Routes>
                {/* {showNav && <Footer />} */}
            </AnimatePresence>
        </>
    );
}
