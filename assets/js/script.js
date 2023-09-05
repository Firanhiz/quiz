const nextQuestion = document.querySelector('#next-question');
const questionTitle = document.querySelector('#question-title');
const questionOptions = document.querySelector('#question-options');
const currentQuestion = document.querySelector('#current-question');
const totalQuestion = document.querySelector('#total-question');



function Quiz(questionArr) {
    this.questions = questionArr;
    this.index = 0;
    this.quizFinish = false;
}

//todo getQuestions butun suallarin icerisinden index-e = olani getirir
Quiz.prototype.getQuestion = function () {
    return this.questions[this.index]
}

//todo index-i 1 vahid artirir
Quiz.prototype.increaseIndex = function () {
    if (this.questions.length - 1 > this.index) {
        this.index += 1;
    } else {
        this.quizFinish = true;
    }
}

//todo index-i 1 vahid azaldir
Quiz.prototype.decreaseIndex = function () {
    this.index -= 1
}

const quiz = new Quiz(questionLists);

//todo
function createQuiz() {
    const findQuestion = quiz.getQuestion();
    questionTitle.innerHTML = quiz.index + 1 + '. ' + findQuestion.title;

    let optionHtml = '';
    for (let option in findQuestion.options) {
       optionHtml += `
       <div class="option" onclick='handleAnswer(this)'>
            <b>${option}</b>. ${findQuestion.options[option]}
        </div>
       ` ;
    }
    questionOptions.innerHTML = optionHtml;
    currentQuestion.innerHTML = quiz.index + 1;
    totalQuestion.innerHTML = quiz.questions.length;
}

nextQuestion.addEventListener('click', function () {
    nextQuestion.classList.remove('open');
    quiz.increaseIndex();
    if (!quiz.quizFinish) {
        createQuiz();
    }
});

function handleAnswer (event) {
    const findQuestion = quiz.getQuestion();
    if (event.querySelector('b').innerText === findQuestion.correct) {
        event.classList.add('success');
    } else {
        event.classList.add('danger');
    };

    document.querySelectorAll('.option').forEach(function(el) {
        el.classList.add('disabled');
    });

    if (!quiz.quizFinish) {
        nextQuestion.classList.add('open');
    }

    
}

createQuiz();

