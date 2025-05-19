import { createContext, useContext, useEffect, useState } from "react";
import { useGetProjects } from "../../api/admin/hooks";

const ProjectContext = createContext()


export const ProjectProvider = ({children})=>{
    const { data, isLoading, error, refetch } = useGetProjects()
    const [projects , setProjects] = useState()
    console.log(data)

    useEffect(()=>{
        setProjects(data?.data)
    },[data])
    return(
        <ProjectContext.Provider value={{ projects, isLoading, error, refetch}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProjects = () => useContext(ProjectContext)