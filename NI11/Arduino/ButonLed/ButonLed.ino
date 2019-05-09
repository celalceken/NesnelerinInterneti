/**
* D2 pininden kesme isteği gönderilmesi
*
*/
const byte ledPini = 12;
const byte kesmePini = 2;

void setup() {
  Serial.begin(115200);
  pinMode(ledPini, OUTPUT);
  pinMode(kesmePini, INPUT_PULLUP);   
  
  // 2 nolu pin için (0) kesme ayarla. kesme geldiğide
  //   kesmeFonksiyonu()  fonksiyonunu çalıştır. 
  attachInterrupt(digitalPinToInterrupt(kesmePini), kesmeFonksiyonu, CHANGE);//LOW, HIGH, FALLING, CHANGE
}

void loop() {
  
}

void kesmeFonksiyonu() {
  
  if (digitalRead (kesmePini) == HIGH)
    digitalWrite (ledPini, HIGH);
  else
    digitalWrite (ledPini, LOW);
}
