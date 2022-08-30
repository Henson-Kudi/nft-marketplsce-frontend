import axios from "axios"

const baseURL =
    process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_SERVER_URL
        : "http://localhost:5000/api"

export const baseUrl = axios.create({
    baseURL: baseURL,
    headers: {
        accept: "*/*",
        "Content-Type": "application/json",
    },
})
