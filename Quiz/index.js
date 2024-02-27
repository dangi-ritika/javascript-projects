const quizData = [
    {
        question: "What does the “typeof” operator do in JavaScript?",
        options: [
            "Returns the data type of a variable",
            "Checks if a variable is defined",
            "Assigns a value to a variable",
            "Concatenates two strings"
        ],
        correct: 0,
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        options: ["Number", "String", "Boolean", "Object"],
        correct: 3,
    },
    {
        question:  "Which of the following is not a comparison operator in JavaScript?",
        options: ["==", "===", "!=", "=<"],
        correct: 3,
    },
    {
        question: "What does the “NaN” value represent in JavaScript?",
        options: ["Not a number", "Null value", "Undefined value", "Boolean value"],
        correct:0,
    },
    {
        question: "What does the “this” keyword refer to in JavaScript?",
        options: ["The current function", "The global object", "The object that the function belongs to", "The parent object of the current object"],
        correct: 2,
    },
];
const quiz = document.querySelector('#quiz');
const answerElm =document.querySelectorAll('.answer');
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");

const submitBtn = document.querySelector('#submit');

let currentQuiz = 0;
let score = 0;

//load Quiz function

const loadQuize = () =>{
    const {question, options} = quizData[currentQuiz];
    //console.log(question);
    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach(
        (curOption, index) => (window[`option_${index +1}`].innerText = curOption));
};

loadQuize();

//get answer

const getSelectedOption = () =>{
    // let ans_Index;
    // answerElm.forEach((curOption, index) =>{
    //     if(curOption.checked){
    //         ans_Index = index;
    //     }
    // });
    // return ans_Index;
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};
const deselectedAnswer = () =>{
    answerElm.forEach((curElem) => curElem.checked = false);
};
submitBtn.addEventListener('click', () =>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score+1;
    }
    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectedAnswer();
        loadQuize();
    }
    else{
        quiz.innerHTML= `
        <div class="result">
        <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>`;
    }
});

