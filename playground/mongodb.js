// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId
const { MongoClient, ObjectId } = require('mongodb')

// const connectionURL = 'mongodb://localhost:2717'
const connectionURL = 'mongodb://127.0.0.1:2717'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {}, (error, client) => {
    if (error) {
        console.log(error)
        return console.log('Unable to connect to database!')
    }

    // console.log('Connected correctly!')
    const db = client.db(databaseName)

    // const id = new ObjectId()
    // console.log(id)
    // console.log(id.getTimestamp())
    // console.log(id.id.length)
    // console.log(id.id.valueOf().length)

    //
    // CREATE
    //

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'John',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.acknowledged)
    //     console.log(result.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     // console.log(result)
    //     // console.log(result.acknowledged)
    //     // console.log(result.insertedCount)
    //     // console.log(result.insertedIds[0])
    //     // console.log(result.insertedIds[1])
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result)
    // })

    //
    // READ
    //

    // db.collection('users').findOne({ _id: new ObjectId('62341638eb16dcad725253a5'), name: 'Vikran', age: 26 }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').countDocuments({ age: 27 }, (error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId('623381a8b9d01945a31c19f8') }, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(tasks)
    // })

    //
    // UPDATE
    //

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectId('623416a73d64daf95db34303')
    // }, {
    //     // $set: { name: 'Mike' }
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // 
    // DELETE
    //

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})