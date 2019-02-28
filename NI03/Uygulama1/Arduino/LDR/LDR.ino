/***LDR (Işık Sensörü) Uygulaması ***/

byte ledPin = 4;    //LED pini.
int LDRPin = A0;   //LDR giriş pini
const int eSIKdEGERI=500; 

void setup() 
{
  pinMode(LDRPin, INPUT);               
  pinMode(ledPin, OUTPUT);                    
  Serial.begin(115200);
}

void loop() 
{
  int LDRDegeri = analogRead(LDRPin);
  Serial.println(LDRDegeri);
  if(LDRDegeri<eSIKdEGERI)
    digitalWrite(ledPin, HIGH);
  else
    digitalWrite(ledPin, LOW);
  delay(1000);
}
