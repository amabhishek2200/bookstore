
import React from 'react'
import { useForm } from "react-hook-form"
function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
   <>
   <div className="flex h-screen items-center justify-center ">
   <div  className="w-[600px] ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="font-bold text-lg">Contact Us Form</h3>
    <div className="mt-4 space-y-2">
                <span className=" dark:text-white">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
    </div>
    {/* Email */}
    <div className="mt-4 space-y-2">
                <span className=" dark:text-white">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900"
                  {...register("email", { required: true })}
                />
                 <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                
    </div>
    
    <div className="mt-4 space-y-2">
       <span className="dark:text-white">Your Message</span>
        <br /> 
        <textarea
         placeholder="Your Message"
         className="textarea textarea-bordered textarea-lg w-[100%] max-w-xl dark:bg-slate-900"
         {...register("message", { required: true })}
         ></textarea>
         <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
    </div>
    <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
    </div>
  </form>

  </div>
</div>
   </div>
   </>
  )
}

export default Contactus
