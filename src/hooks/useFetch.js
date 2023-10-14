import React, { useState } from "react";
import axios from "axios";

const urls = {
    jsonPlaceholder: "https://jsonplaceholder.typicode.com", //http://localhost:3001
    chatGPT: "https://api.openai.com",
    spreadsheets: "https://sheets.googleapis.com",
};

export default function useFetch() {
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    const request = async ({ url, method = "GET", data = {}, headers = {}, cb = () => {} }) => {
        setLoading(true);
        try {
            const response = await axios({
                url,
                method,
                headers,
                data,
                // withCredentials: true,
            });

            setLoading(false);

            cb(null, response.data);
            return response.data;
        } catch (err) {
            if (!err.response) return console.log(err);
            // if (!err.response) return (window.location.pathname = "/connection-error");

            setLoading(false);
            setError(true);

            cb(err.response.data, null);
            throw err.response.data;
        }
    };

    const getProducts = async (cb) => {
        const url = urls.jsonPlaceholder + "/photos?_limit=10";
        return await request({ url, method: "GET", cb });
    };
    const getProduct = async (cb, id) => {
        const url = urls.jsonPlaceholder + `/photos/${id}`;
        return await request({ url, method: "GET", cb });
    };

    const getUsers = async (cb) => {
        const url = urls.jsonPlaceholder + "/users";
        return await request({ url, method: "GET", cb });
    };

    const getPhotos = async (cb) => {
        const url = urls.jsonPlaceholder + "/photos?_limit=134";
        return await request({ url, method: "GET", cb });
    };
    const getPosts = async (cb) => {
        // const spreadsheetId = "1Aon9bNJFDs-joF7BhjD8BKulbLG79-ACcqxStSxwVX0";
        // const range = "testing";
        // const url = urls.spreadsheets + "/v4/spreadsheets/" + spreadsheetId + "/values/" + range;
        // const url = 'https://docs.google.com/spreadsheets/d/1P84NxIHPyKgH6hnZBTBpFC0Lu5AdGfWdun2MLhNyrhY/gviz/tq?'
        const url = 'https://docs.google.com/spreadsheets/d/1_qks2G_o5FBVD3m7KivDuZiCac0l50pICsCBL6QfBG8/gviz/tq?'
        return await request({ url, method: "GET", cb });
    };

    const clearError = () => setError(null);

    return { getProducts, getProduct, getPosts, getUsers, getPhotos, loading, clearError, error, request };
}
