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
                    <h2 className='text-lg font-medium capitalize'>{`${props.ride?.captain.fullname.firstname} ${props.ride?.captain.fullname.lastname}`}</h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>{`${props.ride?.captain.vehicle.plate}`}</h4>
                    <p className='text-sm text-gray-600'>Martthi Suzuki Alto</p>
                    <h1 className='text-lg font-semibold'>{props.ride?.otp}</h1>
                </div>
            </div>

            <div className='flex gap-2 flex-col justify-between items-center'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-[1.6px]'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>566/23-D</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-[1.6px]'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>Theird Floor</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-currency-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver