document.addEventListener('DOMContentLoaded', () => {
   // Back to Card Button
    document.getElementById('back-button').addEventListener('click', function() {
      window.history.back();
    });
  });


// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe1 = [
    { name: "Sifted flour", amount: 3 / 2, unit: "cups" },
    { name: "Granulated sugar", amount: 1, unit: "cup" },
    { name: "Baking powder", amount: 2, unit: "tsp" },
    { name: "Salt", amount: 1 / 2, unit: "tsp" },
    { name: "Vegetable oil", amount: 1 / 4, unit: "cup" },
    { name: "Egg (beaten)", amount: 1, unit: "unit" },
    { name: "Milk", amount: 1 / 2, unit: "cup" },
    { name: "Chopped apples", amount: 2, unit: "units" },
    { name: "Brown Sugar", amount: 1 / 2, unit: "cup" },
    { name: "Topping flour", amount: 2, unit: "tbsp" },
    { name: "Cinnamon", amount: 2, unit: "tbsp" },
    { name: "Butter", amount: 6, unit: "tbsp" },
    { name: "Chopped Walnuts", amount: 1, unit: "cup" },
    { name: "Powdered sugar", amount: 1 / 3, unit: "cup" },
    { name: "Vanilla", amount: 1 / 4, unit: "tsp" },
    { name: "Milk (glaze)", amount: 1 / 2, unit: "tsp" }
];

let recipe2 = [
    { name: "Flank steak", amount: 2, unit: "units" },
    { name: "Soy sauce", amount: 1 / 4, unit: "cup" },
    { name: "Honey", amount: 3, unit: "tbsp" },
    { name: "Red Wine Vinegar", amount: 2, unit: "tbsp" },
    { name: "Garlic powder", amount: 3 / 2, unit: "tsp" },
    { name: "Ground ginger", amount: 3 / 2, unit: "tsp" },
    { name: "Vegetable oil", amount: 3 / 4, unit: "cup" },
    { name: "Green onion", amount: 1, unit: "units" }
];

let recipe3 = [
    { name: "Sugar", amount: 1, unit: "cup" },
    { name: "Water", amount: 3 / 4, unit: "cup" },
    { name: "Egg Yolks", amount: 12, unit: "units" },
    { name: "Evaporated Milk", amount: 12, unit: "ounces" },
    { name: "Sweetened Condensed Milk", amount: 14, unit: "ounces" },
    { name: "Vanilla", amount: 1, unit: "tbsp" }
];

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

let recipe5 = [
    { name: "Lemon Juice", amount: 2, unit: "tbsp" },
    { name: "Brown Sugar", amount: 1 / 4, unit: "cup" },
    { name: "Salmon Fillets", amount: 4, unit: "units" },
    { name: "Melted Butter", amount: 1, unit: "tbsp" },
    { name: "Lemon", amount: 4, unit: "slices" },
    { name: "Brown Sugar (Top)", amount: 8, unit: "tsp" }
];

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
    // Remove the closing curly brace

//Display the updated recipe
console.log(recipe6);

const recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6];

//-----LOWERCASE FUNCTION FOR SEARCH BAR BELOW--------

const userInputElement = document.querySelector("#UserInput");
const searchButton = document.querySelector("#Recipe");

searchButton.addEventListener("click", function(event) {
    event.preventDefault();

// Retrieve input value AND convert it to lowercase
const userInput = userInputElement.value.trim().toLowerCase();

// Define arrays for each ingredient
const appleCinnamonIngredients = [
    "flour", "granulated sugar", "baking powder", "salt", "vegetable oil", "egg", "milk", "apples", "brown sugar", "cinnamon butter", "walnuts", "powdered sugar", "vanilla", "milk (glaze)"
].map(ingredient => ingredient.toLowerCase());

const flankSteakIngredients = [
    "flank steak", "soy sauce", "honey", "red wine vinegar", "garlic powder", "ground ginger", "vegetable oil", "green onion"
].map(ingredient => ingredient.toLowerCase());

const lecheFlanIngredients = [
    "sugar", "water", "egg yolks", "evaporated milk", "sweetened condensed milk", "vanilla"
].map(ingredient => ingredient.toLowerCase());

const italianMeatballsIngredients = [
    "sweet italian sausage", "ground beef", "chopped garlic", "chopped parsley", "egg", "bread crumbs", "salt", "pepper", "milk", "vegetable oil"
].map(ingredient => ingredient.toLowerCase());

const salmonFilletsIngredients = [
    "lemon juice", "brown sugar", "salmon fillets", "melted butter", "lemon", "brown sugar (top)"
].map(ingredient => ingredient.toLowerCase());

const mangoSmoothieIngredients = [
    "banana", "mango", "milk", "vanilla yogurt", "vanilla", "pineapple juice", "honey"
].map(ingredient => ingredient.toLowerCase());

// Check if userInput is in any of the ingredient lists
if (appleCinnamonIngredients.includes(userInput)) {
    console.log("Apple-Cinnamon");
    return window.location.href = "apple-cinnamon.html";
} else if (flankSteakIngredients.includes(userInput)) {
    console.log("flank-steak");
    return window.location.href = "flank-steak.html";
} else if (lecheFlanIngredients.includes(userInput)) {
    console.log("leche-flan");
    return window.location.href = "leche-flan.html";
} else if (italianMeatballsIngredients.includes(userInput)) {
    console.log("italian-meatballs");
    return window.location.href = "italian-meatballs.html";
} else if (salmonFilletsIngredients.includes(userInput)) {
    console.log("salmon-fillets");
    return window.location.href = "salmon-fillets.html";
} else if (mangoSmoothieIngredients.includes(userInput)) {
    console.log("mango-smoothie");
    return window.location.href = "mango-smoothie.html";
} else if (userInput === "") {
    console.log("No recipe found");
    alert("No recipe found");
    localStorage.setItem("user", JSON.stringify(userInput));
    return window.location.href = "recipes.html";
})
