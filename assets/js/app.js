let numMin = 1
let numMax = 100
let nbAttempts = 3
let choice = 50
let attempt = 0
let win = false
let numMystere = ""
const answer = document.getElementById("answer")
const button= document.querySelector("button")
const input = document.querySelector("input")
const config = {
  noob: {
    attemp: 5,
    mysteryNumber: [1, 10],
  },
  beginner: {
    attemp: 4,
    mysteryNumber: [1, 25],
  },
  hard: {
    attemp: 2,
    mysteryNumber: [1, 50],
  },
  hell: {
    attemp: 1,
    mysteryNumber: [1, 100],
  },
}

function genereNumMystere() {
  numMystere = Math.floor(Math.random() * numMax + numMin)
  console.log(numMystere)
  game()
} 

function reset() {
  attempt = 0
  genereNumMystere()
}

function game() {
  if(choice === numMystere) {
    answer.innerHTML = `<p>C'est gagné ! :O </p>`
    win = true
  } 
  if(choice < numMystere) {
    answer.innerHTML = `<p>C'est + ! </p>` 
  } 
  if(choice > numMystere) {
    answer.innerHTML = `<p>C'est - ! </p>` 
  } 
  if (attempt === nbAttempts && win === false) {
    answer.innerHTML = `<p>C'est perdu ! :(  </p>` 
    answer.innerHTML = `<p>Le numéro mystère était le ${numMystere}, dommage hehe !</p>` 
  }
}

button.addEventListener("click", () => {
  attempt++
  choice = Number(input.value)
  console.log(typeof choice)
  if(choice < numMin || choice > numMax) {
    alert(`votre numéro doit être compris entre ${numMin} et ${numMax}`)
  } else {
   
  }
})

