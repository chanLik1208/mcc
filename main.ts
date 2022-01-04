input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C - - - - - - - ", 120)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C - - - - - - - ", 120)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    music.playMelody("C - - - - - - - ", 120)
    music.playMelody("C5 - - - - - - - ", 120)
    control.waitMicros(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . . . . #
        . # # . .
        # . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . # . #
        . # . . .
        # . . . .
        . . . . #
        . . # . .
        `)
    for (let index = 0; index < 4; index++) {
    	
    }
    control.waitMicros(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
basic.forever(function () {
	
})
