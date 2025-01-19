import React, { act, useContext, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import axios from 'axios'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import { UserDataContext } from '../context/UserContext'
import { SocketContext } from '../context/SocketContext'


const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const panelRef = useRef(null)
  const vehiclePanelOpenRef = useRef(null)
  const panalCloseReff = useRef(null)
  const confirmRidePanelReff = useRef(null)
  const vehicleFoundReff = useRef(null)
  const waitingForDriverReff = useRef(null)

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [activeField, setActiveField] = useState('')
  const [fare, setFare] = useState({})
  const [vehicleType, setvehicleType] = useState('')
  const [ride, setRide] = useState(null)


  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

    useEffect(() => {
        socket.emit("join", { userType: "user", userId: user._id })
    }, [ user ])


    socket.on('ride-confirmed',ride=>{
      setVehicleFound(false)
      setWaitingForDriver(true)
      setRide(ride)
    })

  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      )
      setPickupSuggestions(response.data)
      // console.log(pickupSuggestions)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24
        // opacity:1
      })
      gsap.to(panalCloseReff.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        // opacity: 0
      })
      gsap.to(panalCloseReff.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelOpenRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelOpenRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelReff.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelReff.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [confirmRidePanel])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundReff.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundReff.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverReff.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverReff.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  async function findTrip() {
    if (pickup && destination) {
      setVehiclePanelOpen(true)
      setPanelOpen(false)

      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      // console.log(response.data)
      setFare(response.data)
    }
  }

  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    // console.log('The ride is ',response.data)
  }

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div className='h-screen w-screen'>
        {/* <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" /> */}
        <img className='h-full w-full object-cover' src="https://raw.githubusercontent.com/MindorksOpenSource/ridesharing-uber-lyft-app/master/assets/nearby-cabs.png" alt="" />
      </div>

      <div className='h-screen flex flex-col justify-end absolute bottom-0 w-full'>
        <div className='h-[40%] bg-white p-6 rounded-t-xl relative'>

          <h1 onClick={() =>
            setPanelOpen(false)
          }
            ref={panalCloseReff}
            className='text-3xl opacity-0 absolute top-4 left-6 w-[87%] text-center'>
            <i className="ri-arrow-down-wide-line text-gray-300"></i>
          </h1>
          {panelOpen && <div className='mb-4'></div>}

          {!panelOpen && <h4 className='text-2xl font-semibold'>Find a trip</h4>}

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            {/* <div className="line absolute top-[43%] left-10 w-1 h-20 bg-gray-600 rounded-full"></div> */}
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-5'
              value={pickup}
              onChange={handlePickupChange}
              type="text"
              placeholder='Add a pick-up location' />

            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
              value={destination}
              onChange={handleDestinationChange}
              type="text"
              placeholder='Enter your destination' />
          </form>
          <button
            onClick={findTrip}
            className='bg-black text-white text-base font-medium px-4 py-3 rounded-lg w-full mt-3'>
            Find Trip
          </button>
        </div>
        <div className='h-0 bg-white overflow-scroll mt4' ref={panelRef}>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            suggestions={activeField == 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div ref={vehiclePanelOpenRef} className='fixed w-full z-10 bottom-0 px-3 pt-5 pb-8 bg-white translate-y-full rounded-t-xl'>
        <VehiclePanel
          setvehicleType={setvehicleType}
          fare={fare} vehiclePanelOpen={vehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>

      <div ref={confirmRidePanelReff} className='fixed w-full z-10 bottom-0 px-3 py-3 pb-8 bg-white rounded-t-xl translate-y-full'>
        <ConfirmRide
          destination={destination}
          pickup={pickup}
          fare={fare}
          vehicleType={vehicleType}
          createRide={createRide}
          setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundReff} className='fixed w-full z-10 bottom-0 px-3 pb-8 bg-white rounded-t-xl translate-y-full'>
        <LookingForDriver
          destination={destination}
          pickup={pickup}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverReff} className='fixed w-full z-10 bottom-0 px-6 py-3 pb-8 bg-white rounded-t-xl translate-y-full'>
        <WaitingForDriver 
        ride={ride}
        setVehicleFound={setVehicleFound}
        setWaitingForDriver={setWaitingForDriver}
        waitingForDriver={waitingForDriver}
        />
      </div>
    </div>
  )
}

export default Home