
mqttParameters={

    username: 'iotrlab',
    password: '632feaa3fb094edea388dd45e4acf6e8',
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