import axios from "axios"

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
  // baseURL: "http://192.168.1.13:8000/",

  headers: {
    "Content-type": "application/json"
  }
})