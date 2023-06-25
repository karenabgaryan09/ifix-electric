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
                    <div className="container-sm">
                        <h2 className="about-title display-2">About Us</h2>
                        <p className="about-description">
                            <b>
                                Welcome to iFix Electric, where electrical expertise meets unparalleled customer
                                service.
                            </b>
                            <br />
                            <br />
                            With over 25 years of experience in the industry, we have earned a reputation for delivering
                            top-quality electrical solutions that go above and beyond expectations.
                            <br />
                            <br />
                            At iFix Electric, we understand that exceptional service goes beyond technical proficiency.
                            We are committed to creating a memorable customer experience by providing not only
                            outstanding workmanship but also a personal touch. Our goal is to make every interaction
                            with our customers extraordinary.
                            <br />
                            <br />
                            Our team consists of highly skilled and dedicated professionals who are passionate about
                            their craft. With extensive industry knowledge and expertise, we have the capability to
                            tackle any electrical challenge with precision and efficiency. We stay up-to-date with the
                            latest advancements in the field, utilizing cutting-edge techniques and technology to ensure
                            our services remain at the forefront of innovation.
                            <br />
                            <br />
                            What truly sets us apart is our customer-centric approach. We prioritize your needs and
                            strive to exceed your expectations. Our team members are not only experts in their
                            respective fields but also excellent communicators and problem-solvers. We take the time to
                            listen to your concerns, understand your requirements, and provide tailored solutions that
                            address your unique electrical needs.
                            <br />
                            <br />
                            Whether you require residential, commercial, or industrial electrical services, iFix
                            Electric has you covered. From installations and repairs to maintenance and upgrades, we
                            handle each project with meticulous attention to detail. We aim for excellence in every
                            aspect of our work, ensuring that every electrical system we work on is safe, reliable, and
                            efficient.
                            <br />
                            <br />
                            At iFix Electric, we believe in building long-lasting relationships with our clients. We
                            strive to be your trusted partner in all your electrical needs, providing ongoing support
                            and service even after the initial project is completed. Our dedication to customer
                            satisfaction extends beyond the job at hand, as we continuously strive to establish enduring
                            connections with each and every one of our customers.
                            <br />
                            <br />
                            Experience the difference that exceptional customer service and decades of industry
                            expertise can make for your electrical needs. Contact iFix Electric today and let us
                            illuminate your world with our professionalism, expertise, and unwavering commitment to
                            exceeding your expectations.
                        </p>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
