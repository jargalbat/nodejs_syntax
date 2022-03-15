// Imports
const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was create by Node.js!')
fs.appendFileSync('notes.txt', ' Added some text')