const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes'

// node app.js add --title="t2" --body="b2"
const addNote = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    // const duplicateNotes = notes.filter((note) =>
    //     note.title === title
    // )
    const dublicateNote = notes.find((note) =>
        note.title === title
    )

    // chrome://inspect
    // debugger

    // console.log(dublicateNote)
    // console.log(title)

    // if (duplicateNotes.length === 0) {
    // if (duplicateNote === undefined) {
    if (!dublicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// node app.js remove --title="t2"
const removeNote = (title) => {
    // console.log(title)
    const notes = loadNotes()
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) =>
        note.title !== title
    )

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green("Your notes: "))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) =>
        note.title === title
    )

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

// module.exports = getNotes
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}