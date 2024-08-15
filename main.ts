radio.onReceivedValue(function (name, value) {
    if (name == "r-motor") {
        if (value == 3) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
        } else if (value == 1) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, speed)
        } else if (value == 2) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, speed)
        } else if (value == 4) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, speed)
        } else if (value == 0) {
            Kitronik_Move_Motor.stop()
        }
    }
    if (name.includes("r-led")) {
        // string ist r-led0 bis r-led3, hier wird die Zahl isoliert, in eine Nummer type-gecasted direkt als LED nummer verwendet.
        // 
        // holt farbcode aus array
        moveMotorZIP.setZipLedColor(parseFloat(name.substr(5, 1)), colors[value])
        // jede LED änderung braucht "show" block, der dann die LEDs entsprechend aktualisiert
        moveMotorZIP.show()
    }
    // per Funk kann man die Gruppe ändern
    if (name == "radiogrp") {
        radiogrp = value
    }
    // per Funk kann man die Motorgeschwindigkeit ändern
    if (name == "speed") {
        speed = value
    }
})
let colors: number[] = []
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let speed = 0
let radiogrp = 0
radiogrp = 1
radio.setGroup(radiogrp)
basic.showNumber(radiogrp)
speed = 50
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
Kitronik_Move_Motor.brakeLightsOff()
// jede LED änderung braucht "show" block, der dann die LEDs entsprechend aktualisiert
moveMotorZIP.show()
// 1-9 entsprechen den ausgeschriebenen Farben, rot =16711680 etc.; 0=Stop; die erste 0 shifted die Position im array um 1 um die Werte direkt aus dem Codebook übernehmen zu können (Beginnen mit 1, nicht 0)
colors = [
0,
16711680,
16753920,
16776960,
65280,
255,
4915330,
9055202,
16711935,
16777215,
0
]
