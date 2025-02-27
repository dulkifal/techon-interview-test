import axios from "axios";

const token = localStorage.getItem("token");
const api = axios.create({
  baseURL: "https://kerala-bus.onrender.com/api/owner",
  headers: { Authorization: token },
});

export default api;
