import { API, DevAPI } from "../httpServices";
import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  GET_DEVELOPERS,
  GET_PROJECTS,
  POST_DEVELOPERS,
  POST_PROJECTS,
  UPDATE_DEVELOPERS,
  UPDATE_PROJECT,
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

//////////////////////   GET PROJECTS ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const getProjects = async () => {
  const response = await DevAPI.get(GET_PROJECTS);
  return response.data;
};

//////////////////////   POST PROJECTS ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const postProjects = (data) => DevAPI.post(POST_PROJECTS,{
   projectName: data.projectName,
   projectDescription: data.projectDescription,
   isActive:data.status
    
});

//////////////////////   PUT PROJECTS ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const updateProjects = ({data, id}) => {
  return DevAPI.put(
    UPDATE_PROJECT,
    data,
    {
      headers: {
        
        'accept': '*/*',
        'ProjectID': id,
        'Content-Type': 'application/json',
      },
    }
  );
};

//////////////////////   PUT DEVELOPERS ⚠️⚠️⚠️⚠️⚠️⚠️   ////////////////////////////

export const updateDevelopers = ({data,id})=>{
  return DevAPI.put(UPDATE_DEVELOPERS,
    data,
    {
      headers:{
        'accept':'*/*',
        'id':id,
        'Content-Type':'application/json'
      }
    }
  )
}