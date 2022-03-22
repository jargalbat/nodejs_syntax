// node 7-default-params.js

const greeter = (name = 'user', age = 32) => {
    console.log('Hello ' + name)
}

greeter('Andrew', 15)

greeter()