import React, { useState, useEffect } from "react";
import { Button } from "../";
import localData from "../../localData";
import useLock from "../../hooks/useLock";

export default function Drawer({
    drawerClassName = "drawer-left",
    togglerClassName = '',
    togglerVariant = "contained",
    togglerColor = "primary",
    togglerContent = "",
    togglerIcon,
    content = null,
    children = null,
    Child = null,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay] = useState("none");
    const { close } = localData.svgs;

    useEffect(() => {
        if (display === "block") setIsOpen(true);
    }, [display]);

    const { lockScroll, unlockScroll } = useLock();

    useEffect(() => {
        isOpen ? lockScroll() : unlockScroll();
    }, [isOpen]);

    const parentCallback = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button
                variant={togglerVariant}
                color={togglerColor}
                className={`${togglerClassName} ${isOpen ? "active" : ""}`}
                onClick={() => setDisplay("block")}
            >
                {togglerContent}
                {togglerIcon}
            </Button>
            {display === "block" && (
                <>
                    <div
                        className={`drawer ${drawerClassName} ${isOpen ? "show" : ""}`}
                        onTransitionEnd={() => !isOpen && setDisplay("none")}
                    >
                        <div onTransitionEnd={(e) => e.stopPropagation()}>
                            <Button
                                variant="circle"
                                color="dark"
                                icon={close}
                                className="drawer-close"
                                onClick={() => setIsOpen(false)}
                            />
                            {content || children || (Child && <Child parentCallback={parentCallback} />) || "drawer"}
                        </div>
                    </div>
                    <div className={`drawer-backdrop ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}></div>
                </>
            )}
        </>
    );
}
