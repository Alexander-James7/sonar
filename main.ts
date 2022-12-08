let distance_to_object = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
    if (distance_to_object > 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    }
    if (distance_to_object <= 4) {
        strip.setPixelColor(distance_to_object, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    }
    if (distance_to_object <= 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    }
})
