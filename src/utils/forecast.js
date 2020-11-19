const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=1143794cd3ae101350a6a0a9ec6dc071&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined) 
         } else if (body.error) {
             callback('Unable to find location', undefined)
         } 
        else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain. The current humidity is  ' + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast