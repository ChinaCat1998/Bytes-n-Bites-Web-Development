// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe5 = [
    { name: "Lemon Juice", amount: 2, unit: "tbsp" },
    { name: "Brown Sugar", amount: 1 / 4, unit: "cup" },
    { name: "Salmon Fillets", amount: 4, unit: "units" },
    { name: "Melted Butter", amount: 1, unit: "tbsp" },
    { name: "Lemon", amount: 4, unit: "slices" },
    { name: "Brown Sugar (Top)", amount: 8, unit: "tsp" }
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
    for (let i = 0; i < recipe5.length; i++) {
        recipe5[i].amount *= scaleFactor;
    }

    //Display the scaled recipe
    displayRecipe(recipe5);
};

function displayRecipe(recipe5) {
    //Logs the ingredients to the console
    recipe5.forEach(ingredient => {
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