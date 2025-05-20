import { useMutation, useQuery } from "@tanstack/react-query";
import { getDevelopers, getProjects, postDevelopers, postProjects, updateProjects, userLogin, userLogout } from "./services";

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


export const useGetDevelopers = () =>
  useQuery({
    queryFn:getDevelopers,
    queryKey: ["getDevelopers"]
  })

export const usePostDevelopers = () =>
  useMutation({
    mutationFn:postDevelopers,
    mutationKey:["postDevelopers"],
    
  })

  export const useGetProjects = () =>
  useQuery({
    queryFn:getProjects,
    queryKey: ["getProjects"]
  })

  export const usePostProjects = () =>
  useMutation({
    mutationFn:postProjects,
    mutationKey:["postProjects"],
    
  })

  export const useUpdateProjects = () =>
    useMutation({
      mutationFn:({ data, id }) => updateProjects({data, id}),
      mutationKey:["updateProjects"]
    })