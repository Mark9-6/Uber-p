import React, { useState, useRef } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../../components/LocationSearchPanel';




const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  // const vehiclePanelRef = useRef(null);
  // const confirmRidePanelRef = useRef(null);
  const panelRef = React.useRef(null);
  const panelCloseRef = useRef(null);
  // const [vehiclePanel, setVehiclePanel] = useState(false);
  // const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])


  // useGSAP(function () {
  //     if (vehiclePanel) {
  //         gsap.to(vehiclePanelRef.current, {
  //             transform: 'translateY(0)'
  //         })
  //     } else {
  //         gsap.to(vehiclePanelRef.current, {
  //             transform: 'translateY(100%)'
  //         })
  //     }
  // }, [vehiclePanel])

  // useGSAP(function () {
  //     if (confirmRidePanel) {
  //         gsap.to(confirmRidePanelRef.current, {
  //             transform: 'translateY(0)'
  //         })
  //     } else {
  //         gsap.to(confirmRidePanelRef.current, {
  //             transform: 'translateY(100%)'
  //         })
  //     }
  // }, [confirmRidePanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover ' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' />
      </div>


      <div className='  flex flex-col justify-end absolute w-full top-0 h-screen'>
        <div className='h-[30%] bg-white p-6 relative'>

          <h5 ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find A trip</h4>
          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className=' bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 '
              type='text' placeholder='Add pickup location' />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className=' bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3 '
              type='text' placeholder='Add Destination location' />

          </form>
        </div>
        <div ref={panelRef} className='bg-white'>
          <LocationSearchPanel />
        </div>

      </div>


      <div className="fixed w-full z-10 bottom-0 bg-white translate-y-full  px-3 py-8">
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>


        <div className='flex  border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3 '>
          <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' />
          <div className='-ml-2  w-1/2'>
            <h4 className='font-medium text-base'>Uber Go<span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs.193.20</h2>
        </div>

        <div className='flex  border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3 '>
          <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' />
          <div className='-ml-2  w-1/2'>
            <h4 className='font-medium text-base'>Uber Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable bike rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs.50</h2>
        </div>
        <div className='flex  border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3 '>
          <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' />
          <div className='-ml-2  w-1/2'>
            <h4 className='font-medium text-base'>Uber Moto<span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>Rs.150</h2>
        </div>
 
      </div>

    </div>
  )
}

export default Home