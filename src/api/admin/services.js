import API from "../httpServices";
import { ADMIN_LOGIN, ADMIN_LOGOUT } from "./endPoints";



//////////////////////   USER LOGIN ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////


export const userLogin = (credential) =>
  API.post(ADMIN_LOGIN, {
    email: credential.email,
    Password: credential.password,
  }).then((res) => res.data);



  //////////////////////   ADMIN LOGOUT ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////


  export const userLogout = async () =>{
    const response= await API.post(ADMIN_LOGOUT)
    return response.data
}