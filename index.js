
var readlineSync = require('readline-sync');
const chalk = require('chalk');
// installing rerequired packages
// _______________________________________________________________________



questionOne = {
  question: "where I am from   ",
  answer: "Bareilly",
}
questionTwo = {
  question: "What is my age Rn in 2020",
  answer: "18",
}
questionThree= {
  question:"My birthday is on ? (use DD/MM)",
  answer:"28/07",
}

questionFour= {
  question:"THe year I completed my school ",
  answer:"2020",
}

questionFive= {
  question:"My favorite SuperHero from Marvel",
  answer:"IronMan",
}

questionSix= {
  question:`My favfavorite super hero from DC`,
  answer:"batman",
}



// all questions till here______________________________________________________________

var questionList=[ questionOne,questionTwo,questionThree

]
var life=1
var score=0

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  var conversion =userAnswer.toLowerCase()
  if(conversion==answer){
    console.log(chalk.green('Right answer! '))
    score++
   console.log(chalk.yellow('your score is : '+score))
  }
  else(life--,console.log(chalk.red('Game over ')),console.log(chalk.yellow('your score is : '+score)),console.log("made by harshit saxena"))
}

// function to use to verify answers___________________________________________________
var userName = readlineSync.question("Please enter your Name  ")

console.log(chalk.green('Welcome '+userName));
console.log(chalk.hex("#ED1D24")('Lets play the Ultimate Marvel Quiz '+userName));

// the game starts here 
var iterations=questionList.length
for (i=0;i<iterations&& life>0;i++){
  quiz(questionList[i].question,questionList[i].answer)
}