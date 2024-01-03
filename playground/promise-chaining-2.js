// node playground/promise-chaining-2.js

require('../task-manager/src/db/mongoose')
const Task = require('../task-manager/src/models/task')

// Task.findByIdAndRemove({ _id: '623598f2e942e744baa3c50a' }).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const countBefore = await Task.countDocuments({ completed: false })
    console.log(countBefore)

    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

removeTaskAndCount('6235a241677000a3eb43404f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})