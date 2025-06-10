import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

 const navigate = useNavigate()

 const { user, setUser } = React.useContext(UserDataContext)



  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = ({
      fullname:{
      firstname: firstName,
      lastname: lastName
      },
      email: email,
      password: password,
      
    })
 
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    console.log(response)
    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/home');
    }
   setEmail('')
   setPassword('')
    setFirstName('')
    setLastName('')
  }
  

  return (
    <div className='p-7 flex flex-col justify-between h-screen  '>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg w-1/2  font-medium mb-2'>What's your  name</h3>
          <div className='flex gap-4 mb-7'>
            <input
              type='text'
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First name' />
            <input
              type='text'
              className='bg-[#eeeeee]   w-1/2 rounded-lg px-4 py-2 border   text-lg placeholder:text-base'
              required
               value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last name' />
          </div>


          <h3 className='font-medium mb-2 text-lg'>What's your  email</h3>
          <input
          type="email"
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
             value={email}
              onChange={(e) => setEmail(e.target.value)}
            placeholder='email@gmail.com' />

          <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
          <input type='password'
             value={password}
              onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
            Create Account
          </button>
        </form>
        <p className='text-center'>Already have an account?
          <Link className="text-blue-700 " to={'/login'}>Login here</Link>
        </p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default UserSignup