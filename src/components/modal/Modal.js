import React, { useState, useEffect } from "react";
import useLock from "../../hooks/useLock";
import { Button } from "../";
import localData from "../../localData";

export default function Modal({
    children = "...",
    title = "modal",
    className = "",
    buttonTitle = "open modal",
    buttonDisabled = false,
    Child = null,
    buttonEndIcon = null,
    preventOpen = false,
    callback = ()=>{}
}) {
    const [display, setDisplay] = useState("none");
    const [isOpen, setIsOpen] = useState(false);

    const { lockScroll, unlockScroll } = useLock();
    const { close } = localData.svgs;

    useEffect(() => {
        if (display === "none") return unlockScroll();
        lockScroll();
        setIsOpen(true);
    }, [display]);

    return (
        <>
            <Button
                variant="contained"
                onClick={() => {
                    if(preventOpen) return
                    setDisplay("block");
                }}
                endIcon={buttonEndIcon}
                disabled={buttonDisabled}
            >
                {buttonTitle}
            </Button>
            {display === "block" && (
                <div
                    className={`modal fade ${isOpen ? "show" : ""}`}
                    onClick={() => setIsOpen(false)}
                    onTransitionEnd={() => !isOpen && setDisplay("none")}
                >
                    <div className={`modal-dialog ${className}`}>
                        <div
                            className={`modal-content`}
                            onClick={(e) => e.stopPropagation()}
                            onTransitionEnd={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h5 className="modal-title display-4" id="exampleModalLabel">
                                    {title}
                                </h5>
                                <Button
                                    className="btn-close"
                                    variant="circle"
                                    color="dark"
                                    icon={close}
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>
                            <div className="modal-body">
                                {children}
                                {Child && <Child parentCallback={() => console.log("parent callback")} />}
                            </div>
                            <div className="modal-footer">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{ marginRight: "10px" }}
                                    onClick={() => setIsOpen(false)}
                                    name="cancel"
                                />
                                <Button variant="contained" name="submit" onClick={()=>{
                                    setIsOpen(false)
                                    callback()
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
