Arduino UNO kullanılarak geliştirilen uygulama, ortamdaki ışık şiddetinin algılanarak NodeJS ortamına aktarılmasını ve çıkış konsoluna 
yazdırılmasını sağlamaktadır.

Uygulamanın çalıştırılması için:

1. /Arduino/LDR/LDR.ino dosyası, Arduino geliştirme ortamı (bilgisayara kurmanız gereklidir) kullanılarak Arduino UNO cihaza aktarılmalıdır.
2. /Arduino/LDR.fzz içerisinde yer alan devre kurulmalıdır. (Devrenin PCB tasarımı için Fritzing yazılımı kurulmalıdır.)
3. Bilgisayar/RaspberryPI içerisine NodeJS platformu ve npm paket yöneticisi kurulmalıdır.
4. Projenin NodeJS/web tarafının geliştirilmesi için webstorm geliştirme ortamı kurulabilir.
5. Webstorm içerisinde yeni->boş bir proje oluşturunuz ve Uygulama1 klasörünün içerisindeki tün dosyaları buraya kopyalayınız.
6. /web/Server.js dosyası içerisindeki seriport yolunu kendi platformunuza göre ayarlamalısınız. (/web/SerialPortList.js uygulamasını çalıştırarak bulabilirsiniz.)
7. Terminalden, /web klasörü içerisinde (> npm install ) komutunu veriniz.
8. /web/Server.js içerisinde sağ tuş yaparak "Run" komutunu veriniz.

Uygulamanın çalıştırıldığı node ve npm sürümleri:
NodeJS: v10.14.2
npm: 6.5.0

### Ek Kaynaklar

* Arduino Uno bord Genel Bilgi:
* * https://www.arduino.cc/en/Guide/Introduction
* * https://maker.robotistan.com/arduino-uno/ 
* Uygulama Geliştirme Ortamı (IDE):
* * https://www.arduino.cc/en/Guide/Environment
* Arduino Programlama Dili: https://www.arduino.cc/reference/en/
* Arduino Bordlar: 
* *https://www.arduino.cc/en/main/boards
* *https://maker.robotistan.com/arduino-yazilim-kurulum/) 2. LDR (Işık Algılayıcısı)
* * https://www.mcufreak.com/ldr-nedir-nasil-kullanilir/
* NodeJS (Arduino UNO bordunun web ortamıyla etkileşimini sağlamak için kullanılır)
* * https://nodejs.org/en/ 
* Fritzing (PCB tasarımları için kullanılır)
* * http://fritzing.org