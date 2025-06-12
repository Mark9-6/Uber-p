import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg" alt="" />
            <h4 className='text-lg font-medium'>Driver Name</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>295.2</h4>
            <p className='text-sm   text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-6 bg-gray-100 rounded-sm justify-center gap-5 items-start'>
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-timer-2-line' />
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>hours online</p>
          </div>
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-speed-up-line' />
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>hours online</p>
          </div>
          <div className='text-center'>
            <i className='text-3xl mb-2 font-thin ri-booklet-line' />
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>hours online</p>
          </div>
        </div>

    </div>
  )
}

export default CaptainDetails