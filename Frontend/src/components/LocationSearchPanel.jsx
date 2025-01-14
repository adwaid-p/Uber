import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {
    const handleSuggestionClick =(elem)=>{
        if(activeField=='pickup'){
            setPickup(elem)
        } else {
            setDestination(elem)
        }
    }
    return (
        <div>
            {
                suggestions.map((elem, index) => {
                    return (
                        <div onClick={()=>{handleSuggestionClick(elem.description)}} 
                        key={index} className='border-2 p-3 border-gray-50 active:border-black rounded-xl flex items-center justify-start gap-4 my-2'>
                            <h2><span className='bg-[#eee] w-10 h-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-[20px]"></i></span></h2>
                            <h4 className='font-medium'>{elem.description}</h4>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default LocationSearchPanel