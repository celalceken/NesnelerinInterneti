/*
* Cihaz uykuya dalıyor. PIR Sensorü tarafından hareket algılandığında uyanıyor ve servo
* motoru döndürüyor. Ardından tekrar uykuya dalıyor.
*/
#include <Servo.h>
#include <avr/sleep.h>



Servo myservo;

int pirPin = 2; //Uno için 2 ve 3 kesme pinleridir. 
int ledPin = 13; // Cihazın uyku durumunu gösterecek
int servoPin = 9; 
int konum= 0; // Servo motor konumu

void setup()
{                
  Serial.begin(115200);
  pinMode(pirPin, INPUT); 
  pinMode(ledPin,OUTPUT); 
  digitalWrite(ledPin,HIGH);    
  myservo.attach(servoPin);
}

void loop()
{

delay(1000);
uykuZamani();
}



void uykuZamani(void)
{   
  Serial.println("Cihazımız uykuya dalıyor..."); 

 // 2 nolu pin için (0) kesme ayarla. kesme geldiğide,  işaretin yükselen kenarında (RISING)
 //   hareketAlgilandi()  fonksiyonunu çalıştır. 
  attachInterrupt(digitalPinToInterrupt (2), hareketAlgilandi, RISING); //LOW, HIGH, FALLING, CHANGE

  delay(100);
  
  //Uyku modu ayarlanıyor. SLEEP_MODE_IDLE(en az tasarruf), SLEEP_MODE_ADC, SLEEP_MODE_PWR_SAVE
  //SLEEP_MODE_STANDBY, SLEEP_MODE_PWR_DOWN(en çok tasarruf)
  set_sleep_mode(SLEEP_MODE_PWR_DOWN);

  // Sleep Enable (SE) biti ayarlanıyor:
  sleep_enable();

  //Uyumaya başlıyor
  digitalWrite(ledPin,LOW); 
  sleep_mode();

  // Uyandığı zaman buradan çalışmaya buradan başlayacak
  sleep_disable();
  digitalWrite(ledPin,HIGH); 
}

//Hareket algılandığında çalıştırılacak modül
void hareketAlgilandi()
{
  Serial.println("1"); 
  konum=(konum==90)?0:90;  
  myservo.write(konum); 
  detachInterrupt(digitalPinToInterrupt (2)); //interrupt pasif hale getiriliyor
}
//
