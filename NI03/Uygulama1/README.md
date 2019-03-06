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

