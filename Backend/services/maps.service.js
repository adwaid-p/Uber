const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async(address)=>{
    const apiKey = process.env.GOOGLE_MAPS_API

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url)
        if(response.data.status === 'OK') {
            const locaton = response.data.results[0].geometry.location;
            return {
                ltd: locaton.lat,
                lng: locaton.lng
            }
        } else {
            throw new Error('Unable to fetch coordinates')
        }
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports.getDistaceTime = async(origin, destination)=>{
    
    if(!origin || !destination){
        throw new Error('Origin and destination are required');
    }
    apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`

    try {
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            if(response.data.rows[0].elements[0]==='ZERO_RESULTS'){
                throw new Error('No route found')
            }
            return response.data.rows[0].elements[0]
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports.getAutoCompleteSuggestions = async(input)=>{
    if(!input){
        throw new Error('Query is required')
    }
     const apiKey = process.env.GOOGLE_MAPS_API
     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

     try {
        const response = await axios.get(url)
        if(response.data.status === 'OK'){
            return response.data.predictions
        } else{
            throw new Error('Unable to fetch suggestion')
        }
     } catch (error) {
        console.log(error)
        throw error
     }
}

module.exports.getCaptainsInTheRadius = async(itd,lng,radius)=>{
    const captains = await captainModel.find({
        location:{
            $geoWithin: {
                $centerSphere: [[lng, itd], radius / 6378.1]
            }
        }
    })
}