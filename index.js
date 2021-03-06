//question data stored in object STORE
const STORE = {
  allQuestions: [
    //1
    {
      question: "Question 1: What are the three R's of sustainable waste management?",
      options: [
        "reduce, recycle, and renew", 
        "reduce, reuse, and recycle", 
        "recycle, replace, and repair", 
        "recycle, repair, and reuse"
      ],
      answer: "reduce, reuse, and recycle"
    },
    //2
    {
      question: "Question 2: Which of these items is not recycleable?",
      options: [
        "paper",
        "aluminum cans", 
        "plastic",
        "drinking glasses"
      ],
      answer: "drinking glasses"
    },
    //3
    {
      question: "Question 3: How many times can paper be recycled?",
      options: [
        "indefinitely",
        "two - three times", 
        "five - seven times", 
        "once"
      ],
      answer: "five - seven times"
    },
    //4
    {
      question: "Question 4: Which of these are not renewable energy resources?", 
      options: [
        "sunlight", 
        "wind",
        "geothermal heat", 
        "natural gas"
      ],
      answer: "natural gas"
    },
    //5
    {
      question: "Question 5: Worldwide, what is the most common biofuel?",
      options: [
        "ethanol", 
        "biodiesel", 
        "methanol", 
        "Biogas"
      ],
      answer: "ethanol"
    },
    //6
    {
      question: "Question 6: How much of the Earth's water is freshwater?",
      options: [
        "49.5%", 
        "5.75%", 
        "2.5%", 
        "25.5%"
      ],
      answer: "2.5%"
    },
    //7
    {
      question: "Question 7: Of the total amount of water available globally, how much is fresh and unpolluted?",
      options: [
        "1.75%", 
        "0.003%", 
        "0.05%", 
        "1%"
      ],
      answer: "0.003%"
    }, 
  ],
  questionNumber: 0,
  score: 0
};


//starts quiz
function startQuiz() {
  $(document).on('click', '.start', function () {
  //$('.start').click(function () {
    $('.container').empty();
    displayQuestion();
  })
};

function upQuestionNumber() {
  STORE.questionNumber++;
  $('.questionNumber').text(STORE.questionNumber);
};

function upScore() {
  STORE.score++;
  $('.score').text(STORE.score);
};

//displays question and calls displayOptions 
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
};

//displays options
function displayOptions() {
  let allOptions = STORE.allQuestions[STORE.questionNumber];
  for (let i = 0; i < allOptions.options.length; i++) {
    $('.insert-option').append(
      `<input class="show-option" type="radio" name="answer" value="${allOptions.options[i]}" required>${allOptions.options[i]}<br />`
    )
  }
};

//calls displayQuestion or displayResults
function nextQuestion() {
  $('.container').on('click', '.next', function (event) {
    $('.container').empty();
    if (STORE.questionNumber === 6/*STORE.allQuestions.length*/) { 
      displayResults();
    } else {
      upQuestionNumber();
      displayQuestion(); 
    }
  });
};

function submitAnswer() {
  $('.container').on('click', '.submit-answer', function (event) {
    event.preventDefault();
    let currentQuestion = STORE.allQuestions[STORE.questionNumber]
    let selected = $('input:checked').val(); 
    let correct = currentQuestion.answer; 
    if (selected == correct) { 
      $('.submit-answer').hide();
      $('.container').append(
        `<h4>That answer is correct!</h4>
        <button type="button" class="next">Next Question</button>`);
      upScore();
    } else {
      $('.submit-answer').hide();
      $('.container').append(
        `<h4>That is the wrong answer. It is actually: </h4>
        <p class="correct-answer">${correct}</p>
        <button type="button" class="next">Next Question</button>`);
    };
  }); 
};


function displayResults() {
 $('.container').empty();
 $('.container').append(
  `<section class='start-screen'>
    <h2>Your score is ${STORE.score}</h2>
    <p>Take the test again!</p>
    <button class="take-again" type="submit">Take Again</button>
  </section>`
 );
 upQuestionNumber();
 takeAgain();
};

function takeAgain() {
  $('.container').on('click', '.take-again', function (event) {
    STORE.questionNumber = 0;
    STORE.score = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
    $('.container').empty();
    $('.container').append(
      `<section class='start-screen'>
        <h2>Are you ready to test your knowledge of resource sustainability?</h2>
        <button class="start" type="submit">Start Quiz</button>
      </section>`
    );
  });
};


function quizApp() {
  startQuiz();
  submitAnswer();
  nextQuestion();
};

$(quizApp);