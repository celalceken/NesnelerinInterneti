
mqttParameters={

    username: 'iotrlab',
    password: '2dacf1cc0c014c4b9ae32f0fcc32ff9e',
    topic1 : 'iotrlab/feeds/nem',
    topic2 : 'iotrlab/feeds/sicaklik',
    topic3 : 'iotrlab/feeds/LDR',
    topic4 : 'iotrlab/feeds/LED',

    //brokerURL: 'mqtt://localhost',  //local: 'mqtt://localhost' -----  cloud: 'mqtts://io.adafruit.com'
    brokerURL: 'mqtts://io.adafruit.com',
    port: 8883
    //port: 1883 //local:1883   --------  cloud:8883
}
module.exports = mqttParameters;