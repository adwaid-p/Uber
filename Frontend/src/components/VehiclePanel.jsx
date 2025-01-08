import React from 'react'

const vehiclePanel = (props) => {
  return (
    <div>
        <h5
          onClick={() => {
            props.setVehiclePanelOpen(false)
          }}
          className='text-3xl text-center'><i className="ri-arrow-down-wide-line text-gray-300"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        <div onClick={()=>{
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false)
        }} className='flex border-[2.4px] mb-2 active:border-black border-white rounded-xl items-center justify-between p-3'>
          <img className='h-14 mr-10' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='font-semibold text-lg'>₹193.20</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false)
        }} className='flex border-[2.4px] mb-2 active:border-black border-white rounded-xl items-center justify-between p-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='font-semibold text-lg'>₹65</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false)
        }} className='flex border-[2.4px] mb-2 active:border-black border-white rounded-xl items-center justify-between p-3'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-bold text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable Auto rides</p>
          </div>
          <h2 className='font-semibold text-lg'>₹118.86</h2>
        </div>
    </div>
  )
}

export default vehiclePanel