/*  
 *  ------ [PWR_3] Setting Hibernate Mode -------- 
 *  
 *  Explanation: This example shows how to set Waspmote in the lowest 
 *  power consumption mode, disconnecting all the board but RTC, which
 *  powers from auxiliary battery.
 *  
 *  Copyright (C) 2016 Libelium Comunicaciones Distribuidas S.L. 
 *  http://www.libelium.com 
 *  
 *  This program is free software: you can redistribute it and/or modify 
 *  it under the terms of the GNU General Public License as published by 
 *  the Free Software Foundation, either version 3 of the License, or 
 *  (at your option) any later version. 
 *  
 *  This program is distributed in the hope that it will be useful, 
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of 
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
 *  GNU General Public License for more details. 
 *  
 *  You should have received a copy of the GNU General Public License 
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>. 
 *  
 *  Version:           3.0
 *  Design:            David Gascón 
 *  Implementation:    Marcos Yarza
 */

// Hibernate anahtarı açık olmalı (Bu durumda waspmpte programlanamıyor...)
// Güç anahtarının altında bulunuyor


void setup()
{  
  
  USB.ON();
  USB.println(F("PWR_3 example"));


}

void loop()
{

  // If Hibernate has been captured, execute the associated function
  if( intFlag & HIB_INT )
  {
    USB.println(F("---------------------"));
    USB.println(F("Hibernate Interruption captured"));
    USB.println(F("---------------------"));
    // clear interruption flag
    intFlag &= ~(HIB_INT);
    delay(500);
  }

  /*
   * Do whatever your code needs
   *
   */
  ACC.ON();
  USB.print(ACC.getX(), DEC);
  USB.print(F("\t")); 
  USB.print(ACC.getY(), DEC);
  USB.print(F("\t")); 
  USB.println(ACC.getZ(), DEC);
   

  USB.println(F("entering hibernate mode"));

  // Set Waspmote to Hibernate, waking up after 20 seconds
  PWR.hibernate("00:00:00:20",RTC_OFFSET,RTC_ALM1_MODE2);

  // PWR.deepSleep(“15:17:00:00”, RTC_ABSOLUTE, RTC_ALM1_MODE2, ALL_OFF);
  // PWR.sleep(WTD_32MS, ALL_OFF);
  // PWR.sleep(SOCKET0_ON);

}

