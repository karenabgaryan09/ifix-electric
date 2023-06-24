import React, { useState, useEffect } from "react";
import { Dropdown, ControlledAccordion, Drawer, Button } from "../";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import localData from "../../localData";

const menu = [
    { title: "home", to: "/" },
    { title: "about", to: "/about" },
    { title: "products", to: "#/" },
];

const dropdownItems = [
    { title: "dropdown item 1", to: "#/", id: uuidv4() },
    { title: "dropdown item 2", to: "#/", id: uuidv4() },
    { title: "dropdown item 3", to: "#/", id: uuidv4() },
];

const DrawerChild = ({ parentCallback }) => {
    const location = useLocation();

    return (
        <>
            {menu.map(({ title, to }, index) => (
                <li className="nav-item" key={index}>
                    <Link
                        to={to}
                        className={`nav-link ${to === location.pathname ? "active" : ""}`}
                        onClick={parentCallback}
                    >
                        {title}
                    </Link>
                </li>
            ))}

            <Button className="schedule-btn" color="primary" variant="contained" name="Schedule Appointment" />

            <ControlledAccordion
                items={[
                    {
                        buttonName: "dropdown",
                        variant: "text",
                        color: "secondary",
                        content: dropdownItems.map(({ title, to }, index) => (
                            <Link key={index} to={to} className="nav-link" onClick={parentCallback}>
                                {title}
                            </Link>
                        )),
                    },
                ]}
            />
        </>
    );
};

export default function Navbar() {
    const location = useLocation();
    const { bars } = localData.svgs;
    const { logo, guarantee } = localData.images;

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" />
                </Link>
                {/* <div className="burger">
                    <span></span>
                </div> */}

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {menu.map(({ title, to }, index) => (
                            <li className="nav-item" key={index}>
                                <Link to={to} className={`nav-link ${to === location.pathname ? "active" : ""}`}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                        <Dropdown
                            {...{ className: "nav-item", title: "dropdown", isInsideClick: true }}
                            items={dropdownItems}
                        />
                    </ul>
                </div>
                <div className="wrapper">
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
                </div>
                <Drawer
                    togglerVariant="circle"
                    togglerColor="dark"
                    togglerClassName="navbar-toggler"
                    togglerIcon={bars}
                    Child={DrawerChild}
                ></Drawer>
            </div>
        </nav>
    );
}