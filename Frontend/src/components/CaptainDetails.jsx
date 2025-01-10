import React from 'react'

const CaptainDetails = () => {
  return (
    <div className='p-6'>
                <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3 '>
            <img className='h-10 w-10 rounded-full object-cover bg-right' src="https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-600nw-2460702995.jpg" alt="" />
            <h4 className='text-lg font-medium'>Adwaid P</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>

        <div className='flex p-3 mt-8 bg-gray-100 rounded-xl items-start justify-center gap-5'>
          <div className='text-center'>
            <i className="text-3xl mb-3 font-thin ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="text-3xl mb-3 font-thin ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i  className="text-3xl mb-3 font-thin ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails