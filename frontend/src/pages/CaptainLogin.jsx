import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const CaptainLogin = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData ,setCaptainData] = useState({});
  
    const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password 
    }) 

    setEmail('');
    setPassword('');
    }
  
  return (
     <div className='p-7 flex flex-col justify-between h-screen  '>
      <div>
        <img className='w-20 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" />
        <form onSubmit={(e)=> submitHandler(e)}>
          <h3 className='text-lg mb-2 font-medium'>What's your  email</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email@gmail.com' />

          <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
          <input type='password'
           value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='password'
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base' />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
            Login
          </button>
          <p className='text-center'>Join uber?
            <Link className="text-blue-700 " to={'/captain-signup'}>Register as captain</Link>
          </p>
        </form>
      </div>
      <div>
        <Link
        to='/login' 
        className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as User 
        </Link>

      </div>
    </div>
  )
}

export default CaptainLogin