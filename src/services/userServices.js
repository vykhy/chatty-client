import axiosInstance from "../../axiosInstance";

export async function handleUserSignup(data) {
  try {
    const { data: result } = await axiosInstance.post("/users/signup", data);
    return result;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function handleUserLogin(data) {
  try {
    const { data: result } = await axiosInstance.post("/users/login", data);
    return result;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
