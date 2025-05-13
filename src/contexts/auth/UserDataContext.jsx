import { createContext,  useContext,  useEffect,  useState } from "react";
import { useNavigate } from "react-router";
import { useUserLogout } from "../../api/admin/hooks";



const UserDataContext = createContext()

export const UserDataProvider = ({children}) =>{
    
    const [userToken , setUserToken] = useState(null)
    const navigate = useNavigate()
    const {mutate:handleLogout} = useUserLogout()
        
     useEffect(() => {
    const userData = localStorage.getItem("userData") || sessionStorage.getItem("userData");
    if (userData) {
      setUserToken(JSON.parse(userData));
    }
  }, []);
  

   const logout = () => {
  handleLogout(undefined, {
    onSuccess: (response) => {
      console.log(response);
      localStorage.clear();
      sessionStorage.clear();
      setUserToken(null);
      navigate("/");
    },
    onError: (error) => {
      console.error("Logout failed:", error.response?.data || error.message);
    },
  });
};



    
    return(
        <UserDataContext.Provider value={{userToken,setUserToken,logout}} >
            {children}
        </UserDataContext.Provider>
    )
}
export const useToken = () => useContext(UserDataContext)