import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_BACKEND_URL;

function useAxiosInstance() {
  const authUser = useSelector((state) => state.authUser);

  const axiosInstance = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${authUser?.token || ""}`,
    },
  });

  return { axiosInstance };
}

export default useAxiosInstance;
