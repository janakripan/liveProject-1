import axiosInstance from "../utils/axiosInstance";

export const logout = async () => {
  const response = await axiosInstance.post("/logout");
  return response.data;
};