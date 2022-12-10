/**
 * Write a function printTime
 * 0 hour - midnight
 * 12 hour - noon
 * 53 - 59 minute - o'clock
 * 0 - 7 minute - o'clock
 * 8-23 minute - quarter past
 * 24-37 minute - half past
 * 38-52 minute - quarter to
 * @param{number} hour - 0-24 format, hour of a day
 * @param{number} minute - 0-59 format, minute of a day
 * @returns{string} returns a string representation of a time
 */

 const HOURS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

 const inRange = (x, min, max) => x >= min && x <= max;
 
 const findQualifier = (minute) => {
   if (inRange(minute, 53, 59)) return 'o\'clock';
   if (inRange(minute, 0, 7)) return 'o\'clock';
   if (inRange(minute, 8, 23)) return 'quarter past';
   if (inRange(minute, 24, 37)) return 'half past';
   if (inRange(minute, 38, 52)) return 'quarter to';
 }
 
 const findEndonym = (hour, minute, qualifier) => {
 
   qualifier === 'quarter to' || inRange(minute, 53, 59) ? hour += 1 : hour;
  
   let index = hour > 12 ? hour - 12 : hour;
 
   if (hour === 24) index = 0;
 
   return HOURS[index];
 }
 
 
 function printTime(hour, minute) {
 
   const qualifier = findQualifier(minute);
   const endonym = findEndonym(hour, minute, qualifier);
 
   let result;
 
   if (qualifier === 'o\'clock') {
     if (endonym === 'zero') result = 'midnight';
     else if (endonym === 'twelve') result = 'noon';
     else result = `${endonym} ${qualifier}`;
   } else {
     result = `${qualifier} ${endonym}`;
   }
 
   return result;
 }
 
 
 // Tests:
 console.assert(printTime(9, 0) === 'nine o\'clock', '1');
 console.assert(printTime(9, 15) === 'quarter past nine', '2');
 console.assert(printTime(9, 30) === 'half past nine', '3');
 console.assert(printTime(9, 45) === 'quarter to ten', '4');
 console.assert(printTime(21, 45) === 'quarter to ten', '5');
 console.assert(printTime(0, 7) === 'midnight', '6');
 console.assert(printTime(11, 53) === 'noon', '7');
 console.assert(printTime(12, 8) === 'quarter past twelve', '8');
 console.assert(printTime(12, 0) === 'noon', '9');
 console.assert(printTime(23, 59) === 'midnight', 10);
 console.assert(printTime(23, 0) === 'eleven o\'clock', 11);
 console.assert(printTime(11, 0) === 'eleven o\'clock', 12);
 