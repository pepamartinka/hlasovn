radio.setGroup(666)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
let seriovy = control.deviceSerialNumber()
let enable = 0
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "ready" && value == 1) {
        basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
        enable = 1
        basic.pause(2000)
        basic.clearScreen()
    }
    
    if (name == "notready" && value == 0) {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
        enable = 0
        basic.pause(2000)
        basic.clearScreen()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (enable == 1) {
        radio.sendValue("hlas", 0)
        music.playTone(Note.C, music.beat(300))
        basic.showString("A")
        basic.clearScreen()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (enable == 1) {
        radio.sendValue("hlas", 1)
        music.playTone(Note.C, music.beat(300))
        basic.showString("B")
        basic.clearScreen()
    }
    
})
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    if (enable == 1) {
        radio.sendValue("hlas", 2)
        music.playTone(Note.C, music.beat(300))
        basic.showString("C")
        basic.clearScreen()
    }
    
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    if (enable == 1) {
        radio.sendValue("hlas", 3)
        music.playTone(Note.C, music.beat(300))
        basic.showString("D")
        basic.clearScreen()
    }
    
})
