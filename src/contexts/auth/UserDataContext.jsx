import { createContext,  useContext,  useEffect,  useState } from "react";
import { useNavigate } from "react-router";
import { logout as logoutApi } from "../../queries/logout";
import { useMutation } from "@tanstack/react-query";


const UserDataContext = createContext()

export const UserDataProvider = ({children}) =>{
    
    const [userToken , setUserToken] = useState(null)
    const navigate = useNavigate()
        
     useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserToken(JSON.parse(userData));
    }
  }, []);
  

   const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: (response) => {
      console.log(response)
      localStorage.clear();
      sessionStorage.clear();
      setUserToken(null);
      navigate("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.response?.data || error.message);
    },
  });

  const logout = () =>{
    logoutMutation.mutate()
  }

    
    return(
        <UserDataContext.Provider value={{userToken,setUserToken,logout}} >
            {children}
        </UserDataContext.Provider>
    )
}
export const useToken = () => useContext(UserDataContext)