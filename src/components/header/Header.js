import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Header({ title, className, children }) {
    const { pageFade } = useGlobalContext().animations;
    

    return (
        <motion.header {...pageFade} className={"hero " + className} >
           {children}
        </motion.header>
    );
}
