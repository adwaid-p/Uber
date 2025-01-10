import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(()=>{
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current,{
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current,{
                transform: 'translateY(100%)'
            })
        }
    },[finishRidePanel])

    return (
        <div className='h-screen'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to={'/captain-home'} className='fixed top-2 right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-semibold ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/MindorksOpenSource/ridesharing-uber-lyft-app/master/assets/nearby-cabs.png" alt="" />
            </div>

            <div className='h-1/5 p-6 bg-gray-50 relative flex items-center justify-between rounded-tl-lg rounded-tr-lg' onClick={()=>{setFinishRidePanel(true)}}>
                <h5
                    onClick={() => {
                        
                    }}
                    className='text-3xl text-center absolute top-3 text-center w-[87%]'><i className="ri-arrow-up-wide-line text-black"></i></h5>
                <h4 className='text-xl w-full font-semibold'>4 KM away</h4>
                <button className='mt-4 w-full bg-black text-white font-semibold p-3 rounded'>Complete Ride</button>
            </div>

            <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 pt-5 pb-8 bg-white rounded-t-xl'>
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>

        </div>
    )
}

export default CaptainRiding