import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setVehicleFound(false)
                }}
                className='text-3xl text-center'><i className="ri-arrow-down-wide-line text-gray-300"></i></h5>
            <h3 className='text-2xl font-semibold mb-5 text-center border-b-[1.6px] pb-[5px]'>Looking for a Driver</h3>

            <div className='flex gap-2 flex-col justify-between items-center'>
                {props.vehicleType === 'car' ? (
                    <img className='h-32' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                ) : props.vehicleType === 'motorcycle' ? (
                    <img className='h-28 my-5' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                ) : (
                    <img className='h-28 my-6' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                )}
                <div className='w-full -mt-10'>
                    <div className='flex items-center gap-5 p-3 border-b-[1.6px]'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>566/23-D</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-[1.6px]'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>Theird Floor</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-currency-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold'>₹{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver