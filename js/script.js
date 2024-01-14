let isVisible = false;
let flash_no = 0;

function addFlashcard() {
    let question = document.getElementById('question').value;
    let answer = document.getElementById('answer').value;

    let flashcards = document.getElementById("flashcards");
    flashcards.innerHTML += "<div class='flashcard " + flash_no + "'><p class='qst'>" + question + "</p><p class='answ' id='k" + flash_no + "'>" + answer + "</p></div>";
    flash_no+=1;

    let fc = document.getElementsByClassName('flashcard');
    for(let i = 0; i < fc.length; i++){
        fc[i].addEventListener("click", function(){
            console.log(document.querySelector("#k" + i));
            let k = document.querySelector("#k" + i);
            console.log(k);
            
            k.classList.toggle('hide');
        });
    }
}
function hideCreateBox() {
    let createBox = document.getElementById('createBox');
    createBox.style.visibility = 'hidden';
    createBox.style.position = 'absolute';
}
function newCard(){
    let createBox = document.getElementById('createBox');
    createBox.style.visibility = 'visible';
    createBox.style.position = 'relative';
}
function delCard(){
    let fc = document.getElementsByClassName('flashcard');
    if (fc.length > 0){
        fc[fc.length-1].remove();
    }
}