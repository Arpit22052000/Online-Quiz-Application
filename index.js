
// Fetching the questions
let quizQuestions;

async function fetchQuestions() {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        quizQuestions = data;
    } catch (error) { 
        console.log("Error fetching question", error)
    }
}

fetchQuestions();

// Function to start quiz
function startQuiz() {
    displayQuestion();
}


// Function to display the next quiz
function displayQuestion() {
    
}


// jQuery
$(document).ready(function () {
    $("#showans").on({
        click: function () {
            $('#actualans').toggle();
        }
    });
});