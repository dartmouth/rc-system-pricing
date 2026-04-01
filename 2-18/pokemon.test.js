// pokemon.test.js

const {
  getPokemonType,
  greetPokemon,
  getBaseStats,
  isStrongPokemon,
  shoutPokemonName,
  getNameLength,
} = require("./functions-to-test");

// --- getPokemonType ---
describe("getPokemonType", () => {
  test("returns the correct type for pikachu", () => {
    expect(getPokemonType("pikachu")).toBe("electric");
  });
  test("returns the correct type for charmander", () => {
    expect(getPokemonType("charmander")).toBe("fire");
  });
  // ❌ FAIL: mewtwo is not in the list, so it returns "unknown" not "psychic"
  test("returns 'psychic' for mewtwo", () => {
    expect(getPokemonType("mewtwo")).toBe("psychic");
  });
});

// --- greetPokemon ---
describe("greetPokemon", () => {
  test("returns a greeting string for pikachu", () => {
    expect(greetPokemon("pikachu")).toBe("Hello, pikachu!");
  });
  // ❌ FAIL: the function returns "Hello, squirtle!" not "Hey, squirtle!"
  test("returns a greeting string for squirtle", () => {
    expect(greetPokemon("squirtle")).toBe("Hey, squirtle!");
  });
});

// --- getBaseStats ---
describe("getBaseStats", () => {
  test("returns the correct base stats for gengar", () => {
    expect(getBaseStats("gengar")).toBe(500);
  });
  test("returns the correct base stats for meowth", () => {
    expect(getBaseStats("meowth")).toBe(290);
  });
  // ❌ FAIL: unknown pokemon returns 0, not 999
  test("returns 999 for a pokemon not in the list", () => {
    expect(getBaseStats("mew")).toBe(999);
  });
});

// --- isStrongPokemon ---
describe("isStrongPokemon", () => {
  test("returns true for gengar (stats over 400)", () => {
    expect(isStrongPokemon("gengar")).toBe(true);
  });
  // ❌ FAIL: meowth has 290 base stats, so it is NOT strong — returns false not true
  test("returns true for meowth", () => {
    expect(isStrongPokemon("meowth")).toBe(true);
  });
  test("returns false for an unknown pokemon (0 stats)", () => {
    expect(isStrongPokemon("magikarp")).toBe(false);
  });
});

// --- shoutPokemonName ---
describe("shoutPokemonName", () => {
  test("returns pikachu in uppercase", () => {
    expect(shoutPokemonName("pikachu")).toBe("PIKACHU");
  });
  // ❌ FAIL: toUpperCase() returns "BULBASAUR" not "bulbasaur"
  test("returns bulbasaur in lowercase", () => {
    expect(shoutPokemonName("bulbasaur")).toBe("bulbasaur");
  });
});

// --- getNameLength ---
describe("getNameLength", () => {
  test("returns 7 for pikachu", () => {
    expect(getNameLength("pikachu")).toBe(7);
  });
  test("returns 10 for charmander", () => {
    expect(getNameLength("charmander")).toBe(10);
  });
  // ❌ FAIL: "gengar" has 6 characters, not 5
  test("returns 5 for gengar", () => {
    expect(getNameLength("gengar")).toBe(5);
  });
});
