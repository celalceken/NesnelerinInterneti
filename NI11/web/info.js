
mqttParameters={

    username: 'iotrlab',
    password: '0f5970f97fc2433b89c0fa3f6f2dd0cd',
    topic1 : 'iotrlab/feeds/PIR',


    //brokerURL: 'mqtt://localhost',  //local: 'mqtt://localhost' -----  cloud: 'mqtts://io.adafruit.com'
    brokerURL: 'mqtts://io.adafruit.com',
    port: 8883
    //port: 1883 //local:1883   --------  cloud:8883
}
module.exports = mqttParameters;