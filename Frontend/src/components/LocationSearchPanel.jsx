import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        "21B, Near Palakkad, far from the city, 123456",
        "22A, Near Kollam, far from the city, 435433",
        "23B, Near Kochi, far from the city, 342513",
        "25D, Near Kozhikode, far from the city, 43265",
    ]

    return (
        <div>
            {
                locations.map((elem, index) => {
                    return (
                        <div onClick={()=>{
                            props.setVehiclePanelOpen(true)
                            props.setPanelOpen(false)
                        }} 
                        key={index} className='border-2 p-3 border-gray-50 active:border-black rounded-xl flex items-center justify-start gap-4 my-2'>
                            <h2><span className='bg-[#eee] w-10 h-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-[20px]"></i></span></h2>
                            <h4 className='font-medium'>{elem}</h4>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default LocationSearchPanel