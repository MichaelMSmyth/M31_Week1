let num = 301

if(num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}

let num2 = 65

switch (0) {
    case num2 % 3 :
    case num2 % 5 :
        console.log("This number is divisible by 3 or 5");
        break;

    default:
        console.log("This number is not divisible by 3 or 5");
        break;
}