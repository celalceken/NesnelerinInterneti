/***
 * Arduino ile LDR Uygulaması.
 * Ölçülen ışık şiddeti bilgisinin usb portundan alınarak görüntülenmesi sağlanıyor.
 *
 ***/
//Dependencies
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort("/dev/tty.usbserial-1410", { baudRate: 115200 })
//var port = new serialPort("/dev/ttyUSB0", { //Linux sistemlerde
//var port = new serialPort("COM3", {         //Windows sistemlerde

const parser = new Readline() //

port.pipe(parser)

parser.on('data', function (gelenVeri) {
    console.log("Veri:"+ gelenVeri);

})
