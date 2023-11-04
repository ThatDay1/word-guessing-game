const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-btn"),
    hint = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    answerInput = document.querySelector(".answer-input");

const randomWord = () => {
    let randObj = wordList[Math.floor(Math.random() * wordList.length)];
    //console.log(randObj);
    let words = randObj.word;
    hint.innerText = randObj.hint;
    console.log(words);

    let html = "";

    for (let i = 0; i < words.length; i++) {
        html += '<input type="text" disabled>'
    }
    inputs.innerHTML = html;
}
randomWord()

resetBtn.addEventListener("click", randomWord)