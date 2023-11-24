import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'
import { useState } from 'react'

const Login = () => {
  const {signIn} = useAuth()
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    setLoginError('')
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    const image = form.get
    console.log(email, password)

    signIn(email, password)
        .then(result => {
            new Swal("Logged in successfully!");
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            setLoginError(error.message);

        })
}


  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-myColor sm:text-3xl">
          Log in Now
        </h1>
        <form
          onSubmit={handleLogin}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Sign in to your account</p>
          <div>
            <label for="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                name="email"
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
                name="password"
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
            Log In
          </button>

          <hr />
          <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-myColor border-rounded cursor-pointer rounded-lg'>
            <FcGoogle size={32} />
            <p>Continue with Google</p>
          </div>
          <p className="text-center text-sm text-gray-500">
            Don't have any account?
            <Link to='/signup' className='ml-2 text-myColor hover:border-b-2 hover:border-myColor'>Sign up</Link>
          </p>
          <p className="text-red-600 text-center">{loginError}</p>
        </form>
        
      </div>
    </div>
  )
}

export default Login
