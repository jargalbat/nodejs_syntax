const yargs = require('yargs') // Command line arguments

// node app.js remove
// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

// node app.js add --title="Things to buy"
// console.log(process.argv)

// node app.js --version
// Customize yargs version
yargs.version('1.1.0') 

// node app.js --help

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
// 
node app.js add --title="Shopping list" --body="Хааяа би муу байж болох уу?"
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    handler: function () {
        console.log('Removing the note')
    }
})
// node app.js remove

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

// console.log(yargs.argv)
yargs.parse()
