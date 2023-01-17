// Variablss
let startScreen = document.querySelector("#start");
let startBtn = document.querySelector("#start-btn");
let infoBox = document.querySelector(".info-box");
let exitBtn = document.querySelector(".quit");
let continueBtn = document.querySelector(".restart");
let quizBox = document.querySelector(".quiz-box");
let endBox = document.querySelector("#quiz-end");
let submitBtn = document.querySelector("#save-score");
let clearBtn = document.querySelector("#clear-score");
let initialsText = document.querySelector("#initials");
let existing = localStorage.getItem('results');
existing = existing ? existing.split(',') : [];
let queCount = 0;
let counter = 75;
let score = 0;

// On click
continueBtn.onclick = ()=> {
    infoBox.classList.add("hide");
    startScreen.classList.remove("hide");
};

// If start button is clicked
startBtn.onclick = () => {
    function countdown(){
        counter--;
            if (counter === 0){
                clearInterval(startCountdown)
                quizEnd()
            };
    let timeRem = document.querySelector("#time-rem");
    let timeTag = "<span>Time Left: "+ counter + " second(s)" +  "</span>"
    timeRem.innerHTML = timeTag;
    };
    var startCountdown = setInterval(countdown, 1000);
    startScreen.classList.add("hide");
    quizBox.classList.remove("hide");
    showQuestions(queCount)
};

// Fetch questions and choices
function showQuestions(index) {
    if (queCount>=10){
        return;
    }
    let queText = document.querySelector(".que-text");
    let optionList = document.querySelector("#choices");
    let queTag = "<span>"+ questions[index].numb + ". "+ questions[index].question +"</span>";
    let optionTag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] + '<span></span></div>'
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    let option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Next question is answered
function optionSelected(answer) {
    if (queCount>=10){
        return;
    }
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    if(userAns == correctAns){
        console.log("Answer is Correct");
        let response = document.querySelector("#response");
        response.innerHTML = '<div id="response"><span>Correct!</span></div>';
        setTimeout(nextQuestion, 500)
        score += 1

    }else{
        console.log("Answer is Wrong");
        let response = document.querySelector("#response");
        response.innerHTML = '<div id="response"><span>Wrong!</span></div>';
        setTimeout(nextQuestion, 500)
        counter -= 5
    }
}
function nextQuestion() {
    queCount++;
    if(queCount == 10){
        
        quizEnd()
    };
    showQuestions(queCount);
    let response = document.querySelector("#response");
    response.innerHTML = '<div id="response"><span></span></div>';
    }

// Quiz ends when completed or timer ends
function quizEnd() {
    quizBox.classList.add("hide");
    endBox.classList.remove("hide");
    let scoreText = document.querySelector(".score");
    let scoreTag = '<h3 class="score"> Your score was '+ score +' out of 10!</h3>';
    scoreText.innerHTML = scoreTag; 
}
// Initial submition for scores
submitBtn.onclick = () => {
    let initials = initialsText.value;
    //Store Initials and Score in Local Storage
    var resultsDataObj = {
        initials: initials,
        score: score
    }
    localStorage.setItem((localStorage.length+1), JSON.stringify(resultsDataObj));
    initialsText.value = ""
    location.reload();
}

clearBtn.onclick = () => {
    // Clear local storage
    localStorage.clear();
}