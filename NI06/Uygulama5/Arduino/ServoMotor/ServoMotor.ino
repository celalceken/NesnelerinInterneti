/*
 Controlling a servo position using a potentiometer (variable resistor)
 by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

 modified on 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Knob
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 0;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  Serial.begin(115200);
  val=0;
}

void loop() {

  // send data only when you receive data:
  if (Serial.available() ) 
  {
    // read the incoming byte:
    val = Serial.parseInt();                
    myservo.write(val);                  // sets the servo position according to the scaled value
    //Serial.println(val);
  }
  delay(1);                           // waits for the servo to get there
}
