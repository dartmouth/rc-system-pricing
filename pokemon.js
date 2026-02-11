// ============================================
// LESSON 1: VARIABLES
// ============================================
// Variables store information that we can use later

// Let's store some Pokemon information
let trainerName = "Ash";
let pokemonCount = 150;
let isGymLeader = false;
let favoriteType = "Electric";

console.log(pokemonCount);

// We can change variables with 'let'
pokemonCount = 151; // Mew was discovered!

console.log(pokemonCount);

// 'const' means the value can't be changed
const ORIGINAL_POKEMON_COUNT = 151;

// ============================================
// LESSON 2: FUNCTIONS
// ============================================
// Functions are reusable blocks of code

// Simple function with no parameters
function sayHello() {
  alert("Hello, Pokemon trainer!");
}

document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("hello-btn");
  button.addEventListener("click", sayHello);
});

// Function with parameters
function greetTrainer(name) {
  console.log("Welcome, " + name + "!");
}

// Function that returns a value
function calculatePokemonPower(level, attack) {
  let power = level * attack;
  return power;
}

// ============================================
// LESSON 3: IF/ELSE STATEMENTS
// ============================================
// Make decisions based on conditions

function checkPokemonLevel(level) {
  if (level < 10) {
    console.log("Your Pokemon is still young!");
  } else if (level < 50) {
    console.log("Your Pokemon is getting stronger!");
  } else {
    console.log("Your Pokemon is very powerful!");
  }
}

// Function to validate legendary choice
function validateLegendaryChoice(choice) {
  if (choice === "Zapdos") {
    return "Electric type - Great choice!";
  } else if (choice === "Articuno") {
    return "Ice type - Very cool!";
  } else if (choice === "Moltres") {
    return "Fire type - Hot pick!";
  } else {
    return "Please choose a valid legendary bird!";
  }
}

// ============================================
// LESSON 4: FOR LOOPS
// ============================================
// Repeat code multiple times

// Simple for loop - counts from 0 to 4
function countToFive() {
  for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
  }
}

// Loop through an array of Pokemon
function displayPokemonTeam() {
  let team = ["Pikachu", "Charizard", "Blastoise", "Venusaur", "Gengar"];

  for (let i = 0; i < team.length; i++) {
    console.log(i + 1 + ". " + team[i]);
  }
}

// Loop to find a specific Pokemon
function findPokemon(pokemonList, searchName) {
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i] === searchName) {
      return "Found " + searchName + " at position " + (i + 1) + "!";
    }
  }
  return searchName + " not found in your team.";
}

// ============================================
// LESSON 5: WORKING WITH THE DOM
// ============================================
// DOM = Document Object Model (the HTML page)

// Function to change text on the page
function updateHeader() {
  let header = document.getElementById("sub-header");
  if (header) {
    header.textContent = "JavaScript is working!";
  }
}

// Function to get form input value
function getGenerationInput() {
  let input = document.querySelector('input[type="text"]');
  if (input) {
    return input.value;
  }
  return "";
}

// Function to get selected radio button
function getSelectedLegendary() {
  let radios = document.querySelectorAll('input[type="radio"]');

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // Get the label next to the radio button
      let label = radios[i].nextElementSibling;
      return label.textContent;
    }
  }

  return null; // No selection
}

// ============================================
// LESSON 6: PUTTING IT ALL TOGETHER
// ============================================
// Main form submission function

function handleFormSubmit() {
  console.log("Form submitted!");

  // Get the generation input
  let generation = getGenerationInput();

  // Get the selected legendary
  let legendary = getSelectedLegendary();

  // Validate inputs
  if (generation === "") {
    alert("Please enter your favorite generation!");
    return;
  }

  if (legendary === null) {
    alert("Please select a legendary Pokemon!");
    return;
  }

  // Process the data
  let message =
    "You chose Generation " +
    generation +
    " and " +
    legendary +
    " as your favorite legendary!";

  // Validate the legendary choice
  let validation = validateLegendaryChoice(legendary);

  // Display results
  alert(message + "\n\n" + validation);

  // Log to console
  console.log("Generation: " + generation);
  console.log("Legendary: " + legendary);
  console.log("Validation: " + validation);
}

// ============================================
// LESSON 7: EVENT LISTENERS
// ============================================
// Wait for the page to load, then add button functionality

// This runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded! JavaScript is ready.");

  // Find the submit button
  let submitButton = document.querySelector("button");

  // Add click event to the button
  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Stop the form from actually submitting
      handleFormSubmit();
    });
  }

  // Test some functions (visible in console)
  sayHello();
  greetTrainer(trainerName);
  console.log("Pokemon Power:", calculatePokemonPower(50, 80));
  checkPokemonLevel(75);
  displayPokemonTeam();
});

// ============================================
// BONUS: ARRAY METHODS
// ============================================
// Modern ways to work with arrays

function demonstrateArrayMethods() {
  let pokemonTypes = ["Fire", "Water", "Grass", "Electric", "Psychic"];

  // forEach - do something for each item
  console.log("All Pokemon types:");
  pokemonTypes.forEach(function (type) {
    console.log("- " + type);
  });

  // filter - get items that match a condition
  let longNames = pokemonTypes.filter(function (type) {
    return type.length > 5;
  });
  console.log("Types with more than 5 letters:", longNames);

  // map - transform each item
  let lowercase = pokemonTypes.map(function (type) {
    return type.toLowerCase();
  });
  console.log("Lowercase types:", lowercase);
}
