/* ============================================
	TYPING GAME

	A typing game where players type words that
	appear on the screen. The game includes a 
	score system, a timer, and different 
	difficulty levels.
=============================================== */

// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
	"dependent",
	"dog",
	"superficial",
	"admit",
	"juice",
	"javascript",
	"developer",
	"airplane",
	"great",
	"fun",
	"manipulate",
	"cat",
	"transition",
	"school",
	"computer",
	"programming",
	"drag",
	"loving",
	"north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// Store selected difficulty level
let selectedDifficulty = difficultySelect.value;

/* ------------------------------------
	FUNCTION: Display start interface

	- Display start screen for game,
      including title and start button
	- Disable input field before game 
	  starts
--------------------------------------- */

function displayStartInterface() {
	endgameEl.classList.add("visible");
	endgameEl.innerHTML = `<h2>TYPING GAME</h2>
  <button onclick="startGame()" class="game-button">Start Game</button>`;
	text.disabled = true;
}

/* ------------------------------------
	FUNCTION: Start game

	- Start new game session
	- Hide start screen
	- Enable input field and set focus
	- Load first random word into DOM
	- Start countdown timer
--------------------------------------- */

function startGame() {
	endgameEl.classList.remove("visible");
	endgameEl.innerHTML = "";
	text.focus();
	text.disabled = false;

	addWordToDOM();
	updateTime();
}

/* ------------------------------------
  	FUNCTION: Add word to DOM

	- Select a random word from the 
	  words array
	- Display the selected word in the 
	  DOM
--------------------------------------- */

function addWordToDOM() {
	randomWord = words[Math.floor(Math.random() * words.length)];
	word.textContent = randomWord;
}

/* ------------------------------------
	FUNCTION: Update score

	- Increment the score by 1
	- Update the score element in the 
	  DOM
--------------------------------------- */

function updateScore() {
	score += 1;
	scoreEl.textContent = score;
}

/* ------------------------------------
  	FUNCTION: Update time

	- Start a timer that decrements the 
	  time by 1 every second
	- Update the time element in the DOM
	- If time reaches 0, stop the timer 
	  and end the game
--------------------------------------- */

function updateTime() {
	const intervalId = setInterval(() => {
		time -= 1;
		timeEl.textContent = `${time}s`;

		if (time <= 0) {
			clearInterval(intervalId);
			gameOver();
		}
	}, 1000);
}

/* ------------------------------------
  	FUNCTION: Game over

	- Disable input field
	- Display end game container with
	  final score
	- Add a button to reload the page 
	  and start a new game
--------------------------------------- */

function gameOver() {
	endgameEl.classList.add("visible");
	endgameEl.innerHTML = `<h3>GAME OVER</h3>
  <p>Score: ${score}</p>
  <button onclick="location.reload()" class="game-button">Play Again</button>`;
	text.disabled = true;
}

/* ------------------------------------
  	EVENT: Text input

	- Listen for user input in the text 
	  field
	- Check if the input matches the 
	  current 
	  random word
	- If it matches, update score, add a 
	  new word, update time based on 
	  difficulty, and clear the input
	  field
--------------------------------------- */

text.addEventListener("input", function () {
	const userInput = text.value;
	if (userInput === randomWord) {
		updateScore();
		addWordToDOM();
		text.value = "";

		if (selectedDifficulty === "easy") {
			time += 6;
		} else if (selectedDifficulty === "medium") {
			time += 4;
		} else if (selectedDifficulty === "hard") {
			time += 2;
		}
		timeEl.textContent = `${time}s`;
	}
});

/* ------------------------------------
  	EVENT: Settings button click

	- Listen for click on settings button
	- Show or hide settings menu
--------------------------------------- */

settingsBtn.addEventListener("click", function () {
	settings.classList.toggle("hide");
});

/* ------------------------------------
  	EVENT: Difficulty change

	- Listen for change in select  
	  difficulty dropdown
	- Update game difficulty based on 
	  user selection
--------------------------------------- */

difficultySelect.addEventListener("change", function () {
	selectedDifficulty = difficultySelect.value;
});

/* ------------------------------------
	DISPLAY START SCREEN

	- Call function to display start 
	  interface when page loads
--------------------------------------- */

displayStartInterface();

