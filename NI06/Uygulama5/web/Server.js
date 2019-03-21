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
const dateFormat = require('dateformat');


//Seri port işlemleri için gerekli nesneler oluşturuluyor.
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const seriPort = new SerialPort("/dev/tty.usbserial-1410", { baudRate: 115200 })
const parser = new Readline()


//Veritabanı Sunucu (Mongodb) işlemleri

const url = 'localhost:27017/GuvenlikSistemi'; // Connection URL
//const url = "mongodb://Lecture:Lecture1@ds119572.mlab.com:19572/ogrencibilgisistemi"
const db = require('monk')(url);
const collection = db.get('bariyer');
/*
collection.insert([{a: 1}, {a: 2}, {a: 3}])
    .then((docs) => { console.log("basarili");
        // docs contains the documents inserted with added **_id** fields
        // Inserted 3 documents into the document collection
    }).catch((err) => { console.log(err);
    // An error happened while inserting
}).then(() => db.close())
*/



//uygulama sunucusunun dinamik olarak oluşturması gerekmeyen statik içerikler
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use('/js', express.static(path.join(__dirname, 'js')))

// index.html dosyası istemcilere gönderiliyor...
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// index.html dosyası istemcilere gönderiliyor...
app.get('/grafik', function(req, res){
    res.sendFile(__dirname + '/index1.html');
});

// Web sunucu başlaatılıyor

const webSunucuPortAdresi=8080;
http.listen(webSunucuPortAdresi, function(){
    console.log(webSunucuPortAdresi+': adresine istek gelmesi bekleniyor ');
});


seriPort.pipe(parser)

parser.on('data', function (gelenVeri) {
    //console.log("Veri:"+ gelenVeri); // USB portundan gelen veriyi çıkış konsoluna yazdır
    io.emit('SunucudanIstemcilere',gelenVeri); //  USB portundan gelen veriyi istemcilere (web tarayıcılarına) gönder
})



io.on('connection', function (socket) {
    socket.on('IstemcidenSunucuya', function (data) {
        console.log(data);
        seriPort.write(data.toString());
        console.log(dateFormat(Date.now(), "dd.mm.yyyy-hh:MM:ss TT"));
        //Veritabanına da yaz
        collection.insert({"Zaman": dateFormat(Date.now(), "dd.mm.yyyy-hh:MM:ss TT"),"bariyerDurumu": data}).then((docs) => {
            }).catch((err) => {
            // An error happened while inserting
        }).then(() => db.close())
    });
});