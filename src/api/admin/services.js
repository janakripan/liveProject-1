import { API, DevAPI } from "../httpServices";
import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  GET_DEVELOPERS,
  POST_DEVELOPERS,
} from "./endPoints";

//////////////////////   USER LOGIN ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const userLogin = (credential) =>
  API.post(ADMIN_LOGIN, {
    email: credential.email,
    Password: credential.password,
  }).then((res) => res.data);

//////////////////////   ADMIN LOGOUT ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const userLogout = async () => {
  const response = await API.post(ADMIN_LOGOUT);
  return response.data;
};

//////////////////////   GET DEVELOPERS ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const getDevelopers = async () => {
  const response = await DevAPI.get(GET_DEVELOPERS);
  return response.data;
};

//////////////////////   POST DEVELOPERS ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const postDevelopers = (credentials) => DevAPI.post(POST_DEVELOPERS,{
   ...credentials,
    projects: "",
});
