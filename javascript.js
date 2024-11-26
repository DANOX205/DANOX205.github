const player = document.querySelector(".player");
const gameWorld = document.querySelector("#gameWorld");

console.log("LE JS est bien ouvert!");

// Player's position
const playerState = {
  x: 260, // Starting X position
  y: 100, // Starting Y position
  speed: 4, // Movement speed
};

// Keys being pressed
const keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true; // Mark key as pressed
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false; // Mark key as released
});

//Move the player

function updatePlayer() {
  // Move up
  if (keys["z"]) {
    playerState.y = Math.max(0, playerState.y - playerState.speed);
  }
  // Move down
  if (keys["s"]) {
    playerState.y = Math.min(gameWorld.offsetHeight - player.offsetHeight, playerState.y + playerState.speed);
  }
  // Move left
  if (keys["q"]) {
    playerState.x = Math.max(0, playerState.x - playerState.speed);
  }
  // Move right
  if (keys["d"]) {
    playerState.x = Math.min(gameWorld.offsetWidth - player.offsetWidth, playerState.x + playerState.speed);
  }

  // Apply new position
  player.style.top = `${playerState.y}px`;
  player.style.left = `${playerState.x}px`;
}

function gameLoop() {
  updatePlayer(); // Update player's position
  requestAnimationFrame(gameLoop); // Repeat the loop
}

// Start the game loop
gameLoop();