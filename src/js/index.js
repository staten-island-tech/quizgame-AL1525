console.log("connected");

(function () {
  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
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

  // Variables
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Question 1",
      answers: {
        a: "Choice 1",
        b: "Choice 2",
        c: "Choice 3",
        d: "Choice 4",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 2",
      answers: {
        a: "Choice 5",
        b: "Choice 6",
        c: "Choice 7",
        d: "Choice 8",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 3",
      answers: {
        a: "Choice 9",
        b: "Choice 10",
        c: "Choice 11",
        d: "Choice 12",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 4",
      answers: {
        a: "Choice 13",
        b: "Choice 14",
        c: "Choice 15",
        d: "Choice 16",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 5",
      answers: {
        a: "Choice 17",
        b: "Choice 18",
        c: "Choice 19",
        d: "Choice 20",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 6",
      answers: {
        a: "Choice 21",
        b: "Choice 22",
        c: "Choice 23",
        d: "Choice 24",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 7",
      answers: {
        a: "Choice 25",
        b: "Choice 26",
        c: "Choice 27",
        d: "Choice 28",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 8",
      answers: {
        a: "Choice 29",
        b: "Choice 30",
        c: "Choice 31",
        d: "Choice 32",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 9",
      answers: {
        a: "Choice 33",
        b: "Choice 34",
        c: "Choice 35",
        d: "Choice 36",
      },
      correctAnswer: "c",
    },
    {
      question: "Question 10",
      answers: {
        a: "Choice 37",
        b: "Choice 38",
        c: "Choice 39",
        d: "Choice 40",
      },
      correctAnswer: "c",
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
