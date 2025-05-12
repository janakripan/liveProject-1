import { createContext,  useContext,  useEffect,  useState } from "react";
import { useNavigate } from "react-router";


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
  

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    sessionStorage.clear(); // optional if you're using sessionStorage too
    setUserToken(null);
    navigate("/"); // or redirect to /login
  };

    
    return(
        <UserDataContext.Provider value={{userToken,setUserToken,logout}} >
            {children}
        </UserDataContext.Provider>
    )
}
export const useToken = () => useContext(UserDataContext)