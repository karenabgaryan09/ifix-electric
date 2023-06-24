import React, { useState, createContext, useContext } from "react";
import localData from "./localData";
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

    return (
        <Context.Provider
            value={{
                state,
                ...state,
                setState,
                animations,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export const useGlobalContext = () => useContext(Context);
