## Uygulama - NodeMCU-ESP8266, MQTT, Servo Motor 

ESP8266, TCP/IP protokol yığınına sahip düşük maliyetli bir Wi-Fi modülüdür. NodeMCU (<https://www.nodemcu.com>), ESP8266 modülünü içeren, 
açık kaynaklı, programlanabilir ve düşük maliyetli bir uygulama geliştirme platformudur. 
NodeMCU ile Arduino geliştirme ortamı ya da Lua script kullanılarak IoT uygulamaları geliştirilebilir.

 
MQTT <https://www.youtube.com/watch?v=EIxdz-2rhLs>, 
Nesnelerin İnterneti sistemlerinin dikey boyutunda yer alan ve üzerlerinde algılayıcı/eyleyici/denetleyici 
bulunabilen cihazların internet ortamına taşınması, birbirleriyle ve diğer sistemlerle haberleşebilmesi amacıyla kullanılan 
protokollerin başında gelmektedir (Alternatifler: CoAP, MQTT, AMQP, DDS, REST, SOAP, XMPP ). 

Geliştirilen uygulamada; 
Arduino cihaza bağlı LDR (ışık şiddeti), sıcaklık ve nem oranı verilerinin
NodeJS ve MQTT yardımıyla bulut ortamına aktarılması ve Nesnelerin İnterneti Bulut hizmeti sağlayıcılarından 
biri olan Adafruit <https://io.adafruit.com> üzerinde oluşturulan kontrol panelinde görüntülenmesi sağlanmaktadır.
Oluşturulan kontrol paneli üzerinde yer alan buton ile, NodeMCU platformuna bağlı olan servo motorun 
kontrol edilmesi de sağlanmaktadır. Uygulamada, Servo motorun kontrolü için Arduino cihazdaki LDR değeri 
kontrol edilmekte ve MQTT ile uygun kontrol işareti gönderilmektedir. NodeJS ile geliştirilen bir diğer diğer 
uygulama/servis () içerisinde LDR ve 
Servo Motor Kontrol verilerinin MQTT yardımıyla MongoDB de oluşturulan veritabanına kaydedilmesi sağlanmaktadır.
MongoDB için hem yerel hem de uzak sunucu (mlab) oluşturulmuştur. 


* Ayrıntılı bilgi için:
* * <https://www.nodemcu.com/index_en.html#fr_54747361d775ef1a3600000f>
* * <http://www.electronicwings.com/nodemcu/getting-started-with-nodemcu-using-arduino-ide>
* * <http://www.electronicwings.com/nodemcu/nodemcu-gpio-with-arduino-ide>
* * <https://www.electronicwings.com/nodemcu/nodemcu-mqtt-client-with-arduino-ide>
* * <https://learn.adafruit.com/mqtt-adafruit-io-and-you/intro-to-adafruit-mqtt>
* * <https://nodemcu.readthedocs.io/en/master/#nodemcu-documentation>
* * <https://www.instructables.com/id/NodeMCU-ESP8266-Details-and-Pinout/>