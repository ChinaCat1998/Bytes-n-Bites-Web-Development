// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe2 = [
    { name: "Flank Steak", amount: 2, unit: units },
    { name: "Soy Sauce", amount: 1 / 4, unit: cup },
    { name: "Honey", amount: 3, unit: "tbsp" },
    { name: "Red Wine Vinegar", amount: 2, unit: tbsp },
    { name: "Garlic Powder", amount: 3 / 2, unit: tsp },
    { name: "Ground Ginger", amount: 3 / 2, unit: tsp },
    { name: "Vegetable Oil", amount: 3 / 4, unit: cup },
    { name: "Green Onion", amount: 1, unit: unit }
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
    for (let i = 0; i < recipe2.length; i++) {
        recipe2[i].amount *= scaleFactor;
    }

    //Display the scaled recipe
    displayRecipe(recipe2);
};

function displayRecipe(recipe2) {
    //Logs the ingredients to the console
    recipe2.forEach(ingredient => {
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