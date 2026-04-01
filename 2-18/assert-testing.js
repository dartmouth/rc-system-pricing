function getPokemonType(name) {
  const types = {
    pikachu: "electric",
    charmander: "fire",
    squirtle: "water",
  };
  return types[name] || "unknown";
}

console.assert(
  getPokemonType("pikachu") === "electric",
  "Pikachu should be electric type"
);
console.assert(
  getPokemonType("charmander") === "fire",
  "Charmander should be fire type"
);
console.assert(
  getPokemonType("squirtle") === "water",
  "Squirtle should be water type"
);
console.assert(
  getPokemonType("pikachu") === "fire", // wrong — pikachu is electric
  "Pikachu should be fire type"
);
console.assert(
  getPokemonType("mewtwo") === "unknown",
  "Unknown pokemon should return 'unknown'"
);
