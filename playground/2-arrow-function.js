// const square = function (x) {
//     return x * x
// }
// const square = (x) => {
//     return x * x
// }
// const square = (x) => x * x
// console.log(square(3))

const event1 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name)

        // const that = this
        // this.guestList.forEach(function (guest) {
        //     console.log(guest + ' is attending ' + that.name)
        // })

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
    // Arrow functions don't bind their own this value
    // It's useful for methods
    // printGuestList: () =>
    //     console.log('Guest list for ' + this.name)
}

event1.printGuestList()