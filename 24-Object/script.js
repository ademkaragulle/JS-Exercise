function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
};

Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer
}

// Quiz constructor
function Quiz(questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
}

// quiz prototypes
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex]
}

// Quiz isFinish
Quiz.prototype.isFinish = function () {
    return this.questions.length === this.questionIndex
}


// Quiz guess 
Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();
    if (question.checkAnswer(answer)) {
        this.score++
    }
    this.questionIndex++
}


let q1 = new Question("what is the best programming language ?", ["C#", "Visual Basic", "JavaScript", "asp.net"], "JavaScript");
let q2 = new Question("what is the most popular programming language ?", ['C#', 'Visual Basic', 'JavaScript', 'asp.net'], "JavaScript");
let q3 = new Question("what is the best modern programming language ?", ['C#', 'Visual Basic', 'JavaScript', 'asp.net'], "JavaScript");

console.log(q1.checkAnswer('C#'));
console.log(q1.checkAnswer('JavaScript'));

var questions = [q1, q2, q3]

// start quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    if (quiz.isFinish()) {
        // show score
        showScore()
    } else {
        let question = quiz.getQuestion()
        let choices = question.choices
        document.querySelector('#question').textContent = question.text

        for (i = 0; i < choices.length; i++) {
            var element = document.getElementById(`choice${i}`)
            element.innerHTML = choices[i]

            guess('btn' + i, choices[i])
        }
        showProgress()
    }
}


function guess(id, guess) {
    let btn= document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess)
        loadQuestion()
    }
}

function showScore() {
 var html = `<h2>Score</h2><h4>${quiz.score}</h4>`
 document.querySelector('.card-body').innerHTML=html
}

function showProgress(){
    var totalquestion = quiz.questions.length
    var questionNummer = quiz.questionIndex+1
    document.querySelector('#progress').innerHTML= 'Question ' + questionNummer + ' of ' + totalquestion
}