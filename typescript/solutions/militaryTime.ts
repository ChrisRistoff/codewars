export function to24hourtime(hour: number, minute: number, period: string): string {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"

  const isPm = period === 'pm';

  if (isPm && hour !== 12) {
    hour += 12;
  }

  if (!isPm && hour === 12) {
    hour = 0;
  }

  let hourStr = hour.toString()
  let minuteStr = minute.toString()

  if (hourStr.length === 1) {
    hourStr = '0' + hour
  }

  if (minuteStr.length === 1) {
    minuteStr = '0' + minute
  }

  return `${hourStr}:${minuteStr}`;
  
}

console.log(to24hourtime(12, 26, 'am'));
console.log(to24hourtime(12, 59, 'pm'));
console.log(to24hourtime(1, 22, 'am'));
console.log(to24hourtime(7, 34, 'pm'));
console.log(to24hourtime(11, 1, 'am'));
console.log(to24hourtime(1, 1, 'pm'));
