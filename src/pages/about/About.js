import React from "react";
import { Header, Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function About() {
    const { pageFade } = useGlobalContext().animations;

    return (
        <>
            <Navbar />
            <Header title="about" />
            <motion.main {...pageFade} className="about-page">
                <section className="example">
                    <div className="container">
                        <h2 className="example-title display-2">section</h2>
                        <p className="example-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius et consequatur eaque
                            recusandae ipsa quae harum, illo quidem cum quos ratione blanditiis iure sequi vero nam odit
                            dolor rerum? Quam itaque harum molestias explicabo suscipit quas voluptates maiores
                            mollitia.
                        </p>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
