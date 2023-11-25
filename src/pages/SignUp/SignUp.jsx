import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import { imageUpload } from '../../hooks/imageUpload'
import { getToken, saveUser } from '../../hooks/auth'
import { useState } from 'react'

const SignUp = () => {
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {createUser, updateUserProfile} = useAuth();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const image = data.image[0]
    const imageData = await imageUpload(image)
    setError('')
    createUser(data.email, data.password)
    .then(res => {
      const loggedUser = res.user 
      console.log(loggedUser)
      updateUserProfile(data.name, imageData?.data?.display_url)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account has been created successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')

       // save user
      const savedUser = saveUser(loggedUser)
      console.log(savedUser)

      // token
      getToken(loggedUser?.email)
      
    })
    .then(error => {
      setError(error)
    })
  
  }

 

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-myColor sm:text-3xl">
          Get started today
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Sign up to your account</p>
          <div>
            <label for="name" className="sr-only">Name</label>
            <div className="relative">
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
              />
              {errors.name && <span className='text-red-600'>Name is required</span>}
            </div>
          </div>
          <div className='px-4'>
              <label for='image' className='block mb-2 text-sm text-gray-400'>
                Select Image:
              </label>
              <input
                {...register("image", { required: true })}
                type='file'
                id='image'
                accept='image/*'
              />
              {errors.image && <span className='text-red-600'>Image is required</span>}
            </div>

          <div>
            <label for="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
              {errors.email && <span className='text-red-600'>Email is required</span>}
            </div>
          </div>
          <div>
            <label for="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                {...register("password", 
                {required: true, 
                  minLength: 6 ,
                  maxLength: 15,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-z])/
                })}
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
              {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
              {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password should not be more than 10 char..</span>}
              {errors.password?.type === 'minLength' && <span className='text-red-600'>Password should not be less than 6 char..</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-600'>Password is not strong</span>}
            </div>
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-myColor px-5 py-3 text-sm font-medium text-white"
          >
            Sign up
          </button>

          <hr />
          <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-myColor border-rounded cursor-pointer rounded-lg'>
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
          <p className='text-red-600'>{error}</p>
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link to='/login' className='ml-2 text-myColor hover:border-b-2 hover:border-myColor'>Sign In</Link>
          </p>
        </form>
      </div>
    </div>

  )
}

export default SignUp
