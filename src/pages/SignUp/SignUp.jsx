import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-myColor sm:text-3xl">
          Get started today
        </h1>
        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Sign up to your account</p>
          <div>
            <label for="name" className="sr-only">Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div className='px-4'>
              <label for='image' className='block mb-2 text-sm text-gray-400'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>

          <div>
            <label for="email" className="sr-only">Email</label>
            <div className="relative">
              <input
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
            </div>
          </div>
          <div>
            <label for="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
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
