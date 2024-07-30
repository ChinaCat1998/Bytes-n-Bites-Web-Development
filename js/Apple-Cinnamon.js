let currentServings = 1; // Initialize current servings
const maxServings = 10; // Define the maximum number of servings to scale up to

const recipe1 = [
    { name: "Sifted Flour", amount: 1.5, unit: "cups" },
   { name: "Granulated Sugar", amount: 1, unit: "cups" },
   { name: "Baking Powder", amount: 2, unit: "tsp" },
   { name: "Salt", amount: 0.5, unit: "tsp" },
   { name: "Vegetable oil", amount: 0.25, unit: "cups" },
   { name: "Egg (beaten)", amount: 1, unit: "unit" },
   { name: "Milk", amount: 0.5, unit: "cups" },
   { name: "Chopped Apples", amount: 2, unit: "units" },
   { name: "Brown Sugar", amount: 0.5, unit: "cups" },
   { name: "Topping Flour", amount: 2, unit: "tbsp" },
   { name: "Cinnamon", amount: 2, unit: "tbsp" },
   { name: "Butter", amount: 6, unit: "tbsp" },
   { name: "Chopped Walnuts", amount: 1, unit: "cups" },
   { name: "Confectioners' Sugar", amount: 0.33, unit: "cups" },
   { name: "Vanilla", amount: 0.25, unit: "tsp" },
   { name: "Milk (glaze)", amount: 0.5, unit: "tsp" }
];

function scaleRecipe(newServings) {
  // Validate that currentServings is positive
  if (currentServings <= 0 || newServings <= 0) {
    console.error("Current servings must be greater than zero.");
    return;
  }
  // Calculate the scale factor for changing the amount of servings
  let scaleFactor = newServings / currentServings;
  // Scale the ingredients
  return recipe1.map((ingredient) => ({
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
    listItem.textContent = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
    listElement.appendChild(listItem);
  });
}
