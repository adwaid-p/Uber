import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine } from '@remixicon/react';

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-right bg-[url("https://img.freepik.com/premium-vector/picture-traffic-light-with-red-light-it_909058-19341.jpg")] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 px-4 py-4 '>
          <h2 className='text-3xl font-bold '>Get Started with Uber</h2>
          <Link to={'/login'} className='flex items-center justify-center bg-black text-white w-full rounded-md py-3 mt-5 relative'>Continue  <RiArrowRightLine className='absolute right-3 font-bold'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Start