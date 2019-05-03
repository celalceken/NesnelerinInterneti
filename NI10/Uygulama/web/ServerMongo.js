/***
 *  MQTT sunucudan gelen LDR ve servo motor kontrol verileri
 * MongoDB veritabanına kaydediliyor.
 ***/

//Kullanılan kütüphaneler tanımlanıyor

const mqtt = require('mqtt');
const mqttParameters = require('./info');

//mqtt sunucuya bağlanılıyor
var client = mqtt.connect(mqttParameters.brokerURL,{
    port: mqttParameters.port,
    username: mqttParameters.username,
    password: mqttParameters.password,
    rejectUnauthorized: false

});

//Veritabanı Sunucu (Mongodb) işlemleri
//const url = 'localhost:27017/GuvenlikSistemi'; // Connection URL
const url = "mongodb://LectureUser:LecturePassword1@ds119606.mlab.com:19606/iot"
const db = require('monk')(url);
const collection1 = db.get('LDR');
const collection2 = db.get('ServoMotorKontrol');

const dateFormat = require('dateformat');


client.on('connect', () => {
    client.subscribe(mqttParameters.topics);
});

// Uzaktan gelen mesajı al

client.on('message', function (topic, message) {

    if (topic === 'iotrlab/feeds/LDR') {
        //console.log('LDR:'+message.toString());
        //Ölçüm zamanını ve ölçülen LDR değerini veritabanına kaydet.
        collection1.insert({"Zaman": dateFormat(Date.now(), "dd.mm.yyyy-hh:MM:ss TT"),"LDR": message.toString().trim()}).
        then((docs) => {
        }).catch((err) => {
            // An error happened while inserting
        }).then(() => db.close())
    }
    if (topic === 'iotrlab/feeds/servo') {
        //console.log('servo:'+message.toString());

        //Zamanı ve Servo Motor Kontrol verisini  veritabanına kaydet.

        collection2.insert({"Zaman": dateFormat(Date.now(), "dd.mm.yyyy-hh:MM:ss TT"),"ServoHareket": message.toString()}).
        then((docs) => {
        }).catch((err) => {
            // An error happened while inserting
        }).then(() => db.close())
    }

});

