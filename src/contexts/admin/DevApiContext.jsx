import { createContext, useContext, useEffect, useState } from "react";
import { useGetDevelopers } from "../../api/admin/hooks";


const DeveloperContext = createContext()

export const DeveloperProvider = ({children}) =>{
    const { data, isLoading, error, refetch } = useGetDevelopers();
    const [developers , setDevelopers] = useState()
    useEffect(()=>{
       
        setDevelopers(data)
    },[data])
    return (
        <DeveloperContext.Provider value={{developers, isLoading , error , refetch}} >
            {children}
        </DeveloperContext.Provider>
    )

}
export const useDevelopers =()=> useContext(DeveloperContext)