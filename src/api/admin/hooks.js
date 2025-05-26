import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getDevelopers,
  getModules,
  getProjects,
  getSubModules,
  postDevelopers,
  postModules,
  postProjects,
  postSubmodules,
  updateDevelopers,
  updateModules,
  updateProjects,
  updateSubmodules,
  userLogin,
  userLogout,
} from "./services";

///////////////////////// AUTHENTICATION ⚠️⚠️⚠️⚠️////////////////////////

export const useUserLogin = () =>
  useMutation({
    mutationKey: ["userLogin"],
    mutationFn: userLogin,
  });

export const useUserLogout = () =>
  useMutation({
    mutationFn: userLogout,
    mutationKey: ["userLogout"],
  });

/////////////////////DEVELOPER HOOKS 👨‍💻👨‍💻👨‍💻👨‍💻////////////////////////

export const useGetDevelopers = () =>
  useQuery({
    queryFn: getDevelopers,
    queryKey: ["getDevelopers"],
  });

export const usePostDevelopers = () =>
  useMutation({
    mutationFn: postDevelopers,
    mutationKey: ["postDevelopers"],
  });

export const useUpdateDevelopers = () =>
  useMutation({
    mutationFn: ({ data, id }) => updateDevelopers({ data, id }),
    mutationKey: ["updateDevelopers"],
  });

//////////////////////////PROJECTS HOOKS🗃️🗃️🗃️🗃️🗃️ ///////////////////

export const useGetProjects = () =>
  useQuery({
    queryFn: getProjects,
    queryKey: ["getProjects"],
  });

export const usePostProjects = () =>
  useMutation({
    mutationFn: postProjects,
    mutationKey: ["postProjects"],
  });

export const useUpdateProjects = () =>
  useMutation({
    mutationFn: ({ data, id }) => updateProjects({ data, id }),
    mutationKey: ["updateProjects"],
  });

////////////////  MODULE HOOKS 📂📂📂📂 //////////////////

export const useGetModules = () =>
  useQuery({
    queryFn: getModules,
    queryKey: ["getModules"],
  });

export const usePostModules = () =>
  useMutation({
    mutationFn: postModules,
    mutationKey: ["postModules"],
  });

export const useUpdateModules = () =>
  useMutation({
    mutationFn: ({ data, projectAID, moduleID }) =>
      updateModules({ data, projectAID, moduleID }),
    mutationKey: ["updateModules"],
  });

export const useGetSubModules = () =>
  useQuery({
    queryKey: ["getSubmodules"],
    queryFn: getSubModules,
  });

export const usePostSubmodules = () =>
  useMutation({
    mutationFn: postSubmodules,
    mutationKey: ["postSubmodules"],
  });

  export const useUpdateSubmodules = ()=>
    useMutation({
      mutationFn:({data, projectAID , moduleID , subModuleID})=>updateSubmodules({data, projectAID , moduleID , subModuleID}),
      mutationKey:['updateSubmodules']
    })