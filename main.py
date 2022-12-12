distance_to_object = 0
basic.show_icon(IconNames.YES)
basic.pause(500)
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()

def on_forever():
    global distance_to_object
    distance_to_object = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
    basic.show_number(distance_to_object)
    if distance_to_object > 4:
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
        strip.clear()
    if distance_to_object <= 4:
        strip.set_pixel_color(distance_to_object, neopixel.colors(NeoPixelColors.BLUE))
        strip.show()
        strip.clear()
    if distance_to_object <= 1:
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        strip.show()
        strip.clear()
basic.forever(on_forever)
