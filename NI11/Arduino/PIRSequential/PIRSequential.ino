/***PIR Sensor Application***/



void setup() 
{
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(4, OUTPUT);
  pinMode(2,INPUT);
  Serial.begin(9600);
}

void loop() 
{
  if (digitalRead(7))
  {

    digitalWrite(4, HIGH);
    delay(3000);
    digitalWrite(4, LOW); 

  }
  delay(2000);
}
