/*
Ultrasonik Mesafe Sensörü (HC-SR04)
 ile Servo Motor Kontrolü

*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

const int trigPin = 9;
const int echoPin = 10;

// defines variables
long duration;
int distance;
int val;    // variable to read the value from the analog pin

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  myservo.attach(8);  // attaches the servo on pin 8 to the servo object
  Serial.begin(115200);
}

void loop() {

    // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance= duration*0.034/2; //cm 
  // Prints the distance on the Serial Monitor
  //Serial.print("Distance (cm):");
  Serial.println(distance); //Ölçülen mesafe web ortamındaki denetleyiciye gönderiliyor
  delay(60); 

  if (Serial.available() ) 
  {
    // Web ortamındaki denetleyiciden gelen işaret alınıyor
    val = Serial.parseInt();                
    myservo.write(val);                  // sets the servo position according to the scaled value
  }
  
                         
}
