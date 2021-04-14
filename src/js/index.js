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

      // and for each available answer (letters from the answer choices)
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

    // finally combine/JOIN our output list into one string of HTML and put it on the page
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
      //either/or conditon = true
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // and color the answers green
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
    // if current slide is first slide, hide previous button
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    //if on last slide, hide next button and show submit button
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

  // Variables (HTML elements)
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question:
        "How long after contracting COIVD-19 do you need to quarantine for?",
      answers: {
        a: "1 Week",
        b: "2 Weeks",
        c: "10 Days",
        d: "5 Days",
      },
      correctAnswer: "c",
    },
    {
      question: "What does not help stop the spread of COVID-19?",
      answers: {
        a: "Washing Hands",
        b: "Social Distancing",
        c: "Attending large group gatherings",
        d: "Wearing a Mask",
      },
      correctAnswer: "c",
    },
    {
      question: "When was the earlier cases of COVID-19 first reported?",
      answers: {
        a: "Dec. 31, 2019",
        b: "Jan. 22, 2020",
        c: "Apr. 16, 2020",
        d: "Mar. 25, 2020",
      },
      correctAnswer: "a",
    },
    {
      question: "When do symptoms of COVID-19 start showing, after contract?",
      answers: {
        a: "4-10 Days",
        b: "2-14 Days",
        c: "1-2 Days",
        d: "7-14 Days",
      },
      correctAnswer: "b",
    },
    {
      question: "What is not a mild symptom of COVID-19?",
      answers: {
        a: "Nausea and Vomiting",
        b: "Chills or Fever",
        c: "Persistent Chest Pain",
        d: "Diarrhea",
      },
      correctAnswer: "c",
    },
    {
      question: "Most people recover from COVID-19 symptoms in...",
      answers: {
        a: "20 Days",
        b: "90 Days",
        c: "1 Month",
        d: "2 Weeks",
      },
      correctAnswer: "d",
    },
    {
      question:
        "True/False: Only the elderly will develop severe symptoms and require hospitalization.",
      answers: {
        a: "True",
        b: "False, only the youths would develop severe symptoms",
        c:
          "False, only those with prior health conditons would develop severe symptoms",
        d:
          "False, risk of severe symptoms increases with age, but all ages can develop severe symptoms",
      },
      correctAnswer: "d",
    },
    {
      question:
        "True/False: After recovery from COVID-19, a vaccination is still recommended.",
      answers: {
        a: "True",
        b: "False, recovery provides full immunization",
        c: "False, vaccination will re-infect you with COVID-19",
        d: "False, the vaccination is mandatory",
      },
      correctAnswer: "a",
    },
    {
      question: "After getting a COVID-19 vaccine...",
      answers: {
        a: "You will be accurately tested POSITIVE",
        b: "You will be accurately tested NEGATIVE",
        c: "You will be falsely tested POSITIVE",
        d: "You will be falsely tested NEGATIVE",
      },
      correctAnswer: "b",
    },
    {
      question: "True/False: People should wear masks at all times outdoors.",
      answers: {
        a: "True",
        b:
          "False, masks are not necessary when the other party is also wearing it",
        c: "False, sweat wettens the mask and promote microorganism growth",
        d: "False, masks are only necessary when one party have the virus",
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
