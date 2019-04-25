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

//Veritabanı Sunucu (Mongodb) işlemleri
const url = 'localhost:27017/IvmeOlcer'; // Connection URL
//const url = "mongodb://LectureUser:LecturePassword1@ds119606.mlab.com:19606/iot"
const db = require('monk')(url);
const collection = db.get('IvmeVerileri');
const dateFormat = require('dateformat');

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


const mqtt = require('mqtt');
const mqttParameters = require('./info');

//mqtt sunucuya bağlanılıyor
var client = mqtt.connect(mqttParameters.brokerURL,{
    port: mqttParameters.port,
    username: mqttParameters.username,
    password: mqttParameters.password,
    rejectUnauthorized: false

});




seriPort.pipe(parser)

parser.on('data', function (gelenVeri) {
    console.log("UID:"+ gelenVeri);

    var array = gelenVeri.split(":");
    console.log(array[3]);
    console.log(array[4]);
    console.log(array[5]);
    io.emit('alldata','x:'+array[3]+'y:'+array[4]+'z:'+array[5]);

    var veriler='x:'+array[3]+'y:'+array[4]+'z:'+array[5];

    //Okuma zamanını ve okunan UID değerini veritabanına kaydet.
    collection.insert({"Zaman": dateFormat(Date.now(), "dd.mm.yyyy-hh:MM:ss TT"),"IvmeDegisimleri": veriler}).
    then((docs) => {
    }).catch((err) => {
        // An error happened while inserting
    }).then(() => db.close())

    client.publish(mqttParameters.topic1, array[3]);
    client.publish(mqttParameters.topic2, array[1]);

})