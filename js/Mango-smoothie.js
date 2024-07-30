// Shows the ingredients for the recipe with their amount and unit of measurements.
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

function scaleRecipe(newServings) {
    //Validate that currentServings is positive
    if (currentServings <= 0) {
        console.error("Current servings must be greater than zero.")
        return;
    }
    //Calculate the scale factor for changing the amount of servings
    let scaleFactor = newServings / currentServings;
    //Check if the scale factor is valid
    if (scaleFactor <= 0) {
        console.error("Invalid scale factor. Ensure newServings is a positive number.")
    }
    //Scale each ingredient
    for (let i = 0; i < recipe6.length; i++) {
        recipe6[i].amount *= scaleFactor;
    }
    // Update the current number of servings
    currentServings = newServings;

    //Display the scaled recipe
    displayRecipe(recipe6);
};

function displayRecipe(recipe6) {
    //Logs the ingredients to the console
    recipe6.forEach(ingredient => {
        console.log(`${ingredient.amount.toFixed(1)} ${ingredient.unit} of ${ingredient.name}`);
    });
};

function handleScale() {
    //Get the new servings input value from the HTML input element
    let newServings = parseInt(document.getElementById('servingsInput').value);
    //Validate input
    if (isNaN(newServings) || newServings <= 0) {
        alert("Please enter a valid number of servings.");
        return;
    }
    //Scale the recipe
    scaleRecipe(newServings);
};