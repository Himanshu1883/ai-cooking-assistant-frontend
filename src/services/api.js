import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/", // Match Django backend
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
