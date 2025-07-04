import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
   const { user, setUser } = React.useContext(UserDataContext)


  const submitHandler = async (e) => {
    e.preventDefault();
    const userData =({
      email: email,
      password: password
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    console.log(response);
    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen  '>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" />
        <form onSubmit={(e) => submitHandler(e)}>
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
        </form>
        <p className='text-center'>New here?
          <Link className="text-blue-700 " to={'/signup'}>Create new Account</Link>
        </p>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as captain
        </Link>

      </div>
    </div>
  )
}

export default UserLogin