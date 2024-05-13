import axios from "axios";
import { useNavigate } from "react-router-dom";

// const baseurl = "http://127.0.0.1:8000/api/";
const baseurl = "https://rental.pythonanywhere.com/api/";

const axiosInstance = axios.create({
  baseURL: baseurl,
  timeout: 8000,
  headers: {
    Authorization: localStorage.getItem("access")
      ? "JWT " + localStorage.getItem("access")
      : null,
    // Add other headers if needed
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // Server is unreachable
    if (error.response === undefined) {
      alert("A server error has occurred");
      return Promise.reject(error);
    }

    // Redirect to login page on refresh token failure
    if (
      error.response.status === 401 &&
      originalRequest.url === baseurl + "token/refresh"
    ) {
      window.location.href = "/lugin/";
      return Promise.reject(error);
    }

    // Refresh token logic
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh");
      console.log("i am refreshing the tokens now");

      if (refreshToken) {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/token/refresh/",
            {
              refresh: refreshToken,
            }
          );
          localStorage.setItem("access", response.data.access);
          localStorage.setItem("refresh", response.data.refresh);

          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + response.data.access;
          originalRequest.headers["Authorization"] =
            "JWT " + response.data.access;

          // Retry the original request
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.log("Failed to refresh access token:", refreshError);
          // Redirect to login or handle logout
          alert("you session is complete");
          window.location.href = "/lugin/"; // Redirect to login page
          return Promise.reject(refreshError);
        }
      }
    }

    // For other errors, reject the promise
    return Promise.reject(error);
  }
);

export default axiosInstance;
