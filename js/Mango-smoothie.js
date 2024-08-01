let currentServings = 1; // Initialize current servings
const maxServings = 10; // Define the maximum number of servings to scale up to
// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe6 = [
  { name: "Banana", amount: 1, unit: "unit" },
  { name: "Mango", amount: 1, unit: "unit" },
  { name: "Milk", amount: 1, unit: "cup" },
  { name: "Vanilla Yogurt", amount: 1, unit: "cup" },
  { name: "Vanilla", amount: 4, unit: "drops" },
  { name: "Pineapple Juice", amount: 0.5, unit: "cup" },
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
  // Validate that newServings is positive
  if (currentServings <= 0 || newServings <= 0) {
    console.error("Current servings and new servings must be greater than zero.");
    return;
  }
  // Calculate the scale factor for changing the amount of servings
  let scaleFactor = newServings / currentServings;
  // Scale the ingredients
  return recipe5.map((ingredient) => ({
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
  if (scaledRecipe) { // Only display recipe if scaling was successful
    displayRecipe(scaledRecipe);
    // Update currentServings to the new value
    currentServings = newServings;
  }
}

function decimalToFraction(decimal) {
  const tolerance = 1e-6;
  let numerator = 1;
  let denominator = 1;

  while (Math.abs(decimal - numerator / denominator) > tolerance) {
    if (numerator / denominator < decimal) {
      numerator++;
    } else {
      denominator++;
      numerator = Math.round(decimal * denominator);
    }
  }

  // Simplify the fraction
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };
  const divisor = gcd(numerator, denominator);

  return `${numerator / divisor}/${denominator / divisor}`;
}

function displayRecipe(recipe) {
  // Get the list element
  const listElement = document.getElementById("ingredients-list");
  // Clear the current list
  listElement.innerHTML = "";
  // Populate the list with the scaled recipe
  recipe.forEach((ingredient) => {
    const listItem = document.createElement("li");
    // Format amount as fraction if it's a decimal, otherwise as a whole number
    const formattedAmount = Number.isInteger(ingredient.amount)
      ? ingredient.amount
      : decimalToFraction(ingredient.amount);
    listItem.textContent = `${formattedAmount} ${ingredient.unit} ${ingredient.name}`;
    listElement.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Back to Card Button
  document.getElementById('back-button').addEventListener('click', function () {
    window.history.back();
  });
});
 