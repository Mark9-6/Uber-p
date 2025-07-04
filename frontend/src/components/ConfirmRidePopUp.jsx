import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div >
            <h5 className='p-1 absolute text-center top-0 w-[93%]' onClick={() => { props.setRidePopupPanel(false) }}>
                <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>

            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg '>
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

                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <input value={otp} onChange={(e) => { setOtp(e.target.value) }}
                            type='text' placeholder='Enter OTP' className=' bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 ' />
                        <Link
                            to='/captain-riding'
                            className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>
                            Confirm
                        </Link>
                        <button
                            onClick={() => {
                                props.setConfirmRidePopupPanel(false)
                                props.setRidePopupPanel(false)
                            }}
                            className='w-full mt-1 bg-red-400 text-lg text-white font-semibold p-3 rounded-lg'>
                            Cancel
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp