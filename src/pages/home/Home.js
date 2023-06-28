import React, { useState, useEffect, useRef } from "react";
import { Header, Navbar, Footer, Form, Button, Accordion } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import { useObserver } from "../../hooks/lazy-load/useObserver";
import localData from "../../localData";
import { v4 as uuidv4 } from "uuid";

const HeaderChildren = () => {
    const { ref, inView } = useObserver();
    const { location } = localData.svgs;
    return (
        <div className="container" ref={ref}>
            <div className={`hero-content text-danger ${inView ? "lazy-animate" : ""}`} data-lazy="fade-up">
                {/* <h6 className="display-4 hero-suptitle">Electrical</h6> */}
                <a href="https://goo.gl/maps/Umeiy1TaS8dXfRQv6" target="_blank" className="location-link">
                    <Button startIcon={location} size="xl" name="Asheville North Carolina" color="danger" />
                </a>
                <br />
                <br />
                <h1 className="display-1 hero-title">
                    Electrician Services
                    <br /> - Asheville NC
                </h1>
                <a href="tel:+3072077426">
                    <Button name="CALL 307-207-7426" variant="contained" color="danger" />
                </a>
            </div>
        </div>
    );
};

// const ServicesSection = () => {
//     const { ref, inView } = useObserver();
//     const { logo2 } = localData.images;

//     return (
//         <section className="services" ref={ref}>
//             <div className="row row-1">
//                 <div className="block block-left">
//                     <div className="container">
//                         <h1
//                             className={`services-sup-title display-3 ${inView ? "lazy-animate" : ""}`}
//                             data-lazy="fade-right"
//                             style={{ transitionDelay: "1s" }}
//                         >
//                             Electrician Services - Asheville NC
//                         </h1>
//                     </div>
//                 </div>
//                 <div className="block block-right">
//                     <div className="container">
//                         <h2 className="display-2 services-title">Expert Electrical Service & Repairs - Asheville NC</h2>
//                         <div className="services-description description-text">
//                             When unexpected electrical problems arise, you need a reliable and skilled electrician to
//                             address them promptly. Look no further than iFIX Electric for all your electrical repair
//                             needs. Whether it's a minor issue like replacing an outlet or a more significant problem
//                             such as a faulty breaker that keeps tripping, iFIX Electric possesses the necessary
//                             expertise to handle any residential electrical service and repairs.
//                             <br />
//                             <br />
//                             At iFIX Electric, we understand the importance of resolving electrical issues effectively
//                             and ensuring your safety for the long term. That's why we offer a comprehensive range of
//                             services, from simple fixes to emergency electrical assistance. Our team performs necessary
//                             repairs that not only fix the immediate problem but also provide ongoing electrical
//                             maintenance and regular inspections to prepare you for the future.
//                             <br />
//                             <br />
//                             What sets our certified electricians at iFIX Electric apart is their:
//                             <br />
//                             <br />
//                             <ul>
//                                 <li>Experience</li>
//                                 <li>Professionalism</li>
//                                 <li>Timeliness</li>
//                                 <li>Courtesy</li>
//                             </ul>
//                             <br />
//                             Each member of our team has the necessary expertise and knowledge to deliver exceptional
//                             service.
//                             <br />
//                             <br />
//                             We take pride in not only working in Asheville North Carolina, but also living in these
//                             areas. As your neighbors, we are dedicated to providing top-notch electrical repairs,
//                             ensuring the job is done right every time.
//                             <br />
//                             <br />
//                             Don't hesitate to contact iFIX Electric to learn more about our services. Trust us to handle
//                             your electrical repairs with precision and care.
//                             <br />
//                             <br />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="row row-2">
//                 <div className="block block-left bg-warning">
//                     <h1 className={`services-sup-title`} style={{ opacity: 0 }}>
//                         Electrician Services - Asheville NC
//                     </h1>
//                     <img src={logo2} alt="" />
//                 </div>
//                 <div className="block block-right bg-light">
//                     <div className="container">
//                         <h2 className="display-2 services-title"> iFIX Electric’s Residential Services</h2>
//                         <div className="services-description">
//                             When homeowners encounter electrical problems, it is crucial to seek the expertise of a
//                             professional. At iFIX Electric, our electricians possess the necessary professional
//                             experience to address a wide range of electrical services and repairs safely, effectively,
//                             and efficiently. We highly recommend regular electrical inspections, particularly for those
//                             who have recently moved into older homes. In the event that our iFIX Electric electrician
//                             identifies any issues, you can trust that they will provide clear communication regarding
//                             all the work being done. Even if homeowners are familiar with their electrical system,
//                             certain problems may arise that require the assistance of a professional.
//                             <br />
//                             <br />
//                             Our electrical services and repairs include:
//                             <br />
//                             <br />
//                             <ul>
//                                 <li>Electrical repairs</li>
//                                 <li>Surge protectors</li>
//                                 <li>Electrical inspections</li>
//                                 <li>Indoor/outdoor lighting</li>
//                                 <li>Generator installation</li>
//                                 <li>Electrical upgrades</li>
//                                 <li>Appliance installation and repair</li>
//                                 <li>Emergency electrical services</li>
//                             </ul>
//                             <br />
//                             While the above list encompasses many of our commonly-performed electrical services, we are
//                             capable of addressing much more. If you are experiencing any issues with any of the
//                             electrical components in your home, don't hesitate to contact an iFIX Electric electrician
//                             today.
//                             <br />
//                             <br />
//                             You can also conveniently schedule an appointment with one of our certified electricians by
//                             completing our contact form.
//                             <br />
//                             <br />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

const ServicesSection = () => {
    const { ref, inView } = useObserver();
    const { repairs, installations, safety } = localData.images;

    return (
        <section className="services" ref={ref} id="services">
            <div className="container">
                <h2 className="servives-title display-2">Our Services</h2>
                <div className="card-group">
                    <div className="card service-card">
                        <div className="card-header">
                            <div className="card-image">
                                <img src={repairs} alt="" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <h3 className="card-title display-3">Electrical Repairs</h3>
                            <Accordion
                                items={[
                                    {
                                        buttonName: "Emergency Repairs",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Electrical Panel",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Lighting",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Ceiling Fans",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Receptacles / Switches",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="card service-card">
                        <div className="card-header">
                            <div className="card-image">
                                <img src={installations} alt="" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <h3 className="card-title display-3">Installations</h3>
                            <Accordion
                                items={[
                                    {
                                        buttonName: "Carbon Monoxide and Smoke Detectors",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Ceiling and Bathroom Fans",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "EV Chargers / Smart Home Devices",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Receptacle / Switches / Lighting",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Generators / Breakers / Electrical Panels",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="card service-card">
                        <div className="card-header">
                            <div className="card-image">
                                <img src={safety} alt="" />
                            </div>
                        </div>
                        <div className="wrapper">
                            <h3 className="card-title display-3">Electrical Safety</h3>
                            <Accordion
                                items={[
                                    {
                                        buttonName: "Check Breaker integrity",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Check Receptacles (Child Proof)",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Overloading of Circuits",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Evaluate Electrical Panel",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                    {
                                        buttonName: "Electrical Safety Inspection",
                                        variant: "text",
                                        color: "dark",
                                        content: (
                                            <p className="description description-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                                                luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    const { electricImage1, electricImage2 } = localData.images;

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-cover">
                    <div className="pattern">Electric</div>
                    <div className="cover-wrapper">
                        <div className="cover cover-top">
                            <img src={electricImage1} alt="" />
                        </div>
                        <div className="cover cover-bottom">
                            <img src={electricImage2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="about-info">
                    <h2 className="about-title display-2">About Us</h2>
                    <p className="about-description description-text">
                        <b className="primary-text">
                            Welcome to iFix Electric, where electrical expertise meets unparalleled customer service.
                        </b>
                        <br />
                        <br />
                        With over 25 years of experience in the industry, we have earned a reputation for delivering
                        top-quality electrical solutions that go above and beyond expectations.
                        <br />
                        <br />
                        At iFix Electric, we understand that exceptional service goes beyond technical proficiency. We
                        are committed to creating a memorable customer experience.
                        <br />
                        <br />
                        <br />
                        <Link to="/about" className="about-link">
                            <Button name="read more" variant="contained" />
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

const WhyUsSection = () => {
    const { electricImage3 } = localData.images;
    const { bolt, phone, userGraduate, reply } = localData.svgs;

    return (
        <section className="why-us" id="why-us">
            <div className="container">
                <div className="why-us-header">
                    <h6 className="display-6 text-danger">Solving problems since 1963</h6>
                    <h2 className="display-2 text-dark why-us-suptitle">
                        We Provide The Best Residential, Commercial, And Car Locksmith Services
                    </h2>
                </div>
                    <div className="why-us-cover">
                        <img src={electricImage3} alt="" />
                    </div>
                <div className="why-us-body">
                    <div className="wrapper">
                        <h6 className="why-us-subtitle display-6">why choose us</h6>
                        <h2 className="why-us-title display-3">Keep Fully Licensed, Bonded, And Insured</h2>
                    </div>

                    <div className="offer-group">
                        <div className="offer">
                            <div className="offer-icon">{bolt}</div>
                            <div className="wrapper">
                                <h4 className="offer-title display-4">Professional Electricians</h4>
                                <p className="offer-description description-text">
                                    iFIX Electric’s electricians are trained professionals who are well-versed in the
                                    latest safety standards.
                                </p>
                            </div>
                        </div>

                        <div className="offer">
                            <div className="offer-icon">{phone}</div>
                            <div className="wrapper">
                                <h4 className="offer-title display-4">Customer Support</h4>
                                <p className="offer-description description-text">
                                    We pride ourselves on customer service, and have the highest standards of etiquette,
                                    from the time we enter the residence to cleaning up after a project.
                                </p>
                            </div>
                        </div>

                        <div className="offer">
                            <div className="offer-icon">{userGraduate}</div>
                            <div className="wrapper">
                                <h4 className="offer-title display-4">Continuing Education</h4>
                                <p className="offer-description description-text">
                                    All of our electricians are expected to maintain a high level of knowledge pertinent
                                    to our industry and must take regular courses to stay updated.
                                </p>
                            </div>
                        </div>

                        <div className="offer">
                            <div className="offer-icon">{reply}</div>
                            <div className="wrapper">
                                <h4 className="offer-title display-4">Quick Response</h4>
                                <p className="offer-description description-text">
                                    We pride ourselves on answering calls, responding to requests quickly, and efficient
                                    scheduling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const { star } = localData.svgs;
    const { person1, person2, pattern } = localData.images;

    return (
        <section className="testimonials" id="testimonials">
            <img className="testimonials-pattern" src={pattern} alt="" />
            <div className="container">
                <div className="banner">
                    <div className="banner-rating">
                        <div className="banner-stars">
                            <div className="star star-1">{star}</div>
                            <div className="star star-2">{star}</div>
                            <div className="star star-3">{star}</div>
                            <div className="star star-4">{star}</div>
                            <div className="star star-5" style={{ opacity: "0.5" }}>
                                {star}
                            </div>
                        </div>
                        <div className="banner-number">4.8</div>
                    </div>

                    <p className="banner-description">Our average customer rating is 4.8 / 5 based on 2.549 reviews</p>
                </div>

                <div className="reviews">
                    <h2 className="testimonials-title display-2">What Our Customers Say</h2>

                    <div className="review">
                        <div className="review-description">
                            iFIX Electric electricians were professional and thorough, and had my electrical outlets and
                            smoke detectors installed within a day.
                        </div>
                        <div className="wrapper">
                            <div className="review-cover">
                                <img src={person2} alt="" />
                            </div>
                            <div className="review-name">Sarah Wilson</div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="review-description">
                            When we moved to our new house, we started using iFix Electric to install ceiling fans and
                            now they do everything we need.
                        </div>
                        <div className="wrapper">
                            <div className="review-cover">
                                <img src={person1} alt="" />
                            </div>
                            <div className="review-name">Daniel Holiday</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    const { message, location } = localData.svgs;
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-header">
                    <h6 className="display-6">We work 24/7</h6>
                    <h2 className="display-2 text-danger">Call 307-207-7426</h2>
                </div>
                <div className="contact-body">
                    <div className="contact-info">
                        <h2 className="contact-title display-3">contact</h2>
                        <a href="mailto:contact@info.com" target="_blank">
                            <Button startIcon={message} size="lg" name="contact@info.com" color="danger" />
                        </a>
                        <br />

                        <a href="https://goo.gl/maps/Umeiy1TaS8dXfRQv6" target="_blank">
                            <Button startIcon={location} size="lg" name="Asheville North Carolina" color="danger" />
                        </a>
                    </div>
                    <Form />
                </div>
            </div>

            <div className="map-wrapper">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103890.98966351799!2d-82.64780591444055!3d35.53904366406443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC%2C%20USA!5e0!3m2!1sen!2sam!4v1687589599664!5m2!1sen!2sam"
                        // width="600"
                        // height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const { pageFade } = useGlobalContext().animations;

    return (
        <>
            <Navbar />
            <Header title="home">
                <HeaderChildren />
            </Header>
            <motion.main className="home-page" {...pageFade}>
                <ServicesSection />
                <AboutSection />
                <WhyUsSection />
                <TestimonialsSection />
                <ContactSection />
            </motion.main>
            <Footer />
        </>
    );
}
