import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { Button } from "../";
export default function Footer() {
    const { pageFade } = useGlobalContext().animations;
    const { logo3 } = localData.images;
    const { facebook, twitter, instagram } = localData.svgs;

    return (
        <motion.footer {...pageFade} className="footer bg-dark">
            <div className="container">
                <div className="row row-top">
                    <div className="logo-wrapper">
                        <Link className="logo" to="/">
                            <img src={logo3} alt="" />
                        </Link>
                    </div>

                    <ul className="quick-links">
                        <li>
                            <div className="commercial-link title">Quick Links</div>
                        </li>
                        <li>
                            <a href="#services"  className="commercial-link">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#about"  className="commercial-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#why-us"  className="commercial-link">
                                Why Us
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials"  className="commercial-link">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact"  className="commercial-link">
                                Conatct
                            </a>
                        </li>
                    </ul>
                    
                    {/* <ul className="commercial">
                        <li>
                            <div className="commercial-link title">Commercial</div>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Electrical Inspections
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Lighting
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Lighting
                            </a>
                        </li>
                    </ul>

                    <ul className="commercial">
                        <li>
                            <div className="commercial-link title">About</div>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Customer Reviews
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Special Offers
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Tips
                            </a>
                        </li>
                        <li>
                            <a href="#/" target="_blank" className="commercial-link">
                                Contact us
                            </a>
                        </li>
                    </ul> */}

                    {/* <div className="socials">
                        <Button variant="circle" color="light" icon={facebook} />
                        <Button variant="circle" color="light" icon={twitter} />
                        <Button variant="circle" color="light" icon={instagram} />
                    </div> */}
                </div>

                <div className="row row-bottom">Copyright © 2023 by iFIX Electric</div>
            </div>
        </motion.footer>
    );
}
