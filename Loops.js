// let favDrinks = [
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"
// ];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++) {
//     if(i % 2 == 0){
//         multiplesTwo.push(i);
//     }
    
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);

// For loops

// const sumOfNums = (min,max) => {
//     let sums = 0;
//     for (let index = min; index <= max; index++) {
//         sums += index;
//     }
//     return sums;
// }

// console.log(`Sum of all numbers from 1 to 10 is ${sumOfNums(1,10)}.`)

// While loop

// let age = 15;
// while( age < 18 ){
// console.log("You're a child!");
// age++;
// }
// console.log("You're an adult!");


// // More complex

// let randomNumber = 0;
// while(randomNumber < 10) {
// console.log("Random no. " + randomNumber + "\n Keep looping");
// randomNumber = (Math.round(Math.random() * 20));
// }
// console.log("No more looping, with random no. " + randomNumber);


// More while

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Spade"){
console.log(currentCard);
currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);