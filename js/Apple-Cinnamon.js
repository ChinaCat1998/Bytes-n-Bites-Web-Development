// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe1 = [
    { name: "Sifted Flour", amount: 3 / 2, unit: "cups" },
    { name: "Granulated Sugar", amount: 1, unit: "cup" },
    { name: "Baking Powder", amount: 2, unit: "tsp" },
    { name: "Salt", amount: 1 / 2, unit: "tsp" },
    { name: "Vegetable oil", amount: 1 / 4, unit: "cup" },
    { name: "Egg (beaten)", amount: 1, unit: "unit" },
    { name: "Milk", amount: 1 / 2, unit: "cup" },
    { name: "Chopped Apples", amount: 2, unit: "units" },
    { name: "Brown Sugar", amount: 1 / 2, unit: "cup" },
    { name: "Topping Flour", amount: 2, unit: "tbsp" },
    { name: "Cinnamon", amount: 2, unit: "tbsp" },
    { name: "Butter", amount: 6, unit: "tbsp" },
    { name: "Chopped Walnuts", amount: 1, unit: "cup" },
    { name: "Confectioners' Sugar", amount: 1 / 3, unit: "cup" },
    { name: "Vanilla", amount: 1 / 4, unit: "tsp" },
    { name: "Milk (glaze)", amount: 1 / 2, unit: "tsp" }
];

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
    for (let i = 0; i < recipe1.length; i++) {
        recipe1[i].amount *= scaleFactor;
    }

    //Display the scaled recipe
    displayRecipe(recipe1);
};

function displayRecipe(recipe1) {
    //Logs the ingredients to the console
    recipe1.forEach(ingredient => {
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