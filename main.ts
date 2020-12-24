radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xvalue = value
    }
    if (name == "y") {
        yvajue = value
    }
})
let y = 0
let x = 0
let yvajue = 0
let xvalue = 0
radio.setGroup(1)
basic.forever(function () {
    let yValue = 0
    RingbitCar.freestyle(yValue + xvalue, yValue - xvalue)
})
basic.forever(function () {
    x = Math.map(0, 0, 1023, -100, 100)
    y = Math.map(0, 0, 1023, -100, 100)
    radio.sendValue("x", x)
    basic.pause(100)
    radio.sendValue("y", y)
    basic.pause(100)
})
