## Web Tabanlı Görüntüleme/Kontrol Uygulaması (Ultrasonik Mesafe Sensörü (HC-SR04), Servo Motor)

Arduino UNO kullanılarak geliştirilen uygulama, servo motorun Ultrasonik Mesafe Sensörü (HC-SR04) ile web üzerinden 
kontrol edilmesini sağlamaktadır. 
Deney ile ilgili ayrıntılara <https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/> adresinden erişebilirsiniz.

### Uygulamaların çalıştırılması için

1. /UygulamaX/Arduino/ klasörlerindeki ilgili *.ino dosyalarında yer alan kodlar derlenmeli ve arduino platformuna aktarılmalıdır.
2. https://www.arduino.cc/en/Tutorial/Knob adresinde verilen devre kurulmalıdır. (Devrenin PCB tasarımı için Fritzing yazılımı kullanılabilir)
3. Bilgisayar/RaspberryPI içerisine NodeJS platformu ve npm paket yöneticisi kurulmalıdır.
4. Projenin NodeJS/web tarafının geliştirilmesi için webstorm geliştirme ortamı kurulabilir.
5. İlgili uygulamaların web tarafı için /web klasöründe yer alan Server.js dosyası çalıştırılmalıdır.

Uygulamalarnın çalıştırıldığı node ve npm sürümleri:

NodeJS: v10.14.2
npm: 6.5.0

### Ek Kaynaklar

* Elektronik devre ayrıntıları için  <https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/>

* Servo motor:  <https://maker.robotistan.com/rc-servo-motor-nedir/>

* Ultrasonik Mesafe Sensörü (HC-SR04): <https://elecfreaks.com/estore/download/EF03085-HC-SR04_Ultrasonic_Module_User_Guide.pdf> <http://www.robotiksistem.com/hc_sr04.pdf>

* HTML (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/html/default.asp>

* JQuery (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/jquery/default.asp>

* CSS (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/css/default.asp>

* Bootstrap (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/bootstrap/default.asp>

* NodeJS (Sunucu Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/nodejs/default.asp>

