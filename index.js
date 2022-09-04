const readlineSync = require("readline-sync")

let userName = readlineSync.question("Welcome User,May I Have Your Name")

console.log(`Welcome ${userName} , to the game "How Well Do You Know Parth"`)


// the database
const questionsDatabase = [{
  question: "Where does Parth live? ",
  answer: "Delhi"
}, {
  question: "Parth's favorite dish? ",
  answer: "Golgappe"
}, {
  question: "Parth's favorite hobby? ",
  answer: "Learning to code"
}, {
  question: "Parth's favorite sport? ",
  answer: "Cricket"
}, {
  question: "Parth's favorite singer? ",
  answer: "Arjit Singh"
}, {
  question: "Parth's favorite movie? ",
  answer: "The 83"
}
]

let score = 0
const play = function(question, answer) {

  let userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++
    console.log(`Your are rigth and your current is ${score}`)
    console.log("-------------------")
  } else {
    score--
    console.log(`You are wrong and your current score is ${score}`)
    console.log("-------------------")
  }

}

for (let question of questionsDatabase) {
  play(question.question, question.answer)
}
console.log("-------------------")
console.log(`Your Final Score is: ${score}`)