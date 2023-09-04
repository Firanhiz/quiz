const nextQuestion = document.querySelector('#next-question');
const questionTitle = document.querySelector('#question-title');
const questionOptions = document.querySelector('#question-options');
const currentQuestion = document.querySelector('#current-question');
const totalQuestion = document.querySelector('#total-question');


function Quiz(questionArr) {
    this.questions = questionArr;
    this.index = 0;
}

//todo getQuestions butun suallarin icerisinden index-e = olani getirir
Quiz.prototype.getQuestion = function () {
    return this.questions[this.index]
}

//todo index-i 1 vahid artirir
Quiz.prototype.increaseIndex = function () {
    if (this.questions.length - 1 > this.index) {
        this.index += 1;
    }
}

//todo index-i 1 vahid azaldir
Quiz.prototype.decreaseIndex = function () {
    this.index -= 1
}

const quiz = new Quiz(questionLists);

//todo
function createQuiz() {
    const currentQuestion = quiz.getQuestion();
    questionTitle.innerHTML = quiz.index + 1 + '. ' + currentQuestion.title;

    let optionHtml = '';
    for (let option in currentQuestion.options) {
       optionHtml += `
       <div class="option">
            <b>${option}.</b> ${currentQuestion.options[option]}
        </div>
       ` ;
    }
    questionOptions.innerHTML = optionHtml;
}

nextQuestion.addEventListener('click', function () {
    quiz.increaseIndex();
    createQuiz();
});

createQuiz();

