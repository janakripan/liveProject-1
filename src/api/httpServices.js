import axios from 'axios';

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'accept': '/',
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

 
export const DevAPI = axios.create({
  baseURL : import.meta.env.VITE_API_DEV_URL,
  headers: {
    'accept': '/',
    
  },
  

})