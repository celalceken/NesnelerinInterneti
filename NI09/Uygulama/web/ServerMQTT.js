/***
 *  Libelium Waspmote ve XBee modülleri kullanılarak gerçekleştirilen uygulamada, algılayıcı verilerinin
 * NodeJS ortamına kablosuz olarak aktarılması sağlanmaktadır. Kablosuz Algılayıcı Ağ protokolü olarak ZigBee kullanılmıştır.
 *
 ***/

//Kullanılan kütüphaneler tanımlanıyor
const SerialPort = require('serialport')
const mqtt = require('mqtt');
const mqttParameters = require('./info');

//mqtt sunucuya bağlanılıyor
var client = mqtt.connect(mqttParameters.brokerURL,{
    port: mqttParameters.port,
    username: mqttParameters.username,
    password: mqttParameters.password,
    rejectUnauthorized: false

});

const Readline = require('@serialport/parser-readline')
const seriPort = new SerialPort("/dev/tty.usbserial-AH019TD5", { baudRate: 115200 })
const parser = new Readline()

seriPort.pipe(parser)

parser.on('data', function (gelenVeri) {
    //console.log(gelenVeri);
    var array = gelenVeri.split(":");
    console.log(array[3]);
    console.log(array[4]);
    console.log(array[5]);

    //client.publish(mqttParameters.topic1, array[0]);
    client.publish(mqttParameters.topic2, array[1]);
    client.publish(mqttParameters.topic3, array[5]);
    client.publish(mqttParameters.topic5, array[3]);


})