import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const submitHandler = (e) => {
      e.preventDefault()
      setUserData({
        fullName:{
        firstName: firstName,
        lastName: lastName
        },
        email: email,
        password: password,
        
      })
      console.log(userData)
      console.log(email)
     setEmail('')
     setPassword('')
      setFirstName('')
      setLastName('')
    }
    


  return (
      <div className='py-5 px-5 flex flex-col justify-between h-screen  '>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" />
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
          <Link className="text-blue-700 " to={'/captain-login'}>Login here</Link>
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

export default CaptainSignup