// node playground/promise-chaining.js

require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6235aa8fc130da0d84f8baf5', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('6235aa8fc130da0d84f8baf5', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})