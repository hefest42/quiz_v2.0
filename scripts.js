"use strict"

const question1 = {
    question: "What eminent scientist hosted the television show Cosmos?",
    option1: "Stephen Hawking",
    option2: "Jacob Bronowski",
    option3: "Carl Sagan",
    option4: "Albert Einstein",
    correct: 3,
}

const question2 = {
    question: "Which song has not won a Eurovision competition?",
    option1: "La, La, La",
    option2: "Ne partez pas sans moi",
    option3: "Pump Pump",
    option4: "Ding-a-Dong",
    correct: 3,
}

const question3 = {
    question: "In which of these countries did manga originate?",
    option1: "China",
    option2: "Japan",
    option3: "Canada",
    option4: "Korea",
    correct: 2,
}

const question4 = {
    question: "Who is the voice of remy the Rat in Ratatouille",
    option1: "Will Geer",
    option2: "Will Patton",
    option3: "Brad Garrett",
    option4: "Patton Oswalt",
    correct: 4,
}

const question5 = {
    question: `Who Played the role of Fox Mulder in the American television series "The X-Files"`,
    option1: "Lindsey Ginter",
    option2: "Dean Haglund",
    option3: "David Duchovny",
    option4: "Tim Daly",
    correct: 3,
}

// nav bar
const inputName = document.querySelector(".input-name"); // input name for the player
const btnStart = document.querySelector(".start-game"); // button start

// quiz 
const quizContainer = document.querySelector(".quiz-container"); // the whole quiz section
const labelQuestion = document.querySelector(".question"); // questions text
const questionOptions = document.querySelectorAll(".options"); // all 4 answer options

// top right of questions
const questionsNumber = document.querySelector(".number-qst"); // 0/10 label for the number of the quesitons

// middle right of questions
const circleAnswer = document.querySelectorAll(".circle-answer"); // all 10 circles for correct/wrong 

// bottom right of questions
const quizTimer = document.querySelector(".clock"); // countdown timer
const btnNext = document.querySelector(".next-question"); // next question button
const btnReset = document.querySelector(".reset-quiz"); // restart quiz button


let index;
let correctAnswer;
let time = 20;

