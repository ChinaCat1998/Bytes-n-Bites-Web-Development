let recipe6 = [
    { name: "Banana", amount: 1, unit: "unit" },
    { name: "Mango", amount: 1, unit: "unit" },
    { name: "Milk", amount: 1, unit: "cup" },
    { name: "Vanilla Yogurt", amount: 1, unit: "cup" },
    { name: "Vanilla", amount: 4, unit: "drops" },
    { name: "Pineapple Juice", amount: 1 / 2, unit: "cup" },
    { name: "Honey", amount: null, unit: null }
];

//Update recipe #6
recipe6.forEach(ingredient => {
    if (ingredient.name === "Honey") {
        ingredient.amount = ", to taste";
    }
});

//Display the updated recipe
console.log(recipe6);

let currentServings = 1; //Initialize current servings

