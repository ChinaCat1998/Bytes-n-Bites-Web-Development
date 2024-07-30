let currentServings = 1; // Initialize current servings
const maxServings = 10; // Define the maximum number of servings to scale up to
// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe6 = [
  { name: "Banana", amount: 1, unit: "unit" },
  { name: "Mango", amount: 1, unit: "unit" },
  { name: "Milk", amount: 1, unit: "cup" },
  { name: "Vanilla Yogurt", amount: 1, unit: "cup" },
  { name: "Vanilla", amount: 4, unit: "drops" },
  { name: "Pineapple Juice", amount: 1 / 2, unit: "cup" },
  { name: "Honey", amount: null, unit: null },
];

//Update recipe #6
recipe6.forEach((ingredient) => {
  if (ingredient.name === "Honey") {
    ingredient.amount = ", to taste";
  }
});

//Display the updated recipe
console.log(recipe6);

function scaleRecipe(newServings) {
  // Validate that currentServings is positive
  if (currentServings <= 0 || newServings <= 0) {
    console.error("Current servings must be greater than zero.");
    return;
  }
  // Calculate the scale factor for changing the amount of servings
  let scaleFactor = newServings / currentServings;
  // Scale the ingredients
  return recipe6.map((ingredient) => ({
    ...ingredient,
    amount: ingredient.amount * scaleFactor,
  }));
}

function handleScale() {
  // Get the new servings input value from the HTML input element
  let newServings = parseInt(document.getElementById("servingsInput").value);
  // Validate input
  if (isNaN(newServings) || newServings <= 0) {
    alert("Please enter a valid number of servings.");
    return;
  }
  // Scale the recipe
  let scaledRecipe = scaleRecipe(newServings);
  displayRecipe(scaledRecipe);
  // Update currentServings to the new value
  currentServings = newServings;
}

function displayRecipe(recipe) {
  // Get the list element
  const listElement = document.getElementById("ingredients-list");
  // Clear the current list
  listElement.innerHTML = "";
  // Populate the list with the scaled recipe
  recipe.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${ingredient.amount} ${ingredient.units} ${ingredient.name}`;
    listElement.appendChild(listItem);
  });
}
