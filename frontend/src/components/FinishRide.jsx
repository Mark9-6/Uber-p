import React from 'react'
import { Link } from 'react-router-dom'

export const FinishRide = (props) => {
  return (
       <div >
            <h5 className='p-1 absolute text-center top-0 w-[93%]' onClick={() => { props.setFinishRidePanel(false) }}>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this ride</h3>

            <div className='flex items-center justify-between mt-4 p-4 border-2 border-yellow-400 rounded-lg '>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg" alt="" />
                    <h2 className='text-lg font-medium '>Driver Name</h2>
                </div>
                <h5 className='text-lg font-semibold'>
                    2.2 KM
                </h5>
            </div>

            <div className='flex  gap-2 justify-between flex-col items-center '>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="  ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Nevada,San Tos</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Nevada,San Tos</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3  '>
                        <i className="  ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Rs.193.2</h3>
                            <p className='text-sm  text-gray-600 -mt-1'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full'>

               
                        <Link
                            to='/captain-home'
                            className='w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>
                            Finish Ride
                        </Link>
                        <p className='  mt-10 text-xs'>click on finish ride if youve completed ride</p>
                   

                </div>
            </div>
        </div>
  )
}
