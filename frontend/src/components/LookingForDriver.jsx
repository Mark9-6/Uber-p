import React from 'react'

const LookingForDriver = (props) => {
  return (
      <div>
        <h5 className='p-1 absolute text-center top-0 w-[93%]' onClick={() => { props.setVehicleFound(false) }}>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
       <h3 className='text-2xl font-semibold mb-5'>Looking your Driver</h3>

       <div className='flex  gap-2 justify-between flex-col items-center '>
        <img className='h-20' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' />
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
         
       </div>
    </div>
  )
}

export default LookingForDriver