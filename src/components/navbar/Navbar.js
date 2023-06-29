import React, { useState, useEffect } from "react";
import { Dropdown, ControlledAccordion, Drawer, Button } from "../";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import localData from "../../localData";

const menu = [
    { title: "home", isActive: "true", href: "/" },
    { title: "service", href: "#services" },
    { title: "about", href: "#about" },
    { title: "why choose Us", href: "#why-us" },
    { title: "testimonials", href: "#testimonials" },
    { title: "contact", href: "#contact" },
];

// const dropdownItems = [
//     { title: "dropdown item 1", href: "#/", id: uuidv4() },
//     { title: "dropdown item 2", href: "#/", id: uuidv4() },
//     { title: "dropdown item 3", href: "#/", id: uuidv4() },
// ];

const DrawerChild = ({ parentCallback }) => {
    const location = useLocation();

    return (
        <>
            {menu.map(({ title, href }, index) => (
                <li className="nav-item" key={index}>
                    <a
                        href={href}
                        className={`nav-link ${href === location.pathname ? "active" : ""}`}
                        onClick={parentCallback}
                    >
                        {title}
                    </a>
                </li>
            ))}

            {/* <Button className="schedule-btn" color="primary" variant="contained" name="Schedule Appointment" /> */}

            {/* <ControlledAccordion
                items={[
                    {
                        buttonName: "dropdown",
                        variant: "text",
                        color: "secondary",
                        content: dropdownItems.map(({ title, href }, index) => (
                            <Link key={index} href={href} className="nav-link" onClick={parentCallback}>
                                {title}
                            </Link>
                        )),
                    },
                ]}
            /> */}
        </>
    );
};

export default function Navbar() {
    const location = useLocation();
    const { bars } = localData.svgs;
    const { logo, logo2, guarantee } = localData.images;

    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" />
                </a>
                {/* <div className="burger">
                    <span></span>
                </div> */}

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {menu.map(({ title, href, isActive }, index) => (
                            <li className="nav-item" key={index}>
                                <a href={href} className={`nav-link ${isActive ? "active" : ""}`}>
                                    {title}
                                </a>
                            </li>
                        ))}
                        {/* <Dropdown
                            {...{ className: "nav-item", title: "dropdown", isInsideClick: true }}
                            items={dropdownItems}
                        /> */}
                    </ul>
                </div>

                {/* <div className="wrapper">
                    <Button className="guarantee-btn" color="primary" variant="text">
                        <a href="tel:+3072077426">
                            <img src={guarantee} alt="" />
                            <div className="wrapper">
                                <div className="guarantee-text">We Offer Emergency Service</div>
                                <div className="guarantee-number">307-207-7426</div>
                            </div>
                        </a>
                    </Button>
                    <Button className="schedule-btn" color="primary" variant="contained" name="Schedule Appointment" />
                </div> */}
                <div className="right-wrapper">
                    <Drawer
                        togglerVariant="circle"
                        togglerColor="dark"
                        togglerClassName="navbar-toggler"
                        togglerIcon={bars}
                        Child={DrawerChild}
                    ></Drawer>
                    <div className="logo-2">
                        <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
