const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=a67f9c551007db76efb9277c042a0661&query=40.7831,-73.9712'
    const url = 'http://api.weatherstack.com/current?access_key=a67f9c551007db76efb9277c042a0661&query=' + latitude + ',' + longitude
    // console.log(url)

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('1Unable to find location', undefined)
        } else {
            // console.log(response.body.current)
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast
