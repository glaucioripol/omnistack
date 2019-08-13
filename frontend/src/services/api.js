import axios from "axios";

// configurando api
const api = axios.create({
    baseURL: "http://127.0.0.1:3333"
});

export default api;