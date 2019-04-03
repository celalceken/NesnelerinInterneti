/***
 *  Libelium Waspmote ve XBee modülleri kullanılarak gerçekleştirilen uygulamada, algılayıcı verilerinin
 * NodeJS ortamına kablosuz olarak aktarılması sağlanmaktadır. Kablosuz Algılayıcı Ağ protokolü olarak ZigBee kullanılmıştır.
 *
 ***/

//Kullanılan kütüphaneler tanımlanıyor

const express = require('express'); ////Node.js web uygulama çatısı. Web uygulamaları geliştirmek için kullanılır.
const app= express();
const http = require('http').Server(app);
const io = require('socket.io')(http); //Sunucu ile istemciler arasında anlık haberleşme için (web soketi)
const path = require('path');

//Seri port işlemleri için gerekli nesneler oluşturuluyor.
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const seriPort = new SerialPort("/dev/tty.usbserial-AH019TD5", { baudRate: 115200 })
const parser = new Readline()

seriPort.pipe(parser)

parser.on('data', function (gelenVeri) {
    console.log("UID:"+ gelenVeri); // USB portundan gelen RFID etiketi UID verisini çıkış konsoluna yazdır
    // io.emit('SunucudanIstemcilere',gelenVeri); //  USB portundan gelen veriyi istemcilere (web tarayıcılarına) gönder
})