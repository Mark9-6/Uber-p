import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 

const CaptainSignup = () => {

  const navigate = useNavigate()
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

   const { captain ,setCaptain } = React.useContext(CaptainDataContext)




    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData = ({
        fullname:{
        firstname: firstName,
        lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
        
      })

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if(response.status === 201) {
        const data = response.data
        setCaptain(data)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/captain-home')
      }
 
     setEmail('')
     setPassword('')
      setFirstName('')
      setLastName('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
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



          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-4'>
            <input
              type='text'
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              placeholder='Vehicle Color'
            />
            <input
              type='text'
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              placeholder='Vehicle Plate'
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              type='number'
              min='1'
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              placeholder='Capacity'
            />
            <select
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg'
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value='' disabled>Select Type</option>
              <option value='car'>Car</option>
              <option value='auto'>Auto</option>
              <option value='moto'>Moto</option>
            </select>
          </div>



          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
            Create Captain Account
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