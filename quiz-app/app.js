let quizData = [{
        question: 'Which is the best Air Jordan silhouette till date?',
        a: 'Air Jordan 11',
        b: 'Air Jordan 3',
        c: 'Air Jordan 4',
        d: 'Air Jordan 1',
        correct: 'd',
    },
    {
        question: 'Where am I from?',
        a: 'Assam',
        b: 'Meghalaya',
        c: 'Karnataka',
        d: 'Delhi',
        correct: 'a',
    },
    {
        question: 'Whats 1 + 1?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b',
    },
    {
        question: 'Whats my fav word?',
        a: 'lol',
        b: 'Lite',
        c: 'okay',
        d: 'cool',
        correct: 'b',
    }
]

const questionEl = document.getElementById('question');
const answerRadioBtn = document.querySelectorAll('.answer');
const submitBTN = document.getElementById('submit-btn')
const quizContainer = document.querySelector('.quiz-container')


const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


questionIndex = 0
score = 0

function loadQuestion() {
    questionEl.innerHTML = quizData[questionIndex].question
    a_text.innerHTML = quizData[questionIndex].a
    b_text.innerHTML = quizData[questionIndex].b
    c_text.innerHTML = quizData[questionIndex].c
    d_text.innerHTML = quizData[questionIndex].d
}

loadQuestion()


function uncheckAllRadioButtons() {
    answerRadioBtn.forEach(btn => {
        btn.checked = false;
    })
}

function evaluateAnswer() {
    answerRadioBtn.forEach(btn => {
        if (btn.checked === true) {
            if (btn.id == quizData[questionIndex].correct) {
                score++
            }
        }

    })
}

submitBTN.addEventListener('click', () => {
    evaluateAnswer()
    questionIndex++
    if (questionIndex < quizData.length) {
        uncheckAllRadioButtons()
        loadQuestion()
    } else {
        quizContainer.innerHTML = `You scored ${score}/${quizData.length}!`
        quizContainer.style.padding = '5rem';
        quizContainer.style.fontWeight = 'bold';
    }

})