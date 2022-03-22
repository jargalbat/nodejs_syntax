const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// node app.js "New York"
// console.log(process.argv)

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        // console.log('Error', error)
        // console.log('Data', data)
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecaseData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecaseData)
        })
    })
}
