console.log("connected");
import { questions } from "./question.js";

(function () {
  function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      output.push(
        `<div class="slide">
            <div class="questions"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = {
    questions,
  };

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slides");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

/*import { question } from "./question.js";

function buildQuiz() {
  const output = [];

  question.forEach((currentQuestion, questionNumber) => {
    const answers = [
      "Answer 1",
      "Answer 2",
      "Answer 3",
      "Answer 4",
      "Answer 5",
      "Answer 6",
      "Answer 7",
      "Answer 8",
      "Answer 9",
      "Answer 10",
      "Answer 11",
      "Answer 12",
      "Answer 13",
      "Answer 14",
      "Answer 15",
      "Answer 16",
      "Answer 17",
      "Answer 18",
      "Answer 19",
      "Answer 20",
      "Answer 21",
      "Answer 22",
      "Answer 23",
      "Answer 24",
      "Answer 25",
      "Answer 26",
      "Answer 27",
      "Answer 28",
      "Answer 29",
      "Answer 30",
      "Answer 31",
      "Answer 32",
      "Answer 33",
      "Answer 34",
      "Answer 35",
      "Answer 36",
      "Answer 37",
      "Answer 38",
      "Answer 39",
      "Answer 40",
    ];
  });
}

const quizContainer = document.getElementById("quiz");

function showResults() {
  const answers = quizContainer.querySelectorAll(".answers");

  let numCorrect = 0;

  questions.forEach((currentQuestion, questionNumber) => {
    const answers = answers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answers.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      //increase score
      answerContainers[questionNumber].style.color = "green";
    } else {
      answerContainers[questionNumber].style.color = "red";
    }
  });
}

submitButton.addEventListener("click", showResults);*/
