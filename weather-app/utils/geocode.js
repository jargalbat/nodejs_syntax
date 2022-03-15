const request = require('postman-request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGVhcm5tb25nb2xpYSIsImEiOiJjbDBzMnJsYWQwNnNiM2NycDVkMmF4ZnFvIn0.817HAvfQrin6YUTTAnbUrw'

    request({
        url, json: true, callback: (error, { body } = {}) => {
            if (error) {
                callback('Unable to connect to location services!', undefined)
            } else if (body.features.length === 0) {
                console.log('Unable to find location, Try another search')
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: address
                })
            }
        }
    })
}

module.exports = geoCode