/*
* Arduino ile LDR Uygulaması
*
* */

//Dependencies

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var serialport = require("serialport");

// configurations
var Readline = serialport.parsers.Readline;

//var serialPort = new serialport("/dev/ttyUSB0", { //Linux sistemlerde
//var serialPort = new serialport("COM3", {         //Windows sistemlerde
var serialPort = new serialport("/dev/tty.usbserial-1420", {
    baudRate: 115200,
    parser:  new Readline('\n')
});

serialPort.on('open',onOpen);
serialPort.on('data',onData);

function onOpen(){
    console.log("Serial port açıldı");
};


function onData(data){
    console.log(decoder.write(data));
};