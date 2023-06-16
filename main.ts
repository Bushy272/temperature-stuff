basic.forever(function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() < 18) {
        basic.showString("Too cold!")
    }
})
