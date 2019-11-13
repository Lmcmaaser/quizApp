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
        answer: 2,
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
        answer: 4,
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
        answer: 3,
      },
      //3
      {
        question: "Question 4: Which of these are not renewable energy resources?", 
        options: [
            "1) sunlight", 
            "2) wind", 
            "3) geothermal heat", 
            "4) natural gas"],
        answer: 4,
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
        answer: 1,
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
        answer: 3,
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
        answer: 2,
      },    
];

let totalNumberOfQuestion = STORE.length;
let questionNumber = 0;
let score = 0;

//Click .start-button adds .hidden class to Start Section, and removes .hidden class of Question Section
function startQuiz() {
  $('.start-container').on('click', '.start', function (event) {
        $('.start-container').hide();
        $('.question-container').show();
        $('.options-form').show();
        //$('.response').hide();
        $('.question-score-container').show();
        $('.final-container').hide();
        questionNumber = 0;
    })
  displayQuestion();
  displayOptions();
};

function currentQuestion() {
  $('.question-number').empty();
  $('.question-number').append(
      `<p class= 'number'>Question: ${questionNumber + 1} out of 7</p>`
  );
};

function currentScore() {
  $('.question-score').empty();
  $('.question-score').append(
      `<p>Score: ${score} out of 7</p>`
  );
  console.log('currentScore ran');
  console.log(score);
};


//display question gets called in submitAnswer
function displayQuestion() {
  /*$('.show-question').text(STORE[questionNumber].question);
    console.log('questionDisplay ran', questionNumber);
    currentQuestion();
    currentScore();*/
  //$('.question-container').show()
  $('.question-container').empty();
  $('.question-container').append(
    `<p class="show-question">${STORE[questionNumber].question}</p>`
  );
    console.log('displayQuestion ran', questionNumber);
    currentQuestion();
    currentScore();
}

//display options gets called in submitAnswer
function displayOptions() {

  //empty options container
  $('.show-option').empty();
  const allOptions = STORE[questionNumber].options.length;
  //populate empty .options-container
  for (let i = 0; i < allOptions; i++) {
      $('.options-container').append(
          `<input class='show-option' type="radio" name='answer' value='${i}'>${STORE[questionNumber].options[i]}<br />`
      );
  }
  console.log('displayOption ran')
}

function nextQuestion() { //called by right/wrongAnswer function
  $('.response').on('click', '.nextButton', function (event){
    $('.submit-answer').show();
    $('.response').hide();
  });
  displayQuestion();
  displayOptions();
  console.log('nextQuestion ran');
}

//what shows when you get the answer right gets called in submitAnswer
function rightAnswer() {
  $('.options-container').hide();
  $('.submit-answer').hide();
  $('.response').append(
    `<h4>Your answer is correct!</h4>
    <button type="button" class="nextButton button">Next Question</button>`
  );
  nextQuestion();
}
function wrongAnswer() {
  $('.options-container').hide();
  $('.submit-answer').hide();
  $('.response').append(
    `<h4>That is the wrong answer. It is actually: </h4>
    <p class="correct-answer">${STORE[questionNumber].answer}</p>
    <button type="button" class="nextButton button">Next Question</button>`
  );
  nextQuestion();
}



function submitAnswer() {
  $('.question-score-container').on('click', '.submit-answer', function (event) {
    event.preventDefault();
    $('.response').show();
    let selected = $('input:checked');
    let selectedOption = selected.val(); //get value of selected item an insert into 'answer' variable
    console.log('the selected option is', selectedOption);
    let correct = STORE[questionNumber].answer;
    if (selectedOption === correct) {
      rightAnswer(); 
    } else {
      wrongAnswer(); 
    }
  }); 
  console.log('submitAnswer ran')
}


//Click .reset-button adds .hidden class to Question and Final Section, and removes .hidden class of Start Section
function takeAgain() {
  $('.reset-button').click(function () {
      location.reload();
      $('.start-container').show();
      $('.final-container').hide();
      $('.question-section').hide();
      console.log('Last.takeAgain ran');
      
      //reset questionNumber and score to 0
      questionNumber = 0;
      console.log('questionNumber')
      score = 0;
      console.log('score')
  })
}

//call all the functions
function quizApp() {
    startQuiz();
    //takeAgain();
    submitAnswer();
    //displayQuestion();
    //displayOptions();
    currentQuestion();
    currentScore();
}

$(quizApp);