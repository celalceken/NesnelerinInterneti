/*
Ultrasonik Mesafe Sensörü (HC-SR04)
 ile Servo Motor Kontrolü

*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

const int trigPin = 9;
const int echoPin = 10;
const int servoPin = 8;
const int eSIKdEGERI=50; 

// defines variables
long duration;
int distance;
int val;    // variable to read the value from the analog pin

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input
  myservo.attach(servoPin);  // attaches the servo on pin 8 to the servo object
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
  Serial.print("Distance (cm):");
  Serial.println(distance);
  delay(60); 

  if(distance <= eSIKdEGERI )
  {

    myservo.write(80);  //Bariyer aç                
    delay(5000);   
    myservo.write(0); // Bariyer kapa
    
  }
  
                         
}
