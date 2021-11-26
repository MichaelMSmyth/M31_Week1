// Zeller's Algorithm

let birthDay = 23;
let birthMonth = 7;
let birthYear = 1984;

let monthCalc = birthMonth;
let yearCalc = birthYear;

if (birthMonth < 3) {
    monthCalc = birthMonth + 12
    yearCalc = birthYear - 1
}

let foo = Math.floor(yearCalc * 100);
let loo = yearCalc - 100 * foo;
let soo = Math.floor((2.6 * monthCalc) - 5.39) + Math.floor(loo / 4) + Math.floor(foo / 4) + birthDay + loo - (2 * foo);
let xoo = soo - (7 * Math.floor(soo / 7));

const daysOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

console.log(`You were born on a ${daysOfTheWeek[xoo]}`);