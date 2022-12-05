let distance_to_object = 0
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
})
