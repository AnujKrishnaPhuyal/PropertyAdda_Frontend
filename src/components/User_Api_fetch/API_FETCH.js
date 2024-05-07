import axios from "axios";

const baseurl = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseurl,
  header: {
    Authorization: localStorage.getItem("access")
      ? "JWT " + localStorage.getItem("access")
      : null,
    "Content-type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
