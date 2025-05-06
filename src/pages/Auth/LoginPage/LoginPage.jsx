import React from 'react'
import LoginBg from '../../../assets/LoginBg.png'
import AuthForm from '../../../components/Shared/AuthForm'

function LoginPage() {
  return (
    <div className='w-full h-screen  grid  md:grid-cols-2 '>
      <div className='bg-[#EBF5FF] p-4 flex items-center justify-center w-full h-fit md:h-full  '>
        <img src={LoginBg} className=' md:scale-75  lg:scale-100 ' alt=" login background image" />

      </div>
      <div className='bg-white p-4 w-full h-full flex flex-col items-center justify-center lg:px-28'>
        <h1 className='font-rubik font-semibold text-3xl text-gray-900 mb-8 '>
          Login
        </h1>
        <div className='w-full h-fit'>
          <AuthForm />

        </div>
        <p className="text-center text-base mt-4 font-open font-normal">
        Don't have an account?{" "}
        <button
         
          className="text-black font-semibold hover:underline"
        >
          Request
        </button>
      </p>



      </div>
      
    </div>
  )
}

export default LoginPage
