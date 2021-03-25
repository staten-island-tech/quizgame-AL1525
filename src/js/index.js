console.log("connected");

const question = [
  {
    questionContent: "What's your question 1?",
    choices: [
      {
        choiceContent: "Answer 1",
        correct: false,
      },
      {
        choiceContent: "Answer 2",
        correct: false,
      },
      {
        choiceContent: "Answer 3",
        correct: true,
      },
      {
        choiceContent: "Answer 4",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 2?",
    choices: [
      {
        choiceContent: "Answer 5",
        correct: false,
      },
      {
        choiceContent: "Answer 6",
        correct: false,
      },
      {
        choiceContent: "Answer 7",
        correct: true,
      },
      {
        choiceContent: "Answer 8",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 3?",
    choices: [
      {
        choiceContent: "Answer 9",
        correct: false,
      },
      {
        choiceContent: "Answer 10",
        correct: false,
      },
      {
        choiceContent: "Answer 11",
        correct: true,
      },
      {
        choiceContent: "Answer 12",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 4?",
    choices: [
      {
        choiceContent: "Answer 13",
        correct: false,
      },
      {
        choiceContent: "Answer 14",
        correct: false,
      },
      {
        choiceContent: "Answer 15",
        correct: true,
      },
      {
        choiceContent: "Answer 16",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 5?",
    choices: [
      {
        choiceContent: "Answer 17",
        correct: false,
      },
      {
        choiceContent: "Answer 18",
        correct: false,
      },
      {
        choiceContent: "Answer 19",
        correct: true,
      },
      {
        choiceContent: "Answer 20",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 6?",
    choices: [
      {
        choiceContent: "Answer 21",
        correct: false,
      },
      {
        choiceContent: "Answer 22",
        correct: false,
      },
      {
        choiceContent: "Answer 23",
        correct: true,
      },
      {
        choiceContent: "Answer 24",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 7?",
    choices: [
      {
        choiceContent: "Answer 25",
        correct: false,
      },
      {
        choiceContent: "Answer 26",
        correct: false,
      },
      {
        choiceContent: "Answer 27",
        correct: true,
      },
      {
        choiceContent: "Answer 28",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 8?",
    choices: [
      {
        choiceContent: "Answer 29",
        correct: false,
      },
      {
        choiceContent: "Answer 30",
        correct: false,
      },
      {
        choiceContent: "Answer 31",
        correct: true,
      },
      {
        choiceContent: "Answer 32",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 9?",
    choices: [
      {
        choiceContent: "Answer 33",
        correct: false,
      },
      {
        choiceContent: "Answer 34",
        correct: false,
      },
      {
        choiceContent: "Answer 35",
        correct: true,
      },
      {
        choiceContent: "Answer 36",
        correct: false,
      },
    ],
  },
  {
    questionContent: "What's your question 10?",
    choices: [
      {
        choiceContent: "Answer 37",
        correct: false,
      },
      {
        choiceContent: "Answer 38",
        correct: false,
      },
      {
        choiceContent: "Answer 39",
        correct: true,
      },
      {
        choiceContent: "Answer 40",
        correct: false,
      },
    ],
  },
];

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

submitButton.addEventListener("click", showResults);
