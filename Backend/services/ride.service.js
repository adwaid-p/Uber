const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistaceTime(pickup, destination);
  // console.log('The distance time is ',distanceTime)

  const baseFare = {
    auto: 20,
    car: 50,
    motorcycle: 15,
  };

  const perKmRate = {
    auto: 10,
    car: 20,
    motorcycle: 8,
  };

  const perMinuteRate = {
    auto: 1,
    car: 2,
    motorcycle: 0.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    motorcycle: Math.round(
      baseFare.motorcycle +
        (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
        (distanceTime.duration.value / 60) * perMinuteRate.motorcycle
    ),
  };

  return fare;
}
module.exports.getFare = getFare;

function getOtp(num) {
  const otp = crypto
    .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
    .toString();
  return otp;
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);
  // console.log('The fare is ',fare)
  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });
  return ride;
};

module.exports.confirmRide = async ({rideId,captain}) => {
  if(!rideId){
    throw new Error('Ride id is required')
  }

  await rideModel.findOneAndUpdate({
    _id:rideId,
  },{
    status:'accepted',
    captain: captain._id
  })
  const ride = await rideModel.findOne({_id: rideId}).populate('user').populate('captain').select('+otp')
  if(!ride){
    throw new Error('Ride not found')
  }
  // console.log('The ride is ',ride)
  return ride
}