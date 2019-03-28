/***
 *  Radyo frekanslı tanılama (Radio frequency Identification - RFID) RC522
 * RFID etiketine ait UID değerinin usb portundan alınarak
 * istemcilere (web tarayıcıya) gönderilmesi sağlanıyor, Okunan RFID etiketi UID değeri ve okuma zamanı
 * MongoDB veritabanına kaydediliyor. Okunan UID değerine ait kullanıcı bilgileri veritabanından alınarak web tarayıcıda
 * yazdırılıyor.
 *
 ***/

//Kullanılan kütüphaneler tanımlanıyor

const express = require('express'); ////Node.js web uygulama çatısı. Web uygulamaları geliştirmek için kullanılır.
const app= express();
const http = require('http').Server(app);
const io = require('socket.io')(http); //Sunucu ile istemciler arasında anlık haberleşme için (web soketi)
const path = require('path');
const dateFormat = require('dateformat');

//Seri port işlemleri için gerekli nesneler oluşturuluyor.
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const seriPort = new SerialPort("/dev/tty.usbserial-1410", { baudRate: 115200 })
const parser = new Readline()

//Veritabanı Sunucu (Mongodb) işlemleri
const url = 'localhost:27017/GuvenlikSistemi'; // Connection URL
//const url = "mongodb://LectureUser:LecturePassword1@ds119606.mlab.com:19606/iot"
const db = require('monk')(url);
const collection1 = db.get('RFIDLoglari');
const collection2 = db.get('Kullanicilar');


//uygulama sunucusunun dinamik olarak oluşturması gerekmeyen statik içerikler
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/js', express.static(path.join(__dirname, 'js')))

// index.html dosyası istemcilere gönderiliyor...
app.get('/', function(req, res){
    res.sendFile(__dirname + '/indexMongo1.html');
});


// Web sunucu başlatılıyor

const webSunucuPortAdresi=8080;
http.listen(webSunucuPortAdresi, function(){
    console.log(webSunucuPortAdresi+': adresine istek gelmesi bekleniyor ');
});

seriPort.pipe(parser)

parser.on('data', function (gelenVeri) {
    console.log("UID:"+ gelenVeri); // USB portundan gelen veriyi çıkış konsoluna yazdır

    //Okuma zamanını ve okunan UID değerini veritabanına kaydet.
    collection1.insert({"Zaman": dateFormat(Date.now(), "dd.mm.yyyy-hh:MM:ss TT"),"RFIDUID": gelenVeri.trim()}).then((docs) => {
    }).catch((err) => {
        // An error happened while inserting
    }).then(() => db.close())

    // Okunan UID değerine ait kullanıcı bilgileri veritabanından al ve web tarayıcıya soket üzerinden gönder.
    collection2.find({"RFIDEtiket":gelenVeri.trim()}).then((docs) => {

        console.log(docs);
        console.log(docs[0].adiSoyadi);
        io.emit('SunucudanIstemcilere',docs[0].adiSoyadi);

    })
})