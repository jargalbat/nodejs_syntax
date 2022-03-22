const mongoose = require('mongoose')
const express = require('express')
const Blog = require('./models/blog')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    // res.send('<p>home page</p>')
    res.sendfile('./views/index.html', { root: __dirname })
})

app.get('/', (req, res) => {
    // res.send('<p>home page</p>')
    res.sendfile('./views/about.html', { root: __dirname })
})


app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        about: 'about blog',
        snippet: 'snippet test',
        body: 'body of blog'
    })

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('622fa9d9151da0f9e763eb7c')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

const conStr = 'mongodb+srv://jagaa:RGRBECNT7diz81oC@notetuts.u5tvd.mongodb.net/note-tuts?retryWrites=true&w=majority'
mongoose.connect(conStr)
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((e) => {
        console.log("Not connected to DB")
    })

