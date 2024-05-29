import React from 'react'
import { useForm } from "react-hook-form"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAuth } from '../context/AuthProvider'
const Contact = () => {
 const [authUser,setAuthuser]=useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
<>
<Navbar/>
<div className="flex h-screen items-center justify-center  ">
    <form onSubmit={handleSubmit(onSubmit)} >
               
                <h1 className="font-bold  text-lg">Contact Us!</h1>
                <div className="mt-4 space-y-2">
                    <span>Name</span>
                    <br />
                    {authUser?(
                          <input
                          type="text"
                          value={authUser.fullname}
                          placeholder="Enter your  full name"
                          className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                          {...register("name", { required: true })}

                      />
                    ):(

                        <input
                        type="text"
                        placeholder="Enter your  full name"
                        className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                        {...register("fullname", { required: true })}

                         />
                     )}
                        
                    <br />
                    {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}

                    </div>
                  {/* Email */}
                    <div className="mt-4 space-y-2">
                    <span>Email</span>
                    <br />
                    {authUser?( <input
                        type="email"
                        value={authUser.email}
                        placeholder="Enter your email"
                        className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                        {...register("email", { required: true })} 
                    />):( <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                        {...register("email", { required: true })} 
                    />)}
                   
                    <br />
                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    
                    </div>
                  {/* Message */}
                  <div className="mt-4 space-y-2">
                    <span>Message</span>
                    <br />
                    <textarea className="textarea textarea-bordered w-80 dark:bg-slate-900 dark:text-white" placeholder="Type your message..."></textarea>
                    <br />
                    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

                    </div>
                    {/*  Button */}
                    <div className="flex justify-around mt-6">
                        <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                            Submit
                        </button>
                      
                     </div> 
                     </form>
    </div>
    <Footer/>
</>
  )
}

export default Contact