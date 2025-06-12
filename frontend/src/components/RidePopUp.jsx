import React from 'react'

const RidePopup = (props) => {
 
     



  return (
    <div>
          <h5 className='p-1 absolute text-center top-0 w-[93%]' onClick={() => { props.setRidePopupPanel(false) }}>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
       <h3 className='text-2xl font-semibold mb-5'>new ride available</h3>

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
        <div className='flex w-full mt-5 items-center justify-between'>
        <button 
        onClick={() => { props.setRidePopupPanel(false) }}
        className='  mt-1 bg-gray-400 text-white font-semibold p-2 px-10 rounded-lg'>
            Ignore
        </button>
            <button 
        onClick={()=>{
            props.setConfirmRidePopupPanel(true)
        }}
        className='  mt-5 bg-green-600 text-white font-semibold p-2 px-10 rounded-lg'>
            Accept
        </button>
        </div>
       </div>
    </div>
  )
}

export default RidePopup