import axios from "axios";

export const api = axios.create({
    baseURL: "https://forragensalt.onrender.com"
})