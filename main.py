radio.set_group(69)
radio.set_transmit_power(7)
radio.set_transmit_serial_number(True)
seriovy = control.device_serial_number()

enable=0

print(seriovy)

def on_button_pressed_a():
     radio.send_value("vote",1)
     music.play_tone(Note.C, music.beat(300))
     basic.show_string("A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_value("vote", 2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p0():
    radio.send_value("vote", 3)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p2():
    radio.send_value("vote", 4)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)


def on_received_value(name, value):
    pocetA=0
    pocetB=0
    pocetC=0
    pocetD=0
    if name == "vote" and value == 1:
        pocetA +=1

    if name == "vote" and value == 2:
        pocetB+=1
radio.on_received_value(on_received_value)

