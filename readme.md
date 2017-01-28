# micro:bit eddystone url beacon

This is some sample code for the [micro:bit pxt editor](https://pxt.microbit.org/) that allows you to transmit eddystone url beacons from your microbit.

* A+B toggles beacon transmit on and off
* A reduces transmit power levels
* B increases transmit power levels
* the LED display shows the current transmit power level

The .hex file can be loaded into PXT editor using "import project" or you can switch to Javascript view and copy/paste the .js file into the editor window - if you choose this method please be sure to add the "Bluetooth" package first using the "+ Add package" button towards the bottom of the screen.

The .hex file can also be loaded directly onto your microbit if you want to just try things out, just drag and rop onto your micro:bit drive. The url this sample code broadcasts is fixed, you will need to load the file into the editor and change it if you want to broadcast a different url. One improvement might be to enable the UART service and read new urls over bluetooth....

A [short video is available on YoutTube](https://youtu.be/2lY6KEGvVrI) showing this code in action next to an iPhone running the [Locate app](https://itunes.apple.com/gb/app/locate-beacon/id738709014).