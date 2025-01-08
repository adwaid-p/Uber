import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setWaitingForDriver(false)
                }}
                className='text-3xl text-center'><i className="ri-arrow-down-wide-line text-gray-300"></i></h5>

            <div className='flex items-center justify-between'>
                <img className='h-28' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Adwaid P</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                    <p className='text-sm text-gray-600'>Martthi Suzuki Alto</p>
                </div>
            </div>

            <div className='flex gap-2 flex-col justify-between items-center'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-[1.6px]'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>566/23-D</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Chenni - Coimbatore</p>
                        </div>
                    </div>
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
        </div>
    )
}

export default WaitingForDriver