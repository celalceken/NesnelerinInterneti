

## MQTT (Message Queuing Telemetry Transport) ve IoT Bulut Platformları

MQTT <https://www.youtube.com/watch?v=EIxdz-2rhLs>, Nesnelerin İnterneti sistemlerinin dikey boyutunda yer alan ve üzerlerinde algılayıcı/eyleyici/denetleyici 
bulunabilen cihazların internet ortamına taşınması, birbirleriyle ve diğer sistemlerle haberleşebilmesi amacıyla kullanılan 
protokollerin başında gelmektedir (Alternatifler: CoAP, MQTT, AMQP, DDS, REST, SOAP, XMPP ). Geliştirilen uygulamada; LDR (ışık şiddeti), sıcaklık ve nem oranı verilerinin
NodeJS ve MQTT yardımıyla bulut ortamına aktarılması ve Nesnelerin İnterneti Bulut hizmeti sağlayıcılarından 
biri olan Adafruit <https://io.adafruit.com> üzerinde oluşturulan kontrol panelinde görüntülenmesi sağlanmaktadır.
Oluşturulan kontrol paneli üzerinden, aynı zamanda servo motor kontrolü de gerçekleştirilmektedir.

### Uygulamanın çalıştırılması için

1. /Uygulama/Arduino/ klasöründeki ilgili *.ino dosyalarında yer alan kodlar Arduino geliştirme ortamında derlenmeli ve arduino platformuna aktarılmalıdır.
2. /Uygulama/Resources/Dashboard2.jpg adresinde verilen devre kurulmalıdır. (Devrenin PCB tasarımı için Fritzing yazılımı kullanılabilir)
3. Bilgisayar/RaspberryPI içerisine NodeJS platformu ve npm paket yöneticisi kurulmalıdır.
4. Projenin NodeJS/web tarafının geliştirilmesi için webstorm geliştirme ortamı kurulabilir.
5. Webstorm içerisinde yeni->boş bir proje oluşturunuz ve Uygulama1 klasörünün içerisindeki tün dosyaları buraya kopyalayınız.
6. /web/Server.js dosyası içerisindeki seriport yolunu kendi platformunuza göre ayarlamalısınız. (/web/SerialPortList.js uygulamasını çalıştırarak bulabilirsiniz.)
7. Terminalden, /web klasörü içerisinde (> npm install ) komutunu veriniz.
8. /web/Server.js içerisinde sağ tuş yaparak "Run" komutunu veriniz.
9. Web taryıcınızı açarak http://localhost:8080 adresine istek gönderiniz.
10. /web/Server.js içerisindeki index.html ifadesini sırasıyla index[1-2-3].html yaparak uygulamayı her değişiklikte yeniden çalıştırınız ve sonuçları web tarayıcınızda  gözlemleyiniz. 


Uygulamalarnın çalıştırıldığı node ve npm sürümleri:

NodeJS: v10.14.2
npm: 6.5.0

### Ek Kaynaklar

* DHT11 sıcaklık ve nem algılayıcısı <http://arduinoturkiye.com/dht11-sicaklik-ve-nem-sensorunun-arduino-ile-kullanimi/>

* MQTT <https://learn.adafruit.com/mqtt-adafruit-io-and-you?view=all> 
* * <https://www.youtube.com/watch?v=EIxdz-2rhLs> 
* * <http://mosquitto.org/man/mqtt-7.html>

* HTML (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/html/default.asp>

* JQuery (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/jquery/default.asp>

* CSS (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/css/default.asp>

* Bootstrap (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/bootstrap/default.asp>

* NodeJS (Sunucu Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/nodejs/default.asp>

