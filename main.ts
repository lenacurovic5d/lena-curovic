basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 248)
    basic.showNumber(1)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("love")
    basic.showArrow(ArrowNames.North)
})
