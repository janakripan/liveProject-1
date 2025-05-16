import { useMutation, useQuery } from "@tanstack/react-query";
import { getDevelopers, postDevelopers, userLogin, userLogout } from "./services";

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