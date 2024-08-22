const isWeekend = date =>
[0,6].indexOf(date.getDay()) !== -1

const date1 = new Date('2027-07-10');  // Суббота
const date2 = new Date('2027-07-12');  // Понедельник
const date3 = new Date('2027-07-11');  // Понедельник

console.log(isWeekend(date1));  // true
console.log(isWeekend(date2));  // false
console.log(isWeekend(date3));  // false