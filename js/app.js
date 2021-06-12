
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
