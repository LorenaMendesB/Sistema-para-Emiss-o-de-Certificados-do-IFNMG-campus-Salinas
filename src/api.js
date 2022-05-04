import axios from "axios";

const api = axios.create({
    baseURL: 'https://dexbackend.herokuapp.com/'
});
export default api;