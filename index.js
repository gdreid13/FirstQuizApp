function displayResult() {
    let resultHTML = $(
        `<div class="results">
          <form id="js-restart-quiz">
            <fieldset>
              <div class="row">
                <div class="col">
                  <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
                </div>
              </div>
            
              <div class="row">
                <div class="col">
                  <button type="button" id="restart"> Restart Quiz </button>
                </div>
              </div>
            </fieldset>
        </form>
        </div>`);
    STORE.currentQuestion = 0;
    STORE.score = 0;
    $("main").html(resultHTML);
}

function questionNumber() {
    const html = $(`<ul class="scoring">
    <li id="js-answered">Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}</li>
    </ul>`);
    $(".question-number").html(html);
}

function quizScore() {
    const html = $(`<ul class="scoring">
    <li id="js-score">Score: ${STORE.score}/${STORE.questions.length}</li>
    </ul>`);
    $(".quiz-score").html(html);
}

function questionOptions() {
    let question = STORE.questions[STORE.currentQuestion];
    for (let i = 0; i < question.options.length; i++)
        {
        $('.js-options').append(`
            <input type="radio" name="options" id="option${i+1}" value="${question.options[i]}" tabindex="${i+1}"> 
            <label for="option${i+1}"> ${question.options[i]}</label> <br/>
            <span id="js-r${i+1}"></span>
        `);
        }
}

function renderQuestion() {
    let question = STORE.questions[STORE.currentQuestion];
    questionNumber();
    quizScore();
    const questionHTML = $(`
        <div>
            <form id="js-questions" class="question-form">
                <fieldset>
                    <div class="row question">
                        <div class="col">
                            <legend>
                                <p>Who is this character?</p>
                                <p title="${question.title}">
                                <img src=${question.image} alt=${question.alt}>
                                </p>
                            </legend>
                        </div>
                    </div>

                    <div class="row options">
                        <div class="col">
                            <div class="js-options"> </div>
                        </div>
                    </div>
                        <div class="right-or-wrong">
                    </div>    

                    <div class="row">
                        <div class="col">
                            <button type = "submit" id="answer" tabindex="5">Submit</button>
                            <button type = "button" id="next-question" tabindex="6"> Next >></button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>`);
    $("main").html(questionHTML);
    questionOptions();
    $("#next-question").hide();
}

function handleQuizStart() {
    $('#start').on('click', function(event) {
/* I had a header picture once, but couldn't make it look good...
        $('#header-picture').hide();
*/        
        renderQuestion();
    });
}


function handleQuestion() {
    $('body').on('click','#next-question', function(event) {
        if (STORE.currentQuestion === STORE.questions.length) {
            displayResult();
        }
        else     {
            renderQuestion();
        }
      });
}

function handleAnswer() {
  $('body').on("submit",'#js-questions', function(event) {
    event.preventDefault();
    let currentQues = STORE.questions[STORE.currentQuestion];
    let selectedOption = $("input[name=options]:checked").val();
    if (!selectedOption) {
      alert("Choose an option");
      return;
    } 
    let id_num = currentQues.options.findIndex(i => i === selectedOption);
    let id = "#js-r" + ++id_num;
    $('span').removeClass("right-answer wrong-answer");
    if(selectedOption === currentQues.answer) {
      STORE.score++; 
      $('.right-or-wrong').append(`Correct!<br/>`);
      $(`${id}`).addClass("right-answer");
    }
    else {
      $('.right-or-wrong').append(`Incorrect! The answer is "${currentQues.answer}"<br/>`);
      $(`${id}`).addClass("wrong-answer");
    }

    STORE.currentQuestion++;
    $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
    $('#answer').hide();
    $("input[type=radio]").attr('disabled', true);
    $('#next-question').show();
  });
}

function handleEndOfGame() {
    $('body').on('click','#restart', function(event) {
        renderQuestion();
      });    
}

function handleQuizApp() {
    handleQuizStart();
    handleQuestion();
    handleAnswer();
    handleEndOfGame();    
}

$(handleQuizApp);