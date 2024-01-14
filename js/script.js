let num = 0;    
let isVisible = false;
let flash_no = 0;

if (localStorage.getItem('cards_num') > 0){
    for (let i = 1; i < localStorage.length; i++){
        document.getElementById("flashcards").innerHTML += "<div class='flashcard'><p class='qst'>" + JSON.parse(localStorage.getItem('card'+i)).question + "</p><p class='answ' id='k" + JSON.parse(localStorage.getItem('card'+i)).num + "'>" + JSON.parse(localStorage.getItem('card'+i)).answer + "</p></div>";
    }
    
    let fc = document.getElementsByClassName('flashcard');
    for(let i = 0; i < fc.length; i++){
        fc[i].addEventListener("click", function(){
            let k = document.querySelector("#k" + i);
            console.log(k);
            
            k.classList.toggle('show');
        });
    }
}

function addFlashcard() {
    let question = document.getElementById('question').value;
    let answer = document.getElementById('answer').value;

    let flashcards = document.getElementById("flashcards");
    flashcards.innerHTML += "<div class='flashcard'><p class='qst'>" + question + "</p><p class='answ' id='k" + flash_no + "'>" + answer + "</p></div>";

    let save = {
        num: flash_no,
        question: question,
        answer: answer
    }

    flash_no+=1;
    num += 1;

    localStorage.setItem('card' + num, JSON.stringify(save));
    localStorage.setItem('cards_num', num);

    let fc = document.getElementsByClassName('flashcard');
    for(let i = 0; i < fc.length; i++){
        fc[i].addEventListener("click", function(){
            let k = document.querySelector("#k" + i);
            console.log(k);
            
            k.classList.toggle('.show');
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

        localStorage.removeItem('card' + num)
        num = num - 1;
        localStorage.setItem('cards_num', num);
    }
}