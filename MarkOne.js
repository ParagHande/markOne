var readLineSync = require("readline-sync");

var point = 0;


console.log("=========================================");
console.log("          Welcome to my Quiz             ");
console.log("=========================================");
console.log("   Let's check how well do you kno me!!  ");
console.log("=========================================");

var highestScore = [
  {name:"Parag", score:6},

]

function welcome (){
  var userName = readLineSync.question("Enter Your Name : ");
    console.log("Nice name"); 
    console.log("Welcome " + userName);
  var userName = readLineSync.question("Do you know Parag?, (yes or no) : ");

 if (userName === "yes"){
    console.log("Thats Great");

  } 
  else {
    console.log("Ohh..!!, Its ok");
    console.log("--------");

    console.log("Guess the answer");


  }
 console.log("--------");

}

var questionAnswer = [
    {question: "What is his Name ? : ", answer: "Parag"}, 
    {question: "What is his date of year : ", answer: "1995"},
    {question: "What is his Hobby ? , (Painting or Singing): ", answer: "Painting"}, 
    {question: "What type of song he listen ? , (old or new) : ", answer: "Old"}, 
    {question: "What is his Weakness ?, (Laziness or Forgetting things) : ", answer: "Laziness"},
    {question: "What is his strength ?, (Creative or Will Power) : ", answer: "Creative"}
    ];



function play(question, answer){
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right");
    console.log("Added +1 point");
    point = point + 1; 
    console.log("Current score is : " + point); 

  }

  else {
    console.log("You are wrong ");
    console.log("No point will be added");
    console.log("Current score is : " + point); 
    
  }
  console.log("--------")
}


function game () {
  for (var i=0; i<questionAnswer.length; i++) {
    var currentQuestion = questionAnswer[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

welcome();
game();

console.log("Total score : "+ point);
console.log("=========================================")
console.log("Quiz over..., Thank you to Participate...")
console.log("=========================================")
 
function myScore(){

  if (point >= 4){
    console.log("Great!!!, You know me very well... ");
    console.log(" You Score : " + point); 

  } else if (1 < point ){
    console.log("Ohh!!., You know me little bit... ");
    console.log(" You Score : " + point); 
  }
  else {
    console.log(" You dont know me ");
    console.log(" You Score : " + point); 
  }

console.log("=========================================")

// array.map(function(currentValue, index, arr), thisValue)
highestScore.map(point => console.log( "The highest score by, ", point.name," : ", point.score))
}

myScore();