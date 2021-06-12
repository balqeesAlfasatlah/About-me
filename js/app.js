
' use strict';
var score = 0;
let userName = prompt('Hello , Whats your name ?');
alert('Welcome to our website ' + userName);

function q1() {
  let favFood = prompt('do you think i like pizza ?').toLowerCase();
  if (favFood === 'yes' || favFood === 'y') {
    score++;
    alert('you are correct , pizaa my favourite food ^^');
    //console.log('correct');
  } else if (favFood === 'no' || favFood === 'n') {
    alert('you are wrong its my favourite food');
  } else {
    alert('please type (yes) or (no) or (y) or (n)');
  }
}

q1();


function q2() {
  let myAge = prompt('Am i 23 years old ?').toLowerCase();
  if (myAge === 'yes' || myAge === 'y') {
    score++;
    alert('you are correct , I am almost 23 ^^');
    //console.log('correct');
  } else if (myAge === 'no' || myAge === 'n') {
    alert('you are wrong ');
  } else {
    alert('please type (yes) or (no) or (y) or (n)');
  }
}
q2();

function q3() {
  let favColor = prompt('do you think is the red color my favourite color ?').toLowerCase();
  if (favColor === 'yes' || favColor === 'y') {
    score++;
    alert('you are correct , almost my all clothes with that color ^^');
    //console.log('correct');
  } else if (favColor === 'no' || favColor === 'n') {
    alert('you are wrong its my favourite color');
  } else {
    alert('please type (yes) or (no) or (y) or (n)');
  }
}
q3();



function q4() {
  let study = prompt('do you think i like studying ?').toLowerCase();
  if (study === 'yes' || study === 'y') {
    alert('you are wrong , i dont like studying ');

  } else if (study === 'no' || study === 'n') {
    score++;
    alert('you are correct  i dont like studing :)');
    //console.log('correct');
  } else {
    alert('please type (yes) or (no) or (y) or (n)');
  }
}
q4();



function q5() {

  let travel = prompt('do you think i like travelling ?').toLowerCase();
  if (travel === 'yes' || travel === 'y') {
    alert('you are correct , I wish to travel around the world ^^');
    score++;
    //console.log('correct');
  } else if (travel === 'no' || travel === 'n') {
    alert('you are wrong , who dont like travel ! ');
  } else {
    alert('please type (yes) or (no) or (y) or (n)');
  }
}

q5();



// var counter = 1;
// if (counter === 5) {
//   alert('you are finish your chances to guess , the correct answer is 12');
// }
// while (counter < 5 && number !==12) {
//   var number = parseInt(prompt('Guess my favorite number'));
//   if (number > 12) {
//     alert('too high, please guess again');
//     counter++;
//   } else if (number < 12) {
//     alert('too low!, please guess again');
//     counter++;
//   }
// }
// if (number === 12) {
//   alert('That is correct! My favorite number is 12');
//   score++;
//   counter = 5;
//   //  console.log('correct');
// }




// var favFruit = ['bnana', 'strawberry', 'orange', 'watermelon', 'manga'];

// for (var i = 0; i < 6; i++) {
//   var userAnswer = prompt('guess my favorite fruit');
//   var guess = userAnswer.toLowerCase();

//   for (var j = 0; j < favFruit.length; j++){
//     if (guess === favFruit[j]) {
//       alert('it right !!');
//       score++;
//       i = 6;
//       break;
//       //  console.log('correct');
//     }
//   }
//   if (i !==6){
//     alert('wrong answer,please  try again');
//   }
// }

// alert('My favorite fruits are: bnana, strawberry, orange, watermelon, manga');

// alert('Well done!... You got ' + score + ' correct answers');





/*let userName = prompt('please enter Name');
alert(`welcome to my website ${userName} let is enjoy now you will be discover me by answer in yes or no or y or n okay `);
let score = 0;
function game(question,correctAnswer,uncorrectAnswer){
  let userInput ;
  do{
    userInput = prompt(question).toLowerCase();
  }while(userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n' );
  if(userInput === 'yes' || userInput === 'y'){
    alert(correctAnswer);
    score++;
  }
  else {
    alert(uncorrectAnswer);
  }
}
game('do you think i like pizza ?','well done ','wrong answer');
game('Am i 23 years old ?','well done ','wrong answer');
game('do you think is the red color my favourite color ?','well done ','wrong answer');
game('do you think i like studying ?','well done','wrong answer');
game('do you think i like travelling ?','well done ','wrong answer');
*/


function q6(){
  alert('now the 6th quection you have 4 attempts');
  let gussNumber = prompt('Guess my favorite number ');
  outerloop: for (let i =0;i < 3;i++){
    if(gussNumber == 12){
      alert('bravooo');
      score++;
      break outerloop;
    }else if(gussNumber > 12){
      alert('Too high');
      gussNumber = prompt('try again from 1 to 20');
    }else if(gussNumber < 12){
      alert('Too low');
      gussNumber = prompt('try again from 1 to 20');
    }
  }
  alert('the correct answer is 12');
}
q6();

function q7(){
  alert('now the 7th question you have 6 attempts');
  let array = ['apple','watermelon','orange','banana','grapes','pomegranate'];
  let fruite = prompt('can you guess my favorite fruite!');
  outerloop: for (let i=0;i<6;i++){
    for(let j=0;j<array.length;j++){
      if(fruite === array[j]){
        alert('well done ^_^');
        score++;
        break outerloop;
      }
    }
    fruite = prompt('try again');
  }
  alert('This is the answer :apple, watermelon ,orange ,banana ,grapes ,pomegranate');
}
q7();

alert(`you score is :${score}`);
alert('thank you for visiting our websites ' + userName);
