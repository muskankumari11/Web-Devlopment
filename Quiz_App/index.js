const quizData = [{
    question:"JavaScript was invented by?",
        'a': "1). Brendan Eich",
        'b': "2). Tim Berners-Lee",
        'c': "3). Dennis Ritchie",
        'd': "4). Guido van Rossum",
        'correct': "a",
    },
{
    question: "Types of Data Types___ in JavaScript?",
    a: "1). 2",
    b: "2). 4",
    c: "3). 3",
    d: "4). 1",
    correct: "c",
},
{
    question: "What year was JavaScript launched?",
    a: "1). 1996",
    b: "2). 1995",
    c: "3). 1994",
    d: "4). none of the above",
    correct: "b",
},
{
    question: "Which company developed JavaScript?",
    a: "1). W3C",
    b: "2). Netscape",
    c: "3). Hakon Wium Lie and Bert Bos",
    d: "4). Bell Labs",
    correct: "b",
},
{
question: "How to delete property-specific values?",
    'a':"1). delete keyword",
    'b':"2). specific keyword",
    'c': "3). delete add keyword",
    'd':"4). extreme delete keyword",
    'correct':"a",
},
{
    question: "How to write a file using JavaScript?",
    'a':"1). writefile()",
    'b':"2). writefile",
    'c':"3). writeFile()",
    'd':"4). Writefile",
    'correct':"c",
},
{
    question: "How to read a file using JavaScript?",
    'a':"1). readfile()",
    'b':"2). readFile()",
    'c':"3). Readfile()",
    'd':"4). readfile",
    'correct':"b",
},
{
    question: "Types of Pop up boxes in JavaScript___?",
    'a':"1). 1",
    'b':"2).2",
    'c':"3). 3",
    'd':"4). 4",
    'correct':"c"
},
{
    question: "Which is used for converting string of any base to integer in JavaScript?",
    'a':"1). parseInt('1')",
    'b':"2). parseInt(1)",
    'c':"3). parseint()",
    'd':"4). parseInt()",
    'correct':"d",
},
{
    question: "Errors shown in JavaScript?",
    'a':"1). Syntax Error",
    'b':"2). Logical Error",
    'c':"3). Runtime Error",
    'd':"4). All of them",
    'correct':"d",
},
];
let index = 0;
let right = 0,
wrong = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")

const loadQuestion = () => {
if (total === index) {
    return End()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener("click",function() {
    const ans = getAnswer()
    const data = quizData[index]
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion()
}
)

const reset = () => {
    allInputs.forEach(
        (inputl) => {
            inputl.checked = false;
        }
    )}
const getAnswer = () => {
let ans;
allInputs.forEach((inputl) => {
        if (inputl.checked) {
            ans = inputl.value;
        }
    }
)
return ans;
}

const End = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hey!, you have scored ${right} / ${total}  </h3>
        </div>
    `
}
loadQuestion(index);
