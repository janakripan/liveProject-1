import { useMutation } from "@tanstack/react-query";
import {  userLogin, userLogout } from "./services";


export const useUserLogin = () =>
  useMutation({
    mutationKey: ["userLogin"],
    mutationFn: userLogin,
  });

  export const useUserLogout = () =>
    useMutation({
        mutationFn: userLogout,
        mutationKey:["userLogout"]
    })