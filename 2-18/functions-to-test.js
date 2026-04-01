// pokemon.js

// 1. Returns the type of a pokemon (string)
function getPokemonType(name) {
  const types = {
    pikachu: "electric",
    charmander: "fire",
    squirtle: "water",
    bulbasaur: "grass",
    gengar: "ghost",
    meowth: "normal",
  };
  return types[name] || "unknown";
}

// 2. Returns a greeting string for a pokemon
function greetPokemon(name) {
  return `Hello, ${name}!`;
}

// 3. Returns the total base stats for a pokemon (integer)
function getBaseStats(name) {
  const stats = {
    pikachu: 320,
    charmander: 309,
    squirtle: 314,
    bulbasaur: 318,
    gengar: 500,
    meowth: 290,
  };
  return stats[name] || 0;
}

// 4. Returns true if a pokemon's base stats are over 400 (boolean from integer)
function isStrongPokemon(name) {
  return getBaseStats(name) > 400;
}

// 5. Returns a pokemon's name in uppercase (string)
function shoutPokemonName(name) {
  return name.toUpperCase();
}

// 6. Returns the number of characters in a pokemon's name (integer)
function getNameLength(name) {
  return name.length;
}

module.exports = {
  getPokemonType,
  greetPokemon,
  getBaseStats,
  isStrongPokemon,
  shoutPokemonName,
  getNameLength,
};
