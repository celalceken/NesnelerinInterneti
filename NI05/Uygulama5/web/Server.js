/***
* Arduino ile Servo Motor  Kontrolü.
 * Servo motora ait konum bilgisinin usb portundan alınarak görüntülenmesi ve
 * ardından istemcilere (web tarayıcıya) gönderilmesi sağlanıyor
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
const seriPort = new SerialPort("/dev/tty.usbserial-1420", { baudRate: 115200 })
const parser = new Readline()

//uygulama sunucusunun dinamik olarak oluşturması gerekmeyen statik içerikler
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/js', express.static(path.join(__dirname, 'js')))

// index.html dosyası istemcilere gönderiliyor...
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// Web sunucu başlaatılıyor

const webSunucuPortAdresi=8080;
http.listen(webSunucuPortAdresi, function(){
    console.log(webSunucuPortAdresi+': adresine istek gelmesi bekleniyor ');
});

/*
seriPort.pipe(parser)

parser.on('data', function (gelenVeri) {
    console.log("Veri:"+ gelenVeri); // USB portundan gelen veriyi çıkış konsoluna yazdır
    io.emit('alldata',gelenVeri); //  USB portundan gelen veriyi istemcilere (web tarayıcılarına) gönder
})
*/


io.on('connection', function (socket) {
    socket.on('istemciden', function (data) {
        console.log(data);
        seriPort.write(data.toString());
    });
});