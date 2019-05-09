## Kesme (Interrupt) Kullanımı, PIR - Hareket Algılayıcısı, Uyku Modu (Enerji Tüketiminin Azaltılması)

### Kesme (Interrupt)

İşlemcinin normal işine devam ederken başka bir işi yapması için kullanılır. Kesme isteği için ilk olarak bir olay gerçekleşmesi
gerekir. Bu olay zamanlayıcı (sürenin dolması) yada bir sensör (ivme değişimi, hareket algılanması vb.) tarafından gerçekleştirilebilir. 
Olay meydana geldiğinde işlemciye kesme isteği gönderilir ve işlemci mevcut işini bırakarak bu istekle ilgili modülü çalıştırır. Kesmeyle 
ilgili işlem sona erdiğinde işlemci önceki işine kaldığı yerden devam eder. RTC (Real Time Clock), WDT (Watch Dog Timer) gibi modüller 
belirli bir süre sonra olay üretilmesi ve kesme isteği oluşturulması için kullanılırlar.

Örnek Uygulama için /Arduino/ButonLed içerisindeki programı çalıştırınız.

* Arduino ile kesme işlemleri için: 
    * * <https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/>
    * * <http://gammon.com.au/interrupts>


### PIR (Pyroelectric/Passive Infra red) - Hareket Algılayıcısı

PIR (Pyroelectric/Passive Infra red), çevredeki nesnelerin yaymış oldukları ısı seviyelerindeki değişimi ölçerek hareketi algılar. 

* Ayrıntılar için
* * <http://learn.parallax.com/tutorials/language/propeller-c/propeller-c-simple-devices/pir-motion-sensor>
* * <https://www.parallax.com/product/555-28027>
* * <https://www.youtube.com/watch?v=6Fdrr_1guok>
 

### Uyku Modu (Enerji Tüketiminin Azaltılması)

Nesnelerin İnterneti sistemleri içerisinde yer alan fiziksel nesneler biribirleriyle çoğunlukla kablosuz olarak 
haberleşmektedirler. Bu cihazlar için en önemli tasarım sorunlarının başında enerji tüketimi gelmektedir. Enerji tüketimini
azaltmak için kullanılan en etkin yöntem ise cihazların uykuya dalmalarını sağlamaktır. Gerekli olduğunda (bir olay meydana geldiğinde 
(zamanlayıcı süresinin dolması,ivme değişimi, hareket algılanması vb.)) bu cihazları uyandırmak için kesme 
kullanılmalıdır. 

* Arduino cihazlar için uyku modu
* * PIR sleep mode ile %70-75 oranında enerji tasarrufu sağlandığını gösteren uygulama
<https://www.instructables.com/id/PIR-Motion-Detector-With-Arduino-Operated-at-Lowes/>
* * <http://www.engblaze.com/hush-little-microprocessor-avr-and-arduino-sleep-mode-basics/>


* Waspmote cihazlar için uyku modu
* * <http://www.libelium.com/downloads/documentation/waspmote_technical_guide.pdf>
* * <http://www.libelium.com/downloads/documentation/waspmote-rtc-programming_guide.pdf>
* * <http://www.libelium.com/downloads/documentation/waspmote-accelerometer-programming_guide.pdf>
* * <http://www.libelium.com/development/waspmote/documentation/interruption-programming-guide/>


## Uygulamalar

### Uygulama1: D2 pininden kesme isteği gönderilmesi

/Arduino/ButonLed

### Uygulama2: PIR ile hereket algılama uygulaması. 

Uygulamada, hareket algılayıcı (PIR) D2 pinine bağlanmaktadır. Hareket algılandığında kesme üretilmekte ve Servo Motorun
konum değiştirmesi sağlanmaktadır.

/Arduino/PIRInterruptServoMotor

### Uygulama3: PIR ile hereket algılama uygulaması. 

Uygulamada, cihaz enerji tüketimini azaltmak için uykuya dalıyor. PIR Sensorü tarafından hareket algılandığında uyanıyor 
ve servo motoru döndürüyor. Ardından tekrar uykuya dalıyor. 
Hareket algılandığında bu bilgi mqtt ile IoT bulut oratmına da aktarılıyor

/Arduino/PIRInterruptServoMotorLowPower
/web/Server.js

### Uygulama4: Waspmote Hibernate modu

Waspmote cihazın peryodik olarak uykuya (hibernate modu) dalması ve uyanması sağlanıyor.  

/Waspmote/Hibernate

### Uygulama5: Waspmote İvme Ölçerin ürettiği Kesme

Waspmote cihazın uykuya (hibernate modu) dalması ve İvme Ölçerin ürettiği Kesme ile uyanması sağlanıyor.  

/Waspmote/ACCFreeFallInterrupt