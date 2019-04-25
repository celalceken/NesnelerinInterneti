##Kablosuz Algılayıcı Ağlar

Kablosuz haberleşme ve gömülü sistem teknolojilerindeki gelişmeler küçük boyutlu, düşük maliyetli, enerji etkin 
ve çok fonksiyonlu kablosuz algılayıcı düğümlerin yapımını kolaylaştırarak kullanım alanlarını genişletmiştir. 
Kablosuz düğümlerin birlikte çalışmasıyla oluşturulan Kablosuz Algılayıcı ve Eyleyici Ağlar (KAEA) günümüzde, 
Nesnelerin İnterneti paradigmasının en önemli dikey boyut bileşenlerinden biri olarak kullanılmaktadır. 

Libelium Waspmote ve XBee modülleri kullanılarak gerçekleştirilen uygulamada, algılayıcı verilerinin
NodeJS ortamına kablosuz olarak aktarılması sağlanmaktadır. Kablosuz Algılayıcı Ağ protokolü olarak ZigBee kullanılmıştır.
* Ayrıntılı bilgi için:
* * <http://www.libelium.com/downloads/documentation/waspmote_technical_guide.pdf>
* * <https://cdn-learn.adafruit.com/downloads/pdf/alltheiot-transports.pdf?timestamp=1554265231>
* Örnek uygulamalar için <http://www.libelium.com/resources/case-studies/>
* LoraWAN: <http://www.libelium.com/downloads/documentation/waspmote-lorawan-networking-guide.pdf>



### Uygulamaların çalıştırılması için

1. /Uygulama/Waspmote/ klasörlerindeki ilgili *.pde dosyalarında yer alan kodlar Waspmote geliştirme ortamında derlenmeli ve waspmote platformuna aktarılmalıdır.
2. /Uygulama/Resources/ adresinde verilen devre kurulmalıdır. (Devrenin PCB tasarımı için Fritzing yazılımı kullanılabilir)
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

* HTML (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/html/default.asp>

* JQuery (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/jquery/default.asp>

* CSS (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/css/default.asp>

* Bootstrap (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/bootstrap/default.asp>

* NodeJS (Sunucu Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/nodejs/default.asp>

* MQTT <https://learn.adafruit.com/mqtt-adafruit-io-and-you?view=all> 
* * <https://www.youtube.com/watch?v=EIxdz-2rhLs> 
* * <http://mosquitto.org/man/mqtt-7.html>

