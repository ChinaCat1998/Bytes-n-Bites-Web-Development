// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe4 = [
    { name: "Sweet Italian Sausage", amount: 1 / 2, unit: "lbs" },
    { name: "Ground Beef", amount: 1 / 2, unit: "lbs" },
    { name: "Chopped Garlic", amount: 1, unit: "clove" },
    { name: "Chopped Parsley", amount: 1 / 2, unit: "cup" },
    { name: "Egg (beaten)", amount: 1, unit: "unit" },
    { name: "Bread Crumbs", amount: 1, unit: "cup" },
    { name: "Salt", amount: 1 / 2, unit: "tsp" },
    { name: "Pepper", amount: 1 / 4, unit: "tsp" },
    { name: "Milk", amount: 1 / 2, unit: "cup" },
    { name: "Vegetable Oil", amount: 1, unit: "tbsp" }
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
    for (let i = 0; i < recipe4.length; i++) {
        recipe4[i].amount *= scaleFactor;
    }
    // Update the current number of servings
    currentServings = newServings;

    //Display the scaled recipe
    displayRecipe(recipe4);
};

function displayRecipe(recipe4) {
    //Logs the ingredients to the console
    recipe4.forEach(ingredient => {
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