
' use strict';
let userName = prompt('please enter Name');
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



function q6(){
  alert('now the 6th quection you have 4 attempts');
  let gussNumber = prompt('Guess my favorite number ');
  outerloop: for (let i =0;i < 3;i++){
    if(gussNumber == 12){
      alert('bravo');
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
