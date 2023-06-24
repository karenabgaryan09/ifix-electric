import React, { useState, useEffect } from "react";
import { Header, Navbar, Footer, FieldBtn, Select, Button } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import { useObserver } from "../../hooks/lazy-load/useObserver";
import localData from "../../localData";
import useJoiValidation from "../../hooks/joi-validation/useJoiValidation";
import { v4 as uuidv4 } from "uuid";

const HeaderChildren = () => {
    const { cover } = localData.images;
    const { ref, inView } = useObserver();

    return (
        <div className="cover-wrapper" ref={ref}>
            <div className="cover">
                <img src={cover} alt="" />
            </div>
            <div className={`banner ${inView ? "lazy-animate" : ""}`} data-lazy="fade-right">
                Electrical
            </div>
        </div>
    );
};

const ServicesSection = () => {
    const { ref, inView } = useObserver();
    const { logo2 } = localData.images;

    return (
        <section className="services" ref={ref}>
            <div className="row row-1">
                <div className="block block-left bg-primary">
                    <div className="container">
                        <h1
                            className={`services-sup-title display-3 ${inView ? "lazy-animate" : ""}`}
                            data-lazy="fade-right"
                            style={{ transitionDelay: "1s" }}
                        >
                            Electrician Services - Asheville NC
                        </h1>
                    </div>
                </div>
                <div className="block block-right">
                    <div className="container">
                        <h2 className="display-2 services-title">Expert Electrical Service & Repairs - Asheville NC</h2>
                        <div className="services-description">
                            When unexpected electrical problems arise, you need a reliable and skilled electrician to
                            address them promptly. Look no further than iFIX Electric for all your electrical repair
                            needs. Whether it's a minor issue like replacing an outlet or a more significant problem
                            such as a faulty breaker that keeps tripping, iFIX Electric possesses the necessary
                            expertise to handle any residential electrical service and repairs.
                            <br />
                            <br />
                            At iFIX Electric, we understand the importance of resolving electrical issues effectively
                            and ensuring your safety for the long term. That's why we offer a comprehensive range of
                            services, from simple fixes to emergency electrical assistance. Our team performs necessary
                            repairs that not only fix the immediate problem but also provide ongoing electrical
                            maintenance and regular inspections to prepare you for the future.
                            <br />
                            <br />
                            What sets our certified electricians at iFIX Electric apart is their:
                            <br />
                            <br />
                            <ul>
                                <li>Experience</li>
                                <li>Professionalism</li>
                                <li>Timeliness</li>
                                <li>Courtesy</li>
                            </ul>
                            <br />
                            Each member of our team has the necessary expertise and knowledge to deliver exceptional
                            service.
                            <br />
                            <br />
                            We take pride in not only working in Asheville North Carolina, but also living in these
                            areas. As your neighbors, we are dedicated to providing top-notch electrical repairs,
                            ensuring the job is done right every time.
                            <br />
                            <br />
                            Don't hesitate to contact iFIX Electric to learn more about our services. Trust us to handle
                            your electrical repairs with precision and care.
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="block block-left bg-warning">
                    <h1 className={`services-sup-title`} style={{ opacity: 0 }}>
                        Electrician Services - Asheville NC
                    </h1>
                    <img src={logo2} alt="" />
                </div>
                <div className="block block-right bg-light">
                    <div className="container">
                        <h2 className="display-2 services-title"> iFIX Electric’s Residential Services</h2>
                        <div className="services-description">
                            When homeowners encounter electrical problems, it is crucial to seek the expertise of a
                            professional. At iFIX Electric, our electricians possess the necessary professional
                            experience to address a wide range of electrical services and repairs safely, effectively,
                            and efficiently. We highly recommend regular electrical inspections, particularly for those
                            who have recently moved into older homes. In the event that our iFIX Electric electrician
                            identifies any issues, you can trust that they will provide clear communication regarding
                            all the work being done. Even if homeowners are familiar with their electrical system,
                            certain problems may arise that require the assistance of a professional.
                            <br />
                            <br />
                            Our electrical services and repairs include:
                            <br />
                            <br />
                            <ul>
                                <li>Electrical repairs</li>
                                <li>Surge protectors</li>
                                <li>Electrical inspections</li>
                                <li>Indoor/outdoor lighting</li>
                                <li>Generator installation</li>
                                <li>Electrical upgrades</li>
                                <li>Appliance installation and repair</li>
                                <li>Emergency electrical services</li>
                            </ul>
                            <br />
                            While the above list encompasses many of our commonly-performed electrical services, we are
                            capable of addressing much more. If you are experiencing any issues with any of the
                            electrical components in your home, don't hesitate to contact an iFIX Electric electrician
                            today.
                            <br />
                            <br />
                            You can also conveniently schedule an appointment with one of our certified electricians by
                            completing our contact form.
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Form = () => {
    const { validateContact } = useJoiValidation();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [state, setState] = useState({
        name: "",
        email: "",
    });

    const [result, setResult] = useState({});
    const [errorMessages, setErrorMessages] = useState([]);

    const onChange = (e) => {
        const { name, value } = e.target || e;
        setState({ ...state, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { error } = validateContact(state);
        if (!error) return;
        setWasSubmitted(true);
    };

    useEffect(() => setResult(validateContact(state)), [state]);

    useEffect(() => {
        if (!wasSubmitted) return;
        const errors = {};
        result?.error?.details.forEach((item, index) => {
            if (errors[item.path[0]]) return;
            errors[item.path[0]] = item.message;
        });
        setErrorMessages(errors);
    }, [result, wasSubmitted]);

    const [items, setItems] = useState([
        { title: "service 1", isActive: false, id: uuidv4() },
        { title: "service 2", isActive: false, id: uuidv4() },
        { title: "service 3", isActive: false, id: uuidv4() },
        { title: "service 4", isActive: false, id: uuidv4() },
        { title: "service 5", isActive: false, id: uuidv4() },
        { title: "service 6", isActive: false, id: uuidv4() },
    ]);

    return (
        <form
            action="#/dsfd"
            className={`contact-form needs-validation ${wasSubmitted ? "was-submitted" : ""}`}
            onSubmit={onSubmit}
            // noValidate
        >
            <div className="container">
                <h2 className="contact-title display-3">Need Service?</h2>
                <FieldBtn
                    name="name"
                    variant="contained"
                    color="light"
                    errorMessage={errorMessages.name}
                    btnClassName={errorMessages.name ? "is-invalid" : "is-valid"}
                    value={state.name}
                    callback={onChange}
                    placeholder="name"
                />
                <br />

                <FieldBtn
                    name="email"
                    variant="contained"
                    color="light"
                    errorMessage={errorMessages.email}
                    btnClassName={errorMessages.email ? "is-invalid" : "is-valid"}
                    value={state.email}
                    callback={onChange}
                    placeholder="email"
                />
                <br />

                <FieldBtn
                    name="phone"
                    variant="contained"
                    color="light"
                    errorMessage={errorMessages.phone}
                    btnClassName={errorMessages.phone ? "is-invalid" : "is-valid"}
                    value={state.phone}
                    callback={onChange}
                    placeholder="phone number"
                />
                <br />

                <Select {...{ items, setItems, placeholder: "service type", variant: "contained", color:'light' }} />
                <br />

                <FieldBtn
                    name="message"
                    variant="contained"
                    color="light"
                    placeholder="placeholder"
                    Tag="textarea"
                />
                <br />

               

                <Button variant="contained" className="submit" type="submit" name="submit" />
            </div>
        </form>
    );
};

const ContactSection = () => {
    return (
        <section className="contact">
            <div className="map-wrapper">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103890.98966351799!2d-82.64780591444055!3d35.53904366406443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC%2C%20USA!5e0!3m2!1sen!2sam!4v1687589599664!5m2!1sen!2sam"
                        // width="600"
                        // height="450"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <Form />
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
                <ContactSection />
            </motion.main>
            <Footer />
        </>
    );
}
