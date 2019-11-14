//question data stored in object STORE
const STORE = [
    //0
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
      //1
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
      //2
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
      //3
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
      //4
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
      //5
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
      //6
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
];

let totalNumberOfQuestion = STORE.length;
let questionNumber = 0;
let score = 0;

function startQuiz() {
  $('.start').click(function () {
    $('.container').empty();
    console.log('startQuiz ran')
    questionNumber = 0;
    displayQuestion();
  })
};

function questionOptions() {
  let allOptions = STORE[questionNumber].options.length;
  for (let i = 0; i < allOptions; i++) {
    $('.show-question').append(
      `<input class="show-option" type="radio" name="answer" value=${STORE[questionNumber].options}>${STORE[questionNumber].options[i]}<br />`
    )
  }
};

function displayQuestion() {
  $('.container').append(
    `<section class="question-score-container hidden"> 
      <div class="question-number">
        <p class="number">Question: ${questionNumber + 1} out of 7</p>
      </div>
      <div class="question-score">
        <p class="score">Score: ${score} out of 7</p>
      </div>
    </section>
    <form class="question-form" action="" method="post">
    <fieldset>
      <legend class="show-question">${STORE[questionNumber].question}</legend>
    </fieldset>
      <button type="submit" class="submit-answer">Submit Answer</button>
    </form>`,
  );  
  questionOptions();   
  console.log('questionDisplay ran', questionNumber);
  submitAnswer();
};

function submitAnswer() {
  $('.question-score-container').on('click', '.submit-answer', function (event) {
    event.preventDefault();
    $('.container').empty();
    let selected = $('input:checked');
    let selectedOption = selected.val();
    console.log('the selected option is', selectedOption);
    let correct = STORE[questionNumber].answer;
    if (selectedOption === correct) {
      $('.container').append(
        `<h4>Your answer is correct!</h4>
        <button type="button" class="nextButton button">Next Question</button>`
      )
    } else {
      $('.container').append(
        `<h4>That is the wrong answer. It is actually: </h4>
        <p class="correct-answer">${STORE[questionNumber].answer}</p>
        <button type="button" class="nextButton button">Next Question</button>`)
    }
  }); 
};

//call all the functions
function quizApp() {
  startQuiz();
  //displayQuestion()
  //submitAnswer();
};

$(quizApp);