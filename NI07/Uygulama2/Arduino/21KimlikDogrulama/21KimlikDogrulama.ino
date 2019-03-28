/*
 * 
 * All the resources for this project: https://randomnerdtutorials.com/
 * Modified by Rui Santos
 * 
 * Created by FILIPEFLOP
 * 
 */
 
#include <SPI.h>
#include <MFRC522.h>
 
#define SS_PIN 10
#define RST_PIN 9
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
 
void setup() 
{
  Serial.begin(115200);   // Initiate a serial communication
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  //Serial.println("Kartınızı okuyucuya yaklaştırınız...");
  //Serial.println();

}
void loop() 
{
  // Look for new cards.  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.

  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Serial.println(mfrc522.uid.size); //4 tag id: 4 byte
  //Show UID on serial monitor
  //Serial.print("UID tag :"); //Unique Identification
  String content= "";
  byte letter;
  
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     //Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     //Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  //Serial.println();
  //Serial.print("Message : ");
  content.toUpperCase();
  /*if (content.substring(1) == "32 2C DE A2") //change here the UID of the card/cards that you want to give access
  { // if ((content.substring(1) == "32 2C DE A2") || ((content.substring(1) == "32 2C DE A2")...)
    // EEPROM.write(); EEPROM.read()... ile kalıcı olarak saklanabilir
    Serial.println("Authorized access");
    Serial.println();
    delay(3000);
  }*/

  Serial.println(content);
 
  delay(3000);
 
} 
