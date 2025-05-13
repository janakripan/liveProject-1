import axiosInstance from '../utils/axiosInstance';

export const login = async ({ email, password }) => {
  const response = await axiosInstance.post('/oauth', { email, password });
  return response.data;
};