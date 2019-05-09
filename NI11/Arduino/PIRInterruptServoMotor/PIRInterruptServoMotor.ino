/**
*hareket algılayıcı (PIR) D2 pinine bağlanmaktadır. Hareket algılandığında kesme üretilmekte ve Servo Motorun
 konum değiştirmesi sağlanmaktadır.
*/
#include <Servo.h>

Servo myservo;

int pirPin = 2; //Uno için 2 ve 3 kesme pinleridir.   
int konum= 0; // Servo motor konumu

void setup()
{                
  Serial.begin(115200);
  
  pinMode(pirPin, INPUT);     
  
  // 2 nolu pin için (0) kesme ayarla. kesme geldiğide,  işaretin yükselen kenarında (RISING)
  //   hareketAlgilandi()  fonksiyonunu çalıştır. 
  attachInterrupt(digitalPinToInterrupt (2), hareketAlgilandi, RISING); //LOW, HIGH, FALLING, CHANGE
  myservo.attach(9);
}
void loop()
{
 
}
void hareketAlgilandi()
{
  Serial.println("1");
  konum=(konum==90)?0:90;  
  myservo.write(konum); 
  
}
