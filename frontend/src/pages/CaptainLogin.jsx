import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';



const CaptainLogin = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();
    const {captain , setCaptain} = React.useContext(CaptainDataContext);
    const submitHandler = async(e) => {
    e.preventDefault();
    const captain = ({
      email: email,
      password: password 
    }) 

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if(response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/captain-home');
    }

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