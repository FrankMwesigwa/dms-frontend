import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  baseURL1: "http://172.27.1.123/api",
  headers: {
    Authorization: user ? `Bearer ${user.accessToken}` : "",
  },
});

export default API;