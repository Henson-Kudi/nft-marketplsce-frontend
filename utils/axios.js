import axios from "axios"

const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://hk-marketplace-server.herokuapp.com/api"
        : "http://localhost:5000/api"



export const baseUrl = axios.create({
    baseURL: baseURL,
    headers: {
        accept: "*/*",
        "Content-Type": "application/json",
    },
})
