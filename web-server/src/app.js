const path = require('path')
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Default paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// nodemon src/app.js -e js,hbs

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Wick'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'John Wick'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'John Wick'
    })
})

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })
// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Andrew', age: 27
//     }, {
//         name: 'Sarah', age: 26
//     }])
// })
// app.get('/about', (req, res) => {
//     res.send('About')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Philadelphia'
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
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})