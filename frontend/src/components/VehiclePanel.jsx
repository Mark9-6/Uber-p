import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 absolute text-center top-0 w-[93%]' onClick={() => { props.setVehiclePanel(false) }}>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>


      <div onClick={() => {
        props.setConfirmRidePanel(true)
      }}
        className='flex  border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3 '>
        <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' />
        <div className='-ml-2  w-1/2'>
          <h4 className='font-medium text-base'>Uber Go<span><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-medium text-xs text-gray-600'>Affordable compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>Rs.193.20</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
      }}
        className='flex  border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3 '>
        <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' />
        <div className='-ml-2  w-1/2'>
          <h4 className='font-medium text-base'>Uber Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-medium text-xs text-gray-600'>Affordable bike rides</p>
        </div>
        <h2 className='text-lg font-semibold'>Rs.50</h2>
      </div>
      
      <div onClick={() => {
        props.setConfirmRidePanel(true)
      }}
        className='flex  border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between p-3 '>
        <img className='h-10' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' />
        <div className='-ml-2  w-1/2'>
          <h4 className='font-medium text-base'>Uber Moto<span><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className='font-medium text-sm'>3 mins away</h5>
          <p className='font-medium text-xs text-gray-600'>Affordable auto rides</p>
        </div>
        <h2 className='text-lg font-semibold'>Rs.150</h2>
      </div>

    </div>
  )
}

export default VehiclePanel