import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false)
        }}
        className='text-3xl text-center'><i className="ri-arrow-down-wide-line text-gray-300"></i></h5>
      <h3 className='text-2xl font-semibold mb-5 text-center border-b-[1.6px] pb-[5px]'>Confirm your Ride</h3>

      <div className='flex gap-2 flex-col justify-between items-center'>
        <img className='h-36' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
        <div className='w-full -mt-10'>
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
        <button onClick={
          () => {
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
          }
        }
          className='mt-4 w-full bg-green-600 text-white font-semibold p-3 rounded'>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ConfirmRide