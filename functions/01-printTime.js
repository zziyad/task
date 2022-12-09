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
 function printTime(hour, minute) {
  const qualifier = printMinute(minute);
  const endonym = qualifier === 'quarter to' 
    || minute >= 53 && minute <= 59 ? 
    printHour(hour + 1) : printHour(hour);
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


const printHour = (hour) => {
  let index = hour > 12 ? hour - 12 : hour;
  if (hour === 24) index = 0;

  const hours = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

  return hours[index];
}

// printMinute - prin minutes return a string in english minut representations
const printMinute = (minute) => {
  if (minute >= 53 && minute <= 59) return 'o\'clock'
  if (minute >= 0 && minute <= 7) return 'o\'clock'
  if (minute >= 8 && minute <= 23) return 'quarter past'
  if (minute >= 24 && minute <= 37) return 'half past'
  if (minute >= 38 && minute <= 52) return 'quarter to'
}

// console.log(printTime(9, 0));

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

console.log(printTime(23, 59));