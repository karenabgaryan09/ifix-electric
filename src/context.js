import React, { useState, useEffect, createContext, useContext } from "react";
import localData from "./localData";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import useFetch from "./hooks/useFetch";
export const Context = createContext();

export default function Provider({ children }) {
    const [state, setState] = useState({
        fetchedData: null,
        localData,
    });

    const [animations, setAnimations] = useState({
        pageFade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 },
        },
        lazyLoad: {
            fadeUp: {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                // exit:{ opacity: 0 },
                // transition:{ duration: 0.5 }
            },
        },
    });

    const notify = () => toast("Wow so easy!");
    // const notify = () => {
    //     toast("Default Notification !");

    //     toast.success("Success Notification !", {
    //         position: toast.POSITION.TOP_CENTER,
    //         // autoClose: false,
    //         autoClose: 7000,
    //         // icon: false,
    //         icon: "🚀",
    //         delay: 1000,
    //         // draggablePercent: 60,
    //         // type: toast.TYPE.INFO,
    //         // onOpen: () => window.alert('Called when I open'),
    //         // onClose: () => window.alert('Called when I close')
    //     });

    // };

    const successAlert = (message = "success") => {
        toast.success(message);
    };
    const errorAlert = (message = "error") => {
        toast.error(message);
    };

    const [isMessageSending, setIsMessageSending] = useState(false);
    const sendMessageToAdmin = (
        form,
        message = "Your application was succcessfully sent",
        successCallback = () => {},
        errorCallback = () => {}
    ) => {
        setIsMessageSending(true);
        emailjs.sendForm("service_au3n0zs", "template_ilhqk4c", form, "keL_qtXEJ3CLHIhls").then(
            (result) => {
                successAlert(message);
                setIsMessageSending(false);
                sendMessageToUser(form);
                successCallback()
            },
            (error) => {
                errorAlert();
                setIsMessageSending(false);
                errorCallback()
            }
        );
    };

    const [isMessageSendingToUser, setIsMessageSendingToUser] = useState(false);
    const sendMessageToUser = (form) => {
        setIsMessageSendingToUser(true)
        emailjs.sendForm("service_au3n0zs", "template_fui6w7l", form, "keL_qtXEJ3CLHIhls").then(
            (result) => {
                console.log("successfully sent message to user");
                setIsMessageSendingToUser(false)
            },
            (error) => {
                console.log("failed to send message to user");
                setIsMessageSendingToUser(false)
            }
        );
    };

    // ifix electric data
    const [ifixElectricData,setIfixElectricData] = useState([])
    const { getPosts } = useFetch();

    const getConvertedData = (data) => {
        const convertedData = [];
        data.table.rows.forEach((item, index) => {
            const obj = {};
            obj.category = item.c[0]?.v
            obj.title = item.c[1]?.v
            obj.description = item.c[2]?.v;
            // convertedData[item.c[0]?.v.toLowerCase()] = obj;
            convertedData.push(obj)
        });
        return convertedData
    };

    useEffect(() => {
        getPosts((err, data) => {
            const tempData = JSON.parse(data.substr(47).slice(0, -2));
            const convertedData =  getConvertedData(tempData);
            setIfixElectricData(convertedData);
            // console.log(convertedData)
        });
    }, []);


    return (
        <Context.Provider
            value={{
                state,
                ...state,
                setState,
                animations,
                sendMessageToAdmin,
                ifixElectricData
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useGlobalContext = () => useContext(Context);
