import axios from "axios";

var axiosInstance;

let generateAxiosInstance = () => {
  axiosInstance = axios.create({
    baseURL: `http://79.137.87.204:5050`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  axiosInstance.interceptors.request.use((req) => {
    const token = window.localStorage.getItem("token") || "";
    req.headers.Authorization = token;
    return req;
  });
};

export { axiosInstance, generateAxiosInstance };