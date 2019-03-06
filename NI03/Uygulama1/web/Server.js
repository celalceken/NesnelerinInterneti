/***
 * Arduino ile LDR Uygulaması.
 * Ölçülen ışık şiddeti bilgisinin usb portundan alınarak görüntülenmesi sağlanıyor.
 *
 ***/
//Dependencies

//Seri port işlemleri için gerekli nesneler oluşturuluyor.
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const seriPort = new SerialPort("/dev/tty.usbserial-1410", { baudRate: 115200 })
//var seriPort = new serialPort("/dev/ttyUSB0", { //Linux sistemlerde
//var seriPort = new serialPort("COM3", {         //Windows sistemlerde

const parser = new Readline() // Seri porttan (newline (\n) alındığı zaman- varsayılan)  gelen veriyi
//(varsayılan olarak) 'utf8' formatına dönüştürür.

seriPort.pipe(parser) //seri porttan gelen veriyi "parser" a yönlendiriyor.

parser.on('data', function (gelenVeri) {
    console.log("Veri:"+ gelenVeri);
})
