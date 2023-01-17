// Variablss
let startScreen = document.querySelector("#start");
let startBtn = document.querySelector("#start-btn");
let infoBox = document.querySelector(".info-box");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let quizBox = document.querySelector(".quiz-box");
let endBox = document.querySelector("#quiz-end");
let submitBtn = document.querySelector("#save-score");
let clearBtn = document.querySelector("#clear-score");
let initialsText = document.querySelector("#initials");
let existing = localStorage.getItem('results');
existing = existing ? existing.split(',') : [];
let queCount = 0;
let counter = 75;
let score = 0;

clearBtn.onclick = () => {
    // Clear local storage
    localStorage.clear();
    location.reload();
}