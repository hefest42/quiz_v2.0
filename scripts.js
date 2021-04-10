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

const questions = [question1, question2, question3, question4, question5];


// nav bar
const inputName = document.querySelector(".input-name"); // input name for the player
const btnStart = document.querySelector(".start-game"); // button start
const labelWelcome = document.querySelector(".welcome-msg"); // welcome message 

// quiz 
const quizContainer = document.querySelector(".quiz-container"); // the whole quiz section
const labelQuestion = document.querySelector(".question"); // questions text
const questionOptions = document.querySelectorAll(".options"); // all 4 answer options
const labelOption1 = document.querySelector(".answer1") // first answer option
const labelOption2 = document.querySelector(".answer2") // second answer option
const labelOption3 = document.querySelector(".answer3") // third answer option
const labelOption4 = document.querySelector(".answer4") // fourth answer option

// top right of questions
const questionsNumber = document.querySelector(".number-qst"); // 0/10 label for the number of the quesitons

// middle right of questions
const circleAnswer = document.querySelectorAll(".circle-answer"); // all 10 circles for correct/wrong 

// bottom right of questions
const quizTimer = document.querySelector(".clock"); // countdown timer
const btnNext = document.querySelector(".next-question"); // next question button
const btnReset = document.querySelector(".reset-quiz"); // restart quiz button


let index;
let correctAnswers;
let time;
let playing = 1;

// updating the question
const updateQuestion = function(qst) {
    labelQuestion.textContent = qst.question;
    labelOption1.textContent = qst.option1;
    labelOption2.textContent = qst.option2;
    labelOption3.textContent = qst.option3;
    labelOption4.textContent = qst.option4; 

    // displaying the number of the question
    questionsNumber.textContent = `${index + 1}/10`
};

// timer function 
const countDownTimer = function() {
    const tick = function() {
        const minute = String(Math.trunc(time / 60)).padStart(2, 0);
        const second = String(Math.trunc(time % 60)).padStart(2, 0);
        // console.log(`${minute}:${second}`)
        
        // update the UI with the timer
        quizTimer.textContent = `${minute}:${second}`;
        
        // if timer runs out
        if(time === 0) {
            clearInterval(callTimer)
            quizContainer.classList.add("hidden");
            labelWelcome.textContent = `Sorry, you ran out of time. Try Again!`
        }
        
        // decrement timer
        time--
    }
    tick();

    // calling timer every 1 second
    const callTimer = setInterval(tick, 1000);
}



// pressing the start button
btnStart.addEventListener("click", function(e) {
    e.preventDefault();

    // getting a name
    const name = inputName.value.toLowerCase();
    const correctName = name.charAt(0).toUpperCase() + name.slice(1);

    // clearing the input field
    inputName.value = "";

    
    // displaying the UI
    if(name) {
        quizContainer.classList.remove("hidden");
        //changing the greeting message 

        labelWelcome.textContent = `Welcome ${correctName}, good luck!`;
    }

    // setting index to 0 and updating the question
    index = 0;
    updateQuestion(questions[index]);

    // starting the timer
    time = 300;
    countDownTimer()
});

// pressing the answer buttons
if (playing === 1) {
    for (let i = 0; i < questionOptions.length; i++) {
        questionOptions[i].addEventListener("click", function(e) {
            e.preventDefault();
            
            const answer = Number(questionOptions[i].getAttribute("data-value"));

            if(answer === questions[index].correct) {
                circleAnswer[index].classList.add("correct");
                questionOptions[answer - 1].classList.add("correct");
            } else {
                circleAnswer[index].classList.add("wrong");
                questionOptions[answer - 1].classList.add("wrong")
            }
        })
    }
}