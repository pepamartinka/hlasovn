radio.setGroup(69)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
let seriovy = control.deviceSerialNumber()
let enable = 0
console.log(seriovy)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendValue("vote", 1)
    music.playTone(Note.C, music.beat(300))
    basic.showString("A")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendValue("vote", 2)
})
function on_pin_pressed_p0() {
    radio.sendValue("vote", 3)
}

input.onPinPressed(TouchPin.P0, on_pin_pressed_p0)
function on_pin_pressed_p2() {
    radio.sendValue("vote", 4)
}

input.onPinPressed(TouchPin.P0, on_pin_pressed_p0)
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    let pocetA = 0
    let pocetB = 0
    let pocetC = 0
    let pocetD = 0
    if (name == "vote" && value == 1) {
        pocetA += 1
    }
    
    if (name == "vote" && value == 2) {
        pocetB += 1
    }
    
})
