const coffeeShop = {
    branch: "Liverpool",

    drinksWithPrices: {
        tea: 50,
        coffee: 50,
        water: 0,
    },

    foodWithPrices: {
        cake: 100,
        toast: 75,
    },

    drinksOrdered (drink) {
        console.log(coffeeShop.drinksWithPrices[drink]);
    },

    foodOrdered () {
        return "Food order"
    }

}

coffeeShop.drinksOrdered("tea");