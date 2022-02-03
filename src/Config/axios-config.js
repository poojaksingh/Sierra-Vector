import axios from "axios";
let URL = "";

if (process.env.NODE_ENV !== "production") {
  URL = "https://jsonplaceholder.typicode.com";
} else {
  URL = "https://jsonplaceholder.typicode.com"; // PRODUCTION URL
}

const API = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
