import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_BACKEND_URL;

console.log(url);
const axiosInstance = axios.create({ baseURL: url });

export default axiosInstance;
