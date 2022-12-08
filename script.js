const words = ['bankruptcy', 'fox', 'king', 'republican', 'amuse', 'alone', 'sport', 'squad', 'wrong', 'women']
const random = Math.floor(Math.random() * words.length)
const pc = words[random]
const letters = document.querySelectorAll('.keys')
const img = document.getElementById('image')
let mistakes = 0
const endMsg = document.getElementById('gameover').firstElementChild


window.addEventListener('keypress', function(event){
    let keyLetter = this.document.getElementById(event.key.toUpperCase())
    if(pc.includes(event.key)){
        keyLetter.className = 'used';
        let index = pc.indexOf(event.key)
        let foo = clue.innerHTML.split('')
        foo[index] = event.key
        clue.innerHTML = foo.join('')
    }else{
        mistakes++
    }
    checkMistakes()
})


letters.forEach(item => {
    item.addEventListener('click', isIncluded)
})
const clue = document.getElementById('clue').firstElementChild
clue.innerHTML = ''
for(let i=0; i < pc.length; i++){
    clue.innerHTML += '_'
}


function isIncluded(event){
    const user = event.target.innerText.toLowerCase();
    console.log(pc)
    if(pc.includes(user)){
        event.target.className = ' used'
        const index = pc.indexOf(user)
        let foo = clue.innerHTML.split('')
        foo[index] = user
        clue.innerHTML = foo.join('')

    }
    else{
        mistakes++
    }
    checkMistakes()
}

function checkMistakes(){
    if((mistakes < 6) && (clue.innerHTML == pc)){
        img.innerHTML = '<img src="assets/winner.png" alt="hangman">'
    }else if(mistakes == 1){
        img.innerHTML = '<img src="assets/hangman1.png" alt="hangman">'
    }else if(mistakes == 2){
        img.innerHTML = '<img src="assets/hangman2.png" alt="hangman">'
    }else if(mistakes == 3){
        img.innerHTML = '<img src="assets/hangman3.png" alt="hangman">'
    }else if(mistakes == 4){
        img.innerHTML = '<img src="assets/hangman4.png" alt="hangman">'
    }else if(mistakes == 5){
        img.innerHTML = '<img src="assets/hangman5.png" alt="hangman">'
    }else if(mistakes == 6){
        img.innerHTML = '<img src="assets/hangman6.png" alt="hangman">'
        endMsg.style.display = 'block';
        clue.innerHTML = `The word was : ${pc}`
        clue.style.letterSpacing = 'normal'
    }
}