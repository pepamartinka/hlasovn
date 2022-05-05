radio.set_group(666)
radio.set_transmit_power(7)
radio.set_transmit_serial_number(True)
seriovy = control.device_serial_number()

enable=0


def on_received_value(name, value):
    global enable
    if name=="ready" and value== 1:
        basic.show_leds("""
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        """)
        enable=1
        basic.pause(2000)
        basic.clear_screen()

    if name=="notready" and value== 0:
        basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
        enable=0
        basic.pause(2000)
        basic.clear_screen()
radio.on_received_value(on_received_value)


def on_button_pressed_a():
        if enable ==1:
            radio.send_value("hlas",0)
            music.play_tone(Note.C, music.beat(300))
            basic.show_string("A")
            basic.clear_screen()

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if enable ==1:
        radio.send_value("hlas", 1)
        music.play_tone(Note.C, music.beat(300))
        basic.show_string("B")
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p0():
    if enable ==1:
        radio.send_value("hlas", 2)
        music.play_tone(Note.C, music.beat(300))
        basic.show_string("C")
        basic.clear_screen()
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_pin_pressed_p2():
    if enable ==1:
        radio.send_value("hlas", 3)
        music.play_tone(Note.C, music.beat(300))
        basic.show_string("D")
        basic.clear_screen()
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)




