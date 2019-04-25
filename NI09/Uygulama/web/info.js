
mqttParameters={

    username: 'iotrlab',
    password: '555feaa3fb094edea388dd45e4acf7fe',
    topic1 : 'iotrlab/feeds/ivme1',
    topic2 : 'iotrlab/feeds/sicaklik',


    //brokerURL: 'mqtt://localhost',  //local: 'mqtt://localhost' -----  cloud: 'mqtts://io.adafruit.com'
    brokerURL: 'mqtts://io.adafruit.com',
    port: 8883
    //port: 1883 //local:1883   --------  cloud:8883
}
module.exports = mqttParameters;