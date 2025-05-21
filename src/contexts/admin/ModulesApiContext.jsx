import { createContext, useContext, useEffect, useState } from "react";
import { useGetModules } from "../../api/admin/hooks";

const ModuleContext = createContext()

export const ModuleProvider = ({children}) =>{

    const { data, isLoading, error, refetch } = useGetModules()
    const [modules , setModules] = useState()
    
    useEffect(()=>{
        setModules(data?.data)
    },[data])



    return (
        <ModuleContext.Provider value={{ modules, isLoading, error, refetch}}>
            {children}
        </ModuleContext.Provider>
    )
}
export const useModules = () => useContext(ModuleContext)