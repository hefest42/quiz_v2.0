"use strict"

const question1 = {
    question: ,
    option1: ,
    option2: ,
    option3: ,
    option4: ,
    correct: ,
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


