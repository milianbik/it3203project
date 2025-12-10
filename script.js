let btn = document.getElementById("dropdown-button");
let content = document.getElementByID("dropdown-content");

function openMenu() {
    if (content.style.display === "block") {
    content.style.display = "none"; 
  } else {
    content.style.display = "block";
  }

}

document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener("click", openMenu);
});






const questions = [
        {
            question: "Question 1?",
            answers: [
                { text: "Answer 1", correct: false},
                { text: "Answer 2", correct: true},
                { text: "Answer 3", correct: false},
                { text: "Answer 4", correct: false},
            ]
        },
        {
            question: "Question 2?",
            answers: [
                { text: "Answer 1", correct: false},
                { text: "Answer 2", correct: true},
                { text: "Answer 3", correct: false},
                { text: "Answer 4", correct: false},
            ]
        },
        {
            question: "Question 3?",
            answers: [
                { text: "Answer 1", correct: false},
                { text: "Answer 2", correct: true},
                { text: "Answer 3", correct: false},
                { text: "Answer 4", correct: false},
            ]
        },
        {
            question: "Question 4?",
            answers: [
                { text: "Answer 1", correct: false},
                { text: "Answer 2", correct: true},
                { text: "Answer 3", correct: true},
                { text: "Answer 4", correct: false},
            ]
        },
        {
            question: "Question 5?",
            answers: [
                { text: "Answer 1", correct: false},
                { text: "Answer 2", correct: true},
                { text: "Answer 3", correct: false},
                { text: "Answer 4", correct: false},
            ]
        }
        
    ]
    function checkAnswer(){
        
    }


