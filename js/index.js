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

/* --------------------------------
  FUNCTION: Add word to DOM
----------------------------------- */
// Selects a random word from the words array and adds it to the DOM
function addWordToDOM() {
	randomWord = words[Math.floor(Math.random() * words.length)];

	word.textContent = randomWord;
	console.log(randomWord);
}

/* --------------------------------
  FUNCTION: Update score
----------------------------------- */
// Increments the score by 1 and updates the score element in the DOM
function updateScore() {
	score += 1;
	scoreEl.textContent = score;
	console.log(score);
}

/* --------------------------------
  FUNCTION: Update time
----------------------------------- */
// Starts a timer that decrements the time by 1 every second and updates the time element in the DOM
function updateTime() {
	const intervalId = setInterval(() => {
		time -= 1;
		timeEl.textContent = time;

		if (time === 0) {
			clearInterval(intervalId);
		}
	}, 1000);
}

/* --------------------------------
  EVENT: Input
----------------------------------- */
// Listens for input events on the text input field and checks if user input matches the random word
// If it matches, it updates the score, adds a new word to the DOM, updates the time, and clears the input field
text.addEventListener("input", function () {
	const userInput = text.value;
	if (userInput === randomWord) {
		updateScore();
		addWordToDOM();

		text.value = "";

		time += 5;
		timeEl.textContent = time;
	}
});

// Starts game
addWordToDOM();
updateTime();

