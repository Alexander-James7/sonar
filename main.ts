let strip: neopixel.Strip = null
let distance_to_object = 0
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
    if (distance_to_object > 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    } else if (distance_to_object == 4) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (distance_to_object == 3) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (distance_to_object == 2) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    }
})
