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

let currentServings = 1; // Initialize current servings
const maxServings = 10; // Define the maximum number of servings to scale up to

function scaleRecipe(newServings) {
    // Validate that currentServings is positive
    if (currentServings <= 0 || newServings <= 0) {
        console.error("Current servings must be greater than zero.");
        return;
    }
    // Calculate the scale factor for changing the amount of servings
    let scaleFactor = newServings / currentServings;
    // Scale the ingredients
    return recipe1.map(ingredient => ({
        ...ingredient,
        amount: ingredient.amount * scaleFactor
    }));

};

for (let i = 1; i <= maxServings; i++) {
    let scaledRecipe = scaleRecipe(i);
    console.log(`Scaled recipe for ${i} servings:`, scaledRecipe);
    // Update currentServings to the new value if needed
    currentServings = i;
}

function displayRecipe(recipe) {
    // Get the list element
    const listElement = document.getElementById('ingredients-list');

    // Clear the current list
    listElement.innerHTML = '';

    // Append each ingredient to the list
    recipe.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = `${ingredient.amount.toFixed(2)} ${ingredient.unit} of ${ingredient.name}`;
        listElement.appendChild(listItem);
    });
}

function handleScale() {
    // Get the new servings input value
    const newServings = parseInt(document.getElementById('servingsInput').nodeValue, 10);

    // Validate input
    if (isNaN(newServings) || newServings <= 0) {
        alert("Please enter a valid number of servings.");
        return;
    }

    // Scale the recipe and display it
    const scaledRecipe = scaleRecipe(newServings);
    displayRecipe(scaledRecipe);

    // Update current servings
    currentServings = newServings;
}