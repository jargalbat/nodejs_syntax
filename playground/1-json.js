const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
const dataJSONStr = dataBuffer.toString()
const data = JSON.parse(dataJSONStr)
console.log(data.title)


// console.log(bookJSON)

// const parsedDataObj = JSON.parse(bookJSON)
// console.log(parsedDataObj.author)

// https://links.mead.io/json-sample