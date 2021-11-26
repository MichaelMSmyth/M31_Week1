let Toppings = ["Olives","Onion","Chicken", "Salad"];

for (let i = 0; i < Toppings.length; i++){
    var onTop = Toppings[i];
    switch (onTop) {
    case "Olives":
    case "Onion" :
    case "Chicken" :
        console.log(`I love ${Toppings[i]}!`)
        break;
    default:
        console.log(`Ewww, nasty ${Toppings[i]}`)
        break;
    }
}