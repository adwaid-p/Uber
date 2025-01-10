import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setRidePopupPanel(false)
                }}
                className='text-3xl text-center'><i className="ri-arrow-down-wide-line text-gray-300"></i></h5>
            <h3 className='text-2xl font-semibold mb-5 text-center border-b-[1.6px] pb-[5px]'>New Ride Avilable!</h3>

            <div className='flex items-center justify-between px-5 py-4 mt-4 bg-black text-white rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='w-12 h-12 object-cover rounded-full' src="https://www.shutterstock.com/shutterstock/photos/1554086789/display_1500/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg" alt="" />
                    <h2 className='text-xl font-medium'>Priya</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
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

                <div className=' flex gap-3 w-full'>
                    <button onClick={
                        () => {
                            props.setRidePopupPanel(false)
                        }
                    }
                        className='w-full bg-white border-2 border-black text-black font-semibold p-3 rounded'>
                        Ignore
                    </button>

                    <button onClick={
                        () => {
                            props.setConfirmRidePopupPanel(true)
                            props.setRidePopupPanel(false)
                        }
                    }
                        className='w-full bg-black text-white font-semibold p-3 rounded'>
                        Accept
                    </button>
                </div>

            </div>
        </div>
    )
}

export default RidePopUp