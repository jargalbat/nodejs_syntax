// Imports 
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Init Express
const app = express()
const port = process.env.PORT || 3000

// Default paths for Express config
// console.log(__filename)
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Wick'
    })
    // res.send('<h1>Weather</h1>')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'John Wick'
    })
    // res.send('About')
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'John Wick'
    })
    // res.send([{
    //     name: 'Andrew', age: 27
    // }, {
    //     name: 'Sarah', age: 26
    // }])
})

app.get('/weather', (req, res) => {
    // console.log(req.query)

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })

        })
    })
})

app.get('/products', (req, res) => {
    // console.log(req.query)
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'John Wick',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'John Wick',
        errorMessage: 'Page not found.'
    })
})

// Start server
// node src/app.js
// nodemon src/app.js -e js,hbs
app.listen(port, () => {
    // console.log('Server is up on port ' + port)
})