const axios = require('axios')

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