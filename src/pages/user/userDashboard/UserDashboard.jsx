import React from 'react'
import { useNavigate } from 'react-router';
import { projectData } from '../../../constants/Projects/ProjectConstant';
import { useToken } from '../../../contexts/auth/UserDataContext';
import SharedProjectCard from '../../../components/Shared/SharedProjectCard';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { userToken} = useToken()
  const authToken = userToken?.FullName;
 


  const userProjects = projectData.filter((project) =>
      project.developers.some((dev) => dev.name === authToken)
    );
    const handleclick = (projectId) =>{
      
        navigate(`/user/${projectId}`);
       
      

    }

  return (
    <div className='w-full h-[90vh] overflow-y-auto overflow-x-hidden  '>
      <div className='w-full h-full max-w-screen-xl mx-auto p-6'>
        <h1 className='font-satoshi font-bold text-[26px] text-heading  '>
        Assigned Projects
        </h1>
      <div className='w-full h-fit p-2  grid md:grid-cols-3 grid-cols-1 gap-4 '>
        {userProjects.map((items)=>(
          <SharedProjectCard key={items.project_id} items={items} onClick={()=>handleclick(items.project_id)} />
        ))}


      </div>

      </div>
      
    </div>
  )
}

export default UserDashboard
