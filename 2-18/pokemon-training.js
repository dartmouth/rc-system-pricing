function startTraining() {
  // Get both levels from the inputs
  let startingLevel = parseInt(document.getElementById("starting-level").value);
  let targetLevel = parseInt(document.getElementById("target-level").value);

  // Call the main training function
  trainPokemon(startingLevel, targetLevel);
}

function trainPokemon(startingLevel, targetLevel) {
  let currentLevel = startingLevel;
  let battlesWon = 0;
  let output = "";

  // OPTIONAL VALIDATION (add if you have time)
  // if (startingLevel >= targetLevel) {
  //     document.getElementById('output').textContent = "Error: Starting level must be less than target level!";
  //     return;
  // }

  output += `Starting training! Pokemon is level ${currentLevel}\n\n`;

  // THE WHILE LOOP - Keep battling until we reach target level
  while (currentLevel < targetLevel) {
    // Each battle gives 1-3 levels randomly
    let levelsGained = Math.floor(Math.random() * 3) + 1;
    currentLevel += levelsGained;
    battlesWon++;

    output += `Battle ${battlesWon}: Gained ${levelsGained} levels! Now level ${currentLevel}\n`;
  }

  output += `\nTraining complete! Pokemon reached level ${currentLevel} after ${battlesWon} battles!`;

  // Show results on the page
  document.getElementById("output").textContent = output;
}
