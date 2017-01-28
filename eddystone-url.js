let txState = 0
let txPower = 0
let txURL = ""
input.onButtonPressed(Button.A, () => {
    if (txPower > 0) {
        txPower += -1
        bluetooth.setTransmitPower(txPower)
    }
})
basic.forever(() => {
    if (txState == 0) {
        basic.showString("Off")
    } else {
        basic.showNumber(txPower)
    }
})
input.onButtonPressed(Button.B, () => {
    if (txPower < 7) {
        txPower += 1
        bluetooth.setTransmitPower(txPower)
    }
})
input.onButtonPressed(Button.AB, () => {
    if (txState == 1) {
        txState = 0
        bluetooth.stopAdvertising()
    } else {
        txState = 1
        bluetooth.advertiseUrl(
            txURL,
            txPower,
            false
        )
    }
})
// Change this to broadcast a different url. Max 17
// chars.
txURL = "https://stem.org.uk"
txPower = 0
txState = 0