import React, { useState, useEffect, useRef } from "react";
import { Footer, FieldBtn, Select, Button, Modal } from "../../components";
import { useGlobalContext } from "../../context";
import localData from "../../localData";
import useJoiValidation from "../../hooks/joi-validation/useJoiValidation";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
    const formRef = useRef(null);
    const { message, send } = localData.svgs;
    const { preloader } = localData.images;

    const { validateContact } = useJoiValidation();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [state, setState] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
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

    const { sendMessageToAdmin, isMessageSending } = useGlobalContext();

    const modalCallback = () => {
        sendMessageToAdmin(formRef.current);
    };

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
            ref={formRef}
            action="#/dsfd"
            className={`contact-form needs-validation ${wasSubmitted ? "was-submitted" : ""}`}
            onSubmit={onSubmit}
            noValidate
        >
            <h2 className="contact-title display-3">Message Us</h2>
            <div className="wrapper">
                <FieldBtn
                    required={true}
                    name="name"
                    label="Name"
                    variant="contained"
                    color="light"
                    errorMessage={errorMessages.name}
                    btnClassName={errorMessages.name ? "is-invalid" : "is-valid"}
                    value={state.name}
                    callback={onChange}
                />
                <br />
                <FieldBtn
                    name="lastName"
                    label="Last Name"
                    variant="contained"
                    color="light"
                    errorMessage={errorMessages.lastName}
                    btnClassName={errorMessages.lastName ? "is-invalid" : "is-valid"}
                    value={state.lastName}
                    callback={onChange}
                />
            </div>
            <br />

            <FieldBtn
                required={true}
                name="email"
                variant="contained"
                color="light"
                errorMessage={errorMessages.email}
                btnClassName={errorMessages.email ? "is-invalid" : "is-valid"}
                value={state.email}
                callback={onChange}
                label="Email"
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
                label="Phone Number"
            />
            <br />

            <FieldBtn
                name="service"
                variant="contained"
                color="light"
                label="Service Type"
                errorMessage={errorMessages.service}
                btnClassName={errorMessages.service ? "is-invalid" : "is-valid"}
                value={state.service}
                callback={onChange}
            />
            <br />
            {/* <Select
                {...{
                    items,
                    setItems,
                    label: "Service Type",
                    variant: "contained",
                    color: "light",
                    name: "service",
                    callback: onChange,
                }}
            /> */}
            <br />

            <FieldBtn
                required={true}
                name="message"
                variant="contained"
                color="light"
                label="Message"
                errorMessage={errorMessages.message}
                btnClassName={errorMessages.message ? "is-invalid" : "is-valid"}
                value={state.message}
                callback={onChange}
                Tag="textarea"
            />
            <br />

            {/* <Button variant="contained" className="submit" type="submit" name="submit" /> */}
            <Modal
                preventOpen={validateContact(state).error}
                title="details"
                buttonTitle={isMessageSending ? "processing..." : "submit"}
                buttonDisabled={isMessageSending ? true : false}
                buttonEndIcon={isMessageSending ? <img src={preloader} /> : send}
                className="modal-dialog-centered"
                callback={modalCallback}
            >
                <div className="form-data-details">
                    {!Object.keys(state).length
                        ? "no data"
                        : Object.keys(state).map((item, index) => {
                              return (
                                  <div className="row" key={index}>
                                      <h6 className="form-data-details-title">{item} :</h6>
                                      <p className="form-data-details-text">{state[item] || "..."} </p>
                                  </div>
                              );
                          })}
                </div>
            </Modal>
        </form>
    );
}
