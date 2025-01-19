const rideService = require("../services/ride.service");
const {validationResult} = require("express-validator");
const mapService = require('../services/maps.service')
const {sendMessageToSocketId} = require('../socket');
const rideModel = require("../models/ride.model");
const userModel = require("../models/user.model");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {user,pickup,destination,vehicleType} = req.body
  // console.log('The user id is ',req.user._id)
  // console.log(pickup,destination,vehicleType)
  // const userdata = await userModel.findById(req.user._id)
  // console.log('The user data is ',userdata)
  
  try {
    const ride = await rideService.createRide({user: req.user._id,pickup,destination,vehicleType})
    // console.log(ride)
    res.status(201).json(ride)

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup)
    // console.log('The pickup coordinates are ',pickupCoordinates)
    const captainsInRadius = await mapService.getCaptainsInTheRadius( pickupCoordinates.lng, pickupCoordinates.ltd, 2 )
    // console.log('The captains in radius are ', captainsInRadius)
    
    ride.otp = ''

    const rideWithUser = await rideModel.findOne({_id: ride._id}).populate('user')
    // console.log('The ride with user is ',rideWithUser)

    captainsInRadius.map(captain => {
      sendMessageToSocketId(captain.socketId, {
          event: 'new-ride',
          data: rideWithUser
      })
  })

  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

module.exports.getFare = async (req,res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }

  const {pickup, destination} = req.query

  try {
    const fare = await rideService.getFare(pickup,destination)
    return res.status(200).json(fare)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

module.exports.confirmRide = async(req,res)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  } 

  const {rideId} = req.body
  // console.log(rideId)
  try {
    const ride = await rideService.confirmRide({rideId, captain:req.captain})
    sendMessageToSocketId(ride.user.socketId,{
      event: 'ride-confirmed',
      data: ride
    })
    return res.status(200).json(ride)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}