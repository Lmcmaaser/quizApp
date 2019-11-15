//question data stored in object STORE
const STORE = {
  allQuestions: [//1
    {
      question: "Question 1: What are the three R's of sustainable waste management?",
      options: [
        "1) reduce, recycle, and renew", 
        "2) reduce, reuse, and recycle", 
        "3) recycle, replace, and repair", 
        "4) recycle, repair, and reuse"
      ],
      answer: "2) reduce, reuse, and recycle"
    },
    //2
    {
      question: "Question 2: Which of these items is not recycleable?",
      options: [
        "1) paper",
        "2) aluminum cans", 
        "3) plastic",
        "4) drinking glasses"
      ],
      answer: "4) drinking glasses"
    },
    //3
    {
      question: "Question 3: How many times can paper be recycled?",
      options: [
        "1) indefinitely",
        "2) two - three times", 
        "3) five - seven times", 
        "4) once"
      ],
      answer: "3) five - seven times"
    },
    //4
    {
      question: "Question 4: Which of these are not renewable energy resources?", 
      options: [
        "1) sunlight", 
        "2) wind",
        "3) geothermal heat", 
        "4) natural gas"
      ],
      answer: "4) natural gas"
    },
    //5
    {
      question: "Question 5: Worldwide, what is the most common biofuel?",
      options: [
        "1) ethanol", 
        "2) biodiesel", 
        "3) methanol", 
        "4) Biogas"
      ],
      answer: "1) ethanol"
    },
    //6
    {
      question: "Question 6: How much of the Earth's water is freshwater?",
      options: [
        "1) 49.5%", 
        "2) 5.75%", 
        "3) 2.5%", 
        "4) 25.5%"
      ],
      answer: "3) 2.5%"
    },
    //7
    {
      question: "Question 7: Of the total amount of water available globally, how much is fresh and unpolluted?",
      options: [
        "1) 1.75%", 
        "2) 0.003%", 
        "3) 0.05%", 
        "4) 1%"
      ],
      answer: "2) 0.003%"
    }, 
  ],
  questionNumber: 0,
  score: 0
};

//
function startQuiz() {
  $('.start').click(function () {
    $('.container').empty();
    console.log('startQuiz ran')
    questionNumber = 0;
    displayQuestion();
    upQuestionNumber();
  })
};

function upQuestionNumber() {
  $('.questionTracker').empty();
  $('.questionTracker').append(
    `<p>Question: <span class="questionNumber">${STORE.questionNumber + 1}</span>/7</p>`
  );
};

function upScore() {
  $('.scoreTracker').empty();
  $('.scoreTracker').append(
    `<p>Score: <span class="score">${STORE.score + 1}</span>/7</p>`
  );
};
//increments the number value of the "score" variable by one
//and updates the "score" number text 
/*function upScore() {
  score++;
  $('.score').text(score);
  console.log('upScore ran');
}*/
/*//increments the number value of the "question number" variable by one
//and updates the "question number" text 
function upQuestionNumber() {
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
  console.log('upQuestionNumber ran');
}*/

//displays question and calls options function 
function displayQuestion() {
  $('.container').append(
    `<form class="question-form" action="" method="post">
    <fieldset>
      <legend class="show-question">${STORE.allQuestions[STORE.questionNumber].question}</legend>
    </fieldset>
    <fieldset class="insert-option">
    </fieldset>
      <button type="submit" class="submit-answer">Submit Answer</button>
    </form>`
  ); 
  displayOptions();   
  console.log('displayQuestion ran', questionNumber);
  submitAnswer();
};

//displays options
function displayOptions() {
  let allOptions = STORE.allQuestions[STORE.questionNumber];
  for (let i = 0; i < allOptions.options.length; i++) {
    $('.insert-option').append(
      ` <input class="show-option" type="radio" name="answer" value=${allOptions.options[i]}>${allOptions.options[i]}<br />`
    )
  }
};

function submitAnswer() {
  $('.container').on('click', '.submit-answer', function (event) {
    event.preventDefault();
    $('.container').empty();
    /*let selected = $('input:checked');
    let selectedOption = selected.val();
    console.log('the selected option is', selectedOption);
    let correct = STORE[questionNumber].answer;*/
    let currentQuestion = STORE.allQuestions[STORE.questionNumber];
    //let selectedOption = $("input:checked").val();
    let selectedOption = $('input[class="show-option"]:checked').val();
    let correct = currentQuestion.answer;
    if (selectedOption === correct) {
      $('.container').append(
        `<h4>Your answer is correct!</h4>
        <button type="button" class="nextButton button">Next Question</button>`
      )
      upScore();
    } else {
      $('.container').append(
        `<h4>That is the wrong answer. It is actually: </h4>
        <p class="correct-answer">${correct}</p>
        <button type="button" class="next-button">Next Question</button>`)
    }
  }); 
};

function endOfQuestions() {
  $('.container').on('click','.next-question', (event) => {
    STORE.questionNumber === STORE.allQuestions.length? 
    displayResults() : displayQuestion();
  });
}

function nextQuestion() {
  $('.container').on('click', '.next-button', function (event) {
    $('.container').empty();
    $('.question-form').append(
      `<form class="question-form" action="" method="post">
      <fieldset>
        <legend class="show-question">${STORE[questionNumber].question}</legend>
      </fieldset>
        <button type="submit" class="submit-answer">Submit Answer</button>
      </form>`
    ); 
  upQuestionNumber();
  endOfQuestions();
  displayOptions();   
  console.log('nextQuestion ran', questionNumber);
  });
};

function displayResults() {
 $('.container').empty();
 $('.container').append(
  `<section class='start-screen'>
    <h2>Your score is${STORE.score}</h2>
    <p>Take the test again!</p>
    <button class="take-again" type="submit">Take Again</button>
  </section>`
 );
};

function takeAgain() {
  $('.container').on('click', '.take-again', function (event) {
    $('.container').empty();
    $('.container').append(
      `<section class='start-screen'>
        <h2>Are you ready to test your general knowledge of resource sustainability?</h2>
        <button class="start" type="submit">Start Quiz</button>
      </section>`
    );
  });
};

//call all the functions
function quizApp() {
  startQuiz();
  //displayQuestion()
  //submitAnswer();
};

$(quizApp);