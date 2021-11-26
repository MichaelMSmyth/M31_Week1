// Object holding drinks data

const drinks = {
    tea: {remaining: 10, price: 100},
    coffee: {remaining: 7, price: 150},
    water: {remaining: 100, price: 0},
}

const remainingBalance = 1000

// Functions to check types of drinks available 

function drinkCheck(selection){
    if(drinks[selection]){
        return true
    }
}

// function to check cost of drinks

function drinkCostCheck(selection){
    if(drinks[selection].price){
        return drinks.selection.price
    }
}

// Function to check remaining balance

function buyDrink(selection){
    if(drinkCheck(selection) && (drinkCostCheck(selection) <                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         = remainingBalance)){
        remainingBalance += drinkCostCheck(selection)
        console.log(`You have purchased ${drinkCheck(selection)} for ${drinkCostCheck(selection)}. You've got a good taste!`);
    }
}

buyDrink("coffee");
