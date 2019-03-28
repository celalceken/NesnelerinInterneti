## Radyo frekanslı tanılama (Radio frequency Identification - RFID) RC522

RFID, nesneleri radyo dalgalarını kullanarak tanımlamayı sağlayan bir teknolojidir.
Deney ile ilgili ayrıntılara <https://maker.robotistan.com/arduino-dersleri-18-rc522-rfid-modul-kullanimi//> adresinden erişebilirsiniz.

### Uygulamaların çalıştırılması için

1. /UygulamaX/Arduino/ klasörlerindeki ilgili *.ino dosyalarında yer alan kodlar Arduino geliştirme ortamında derlenmeli ve arduino platformuna aktarılmalıdır.
2. <https://maker.robotistan.com/arduino-dersleri-18-rc522-rfid-modul-kullanimi//> adresinde verilen devre kurulmalıdır. (Devrenin PCB tasarımı için Fritzing yazılımı kullanılabilir)
3. Bilgisayar/RaspberryPI içerisine NodeJS platformu ve npm paket yöneticisi kurulmalıdır.
4. Projenin NodeJS/web tarafının geliştirilmesi için webstorm geliştirme ortamı kurulabilir.
5. Webstorm içerisinde yeni->boş bir proje oluşturunuz ve Uygulama1 klasörünün içerisindeki tün dosyaları buraya kopyalayınız.
6. /web/Server.js dosyası içerisindeki seriport yolunu kendi platformunuza göre ayarlamalısınız. (/web/SerialPortList.js uygulamasını çalıştırarak bulabilirsiniz.)
7. Terminalden, /web klasörü içerisinde (> npm install ) komutunu veriniz.
8. /web/Server.js içerisinde sağ tuş yaparak "Run" komutunu veriniz.
9. Web taryıcınızı açarak http://localhost:8080 adresine istek gönderiniz.
10. /web/Server.js içerisindeki index.html ifadesini sırasıyla index[1-2-3].html yaparak uygulamayı her değişiklikte yeniden çalıştırınız ve sonuçları web tarayıcınızda  gözlemleyiniz. 
---
11. Uygulama2/ServerMongo.js içerisinde, RFID etiketine ait UID verilerinin MongoDB veritabanında saklanması için gerekli kodlar da bulunmaktadır. Bu uygulamanın 
tüm fonksiyonlarıyla birlikte çalışabilmesi için MongoDB sunucunun kurulması (<https://www.mongodb.com/download-center/community>), servisinin başlatılması ve "GuvenlikSistemi"
 adlı veritabanının oluşturulması gerekmektedir. Veritabanı oluşturma, görüntüleme vb. işlemler için MongoDB istemci yazılımları (Derslerde, ücretsiz
 olarak temin edebileceğiniz Studio 3T (<https://studio3t.com/download/>) kullanılacaktır.


Uygulamalarnın çalıştırıldığı node ve npm sürümleri:

NodeJS: v10.14.2
npm: 6.5.0

### Ek Kaynaklar

* RFID sürücü ve örnek uygulamalar <https://github.com/miguelbalboa/rfid/blob/master/examples/ChangeUID/ChangeUID.ino>

* Elektronik devre ayrıntıları için  <https://maker.robotistan.com/arduino-dersleri-18-rc522-rfid-modul-kullanimi/> <https://randomnerdtutorials.com/security-access-using-mfrc522-rfid-reader-with-arduino/>

* HTML (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/html/default.asp>

* JQuery (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/jquery/default.asp>

* CSS (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/css/default.asp>

* Bootstrap (İstemci Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/bootstrap/default.asp>

* NodeJS (Sunucu Tarafı) konusunda ayrıntılı bilgi için <https://www.w3schools.com/nodejs/default.asp>

