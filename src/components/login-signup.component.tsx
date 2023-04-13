import { message } from "antd"
import { useState } from "react"
import { useSignIn } from "react-auth-kit"
import { Link, useNavigate } from "react-router-dom"
import { login, signUp } from "../services/user.service"

export const LoginForm = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const [formData, setFormData] = useState({ email: '', password: '' })

  async function onLogin() {
    try {
      const { email, password } = formData;
      const rs = await login({ email, password })
      if (signIn(
        {
          token: rs.data.access_token,
          authState: rs.data.userId,
          tokenType: "apiKey",
          expiresIn: 3600,
        }
      )) {
        message.success('Login success')
        setTimeout(() => {
          navigate("/")
        }, 2000)
      }

    } catch (error) {
      message.error('Email or password is incorrect')
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-blue-500 font-bold'>Play Boy</p>
          <p className='font-medium text-lg leading-1 text-pink-400'>Explore your interests, meet new friends & expand your horions</p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          <h2 className='p-3 text-3xl font-bold text-pink-400'>Play Boy</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <h3 className='text-xl font-semibold text-blue-400 pt-2'>Sign In!</h3>
          {/* Inputs */}
          <div className='flex flex-col items-center justify-center'>
            <input value={formData.email} type='email' name="email" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email' onChange={handleInputChange}></input>
            <input value={formData.password} type="password" name="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password' onChange={handleInputChange}></input>
            <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in' onClick={onLogin}>
              Sign In
            </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className='text-blue-400 mt-4 text-sm'>Don't have an account?</p>
          <Link className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' to={"/signup"} >Create a New Account?</Link>
        </div>
      </main>
    </div>
  )
}

export const SignUpForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', firstName: '', lastName: '' })
  const navigate = useNavigate()

  async function onSignUp() {
    try {
      const { email, password, firstName, lastName } = formData;
      await signUp({ email, password, firstName, lastName })
      message.success('Login success')
      navigate("/login")
    } catch (error) {
      message.error('Can not create account')
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-blue-500 font-bold'>Play Boy</p>
          <p className='font-medium text-lg leading-1 text-pink-400'>Explore your interests, meet new friends & expand your horions</p>
        </div>
        <div className="bg-blue-300 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
          <h2 className='p-3 text-3xl font-bold text-white'>Play Boy</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
          {/* Inputs */}
          <div className='flex flex-col items-center justify-center mt-2'>
            <input type="text" name="firstName" className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='First Name' onChange={handleInputChange}></input>
            <input type="text" name="lastName" className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Last Name' onChange={handleInputChange}></input>
            <input type='email' name="email" className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email' onChange={handleInputChange}></input>
            <input type="password" name="password" className='text-black rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password' onChange={handleInputChange}></input>
            <button className='rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in' onClick={onSignUp}>
              Sign Up
            </button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <p className='text-white mt-4 text-sm'>Already have an account?</p>
          <Link className='text-white mb-4 text-sm font-medium cursor-pointer' to={"/login"}>Sign In to your Account?</Link>
        </div>
      </main>
    </div>
  )
}
