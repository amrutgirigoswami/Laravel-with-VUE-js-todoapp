import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2510/api/v1"
});

export default api;