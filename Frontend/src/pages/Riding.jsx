import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to={'/home'} className='fixed top-2 right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-semibold ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/MindorksOpenSource/ridesharing-uber-lyft-app/master/assets/nearby-cabs.png" alt="" />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-24' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Adwaid P</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Martthi Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-2 flex-col justify-between items-center'>
                    <div className='w-full'>
                        <div className='flex items-center gap-5 p-3 border-b-[1.6px]'>
                            <i className="text-lg ri-map-pin-user-fill"></i>
                            <div>
                                <h3 className='text-lg font-bold'>Theird Floor</h3>
                                <p className='text-sm -mt-1 text-gray-600'>17th cross Rd, Coimbatore</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="text-lg ri-currency-fill"></i>
                            <div>
                                <h3 className='text-lg font-bold'>₹193.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='mt-4 mb-3 w-full bg-green-600 text-white font-semibold p-3 rounded'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding