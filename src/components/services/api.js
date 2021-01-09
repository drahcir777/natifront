import axios from "axios";

const api = axios.create({
  baseURL: "http://18.231.172.63:3333",
});

export default api;