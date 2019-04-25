#define LED D6

void setup() {
  //pinMode(LED, FUNCTION_3);
  Serial.begin(115200);
}
 
void loop() {
  Serial.println(F("LED yanıyor"));

  digitalWrite(LED, HIGH);
  delay(1000);
  Serial.println(F("LED sonuyor"));
  digitalWrite(LED, LOW);
  delay(1000);
}
