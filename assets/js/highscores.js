let highScoresText = document.querySelector("#high-scores");
let highScoresTag = '';
let initialsText = document.querySelector("#initials");
let initials = initialsText.value;


// High score list creattion
for (let i = 0; i < localStorage.length; i++) {
highScoreData = JSON.parse(localStorage.getItem(i+1));
highScoresTag = highScoresTag.concat('</br><div id="high-scores">'+ highScoreData.initials + " "+"-"+" " + highScoreData.score +'</div>');
}

highScoresText.innerHTML = highScoresTag;