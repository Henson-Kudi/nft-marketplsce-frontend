import axios from "axios"

export const baseUrl = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        accept: "*/*",
        "Content-Type": "application/json",
    },
})
