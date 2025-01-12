import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h5
                onClick={() => {
                    props.setConfirmRidePopupPanel(false)
                }}
                className='text-3xl text-center'><i className="ri-arrow-down-wide-line text-gray-300"></i></h5>
            <h3 className='text-2xl font-semibold mb-5 text-center border-b-[1.6px] pb-[10px]'>Confirm this ride to Start</h3>

            <div className='flex items-center justify-between px-5 py-4 mt-4 mb-3 bg-black text-white rounded-lg'>
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



                <div className='mt-6 w-full'>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }} className='flex flex-col gap-3'>
                        <input value={otp} onChange={(e)=>{setOtp(e.target.value)}} type="text" placeholder='Enter OTP' className='bg-[#eee] border-2 border-gray-500 px-6 py-3 text-lg rounded-lg w-full mt-5 text-center font-semibold' />
                        <div className='flex gap-5 mt-2'>
                        <button onClick={
                            () => {
                                props.setConfirmRidePopupPanel(false)
                            }
                        }
                            className='w-full border-2 border-black text-black font-semibold p-3 rounded'>
                            Cancel
                        </button>                        
                        <Link to={'/captain-riding'} className='w-full flex justify-center bg-black text-white font-semibold p-3 rounded'>Confirm</Link >    
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default ConfirmRidePopUp