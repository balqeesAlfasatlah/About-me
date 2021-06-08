
" use strict";
let score = 0;
 let userName = prompt("Hello , Whats your name ?");
 alert("Welcome to our website " + userName);

 let favFood = prompt("do you think i like pizza ?").toLowerCase();
 if(favFood === 'yes' || favFood === 'y'){
     score++;
     alert('you are correct , pizaa my favourite food ^^');
   //  console.log('correct');
 }else if(favFood === 'no' || favFood === 'n'){
     alert('you are wrong its my favourite food');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }


 let myAge = prompt("Am i 23 years old ?").toLowerCase();
 if(myAge === 'yes' || myAge === 'y'){
    score++;
     alert('you are correct , I am almost 23 ^^');
     //console.log('correct');
 }else if(myAge === 'no' || myAge === 'n'){
     alert('you are wrong ');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }


  let favColor = prompt("do you think is the red color my favourite color ?").toLowerCase();
 if(favColor === 'yes' || favColor === 'y'){
    score++;
     alert('you are correct , almost my all clothes with that color ^^');
     //console.log('correct');
 }else if(favColor === 'no' || favColor === 'n'){
     alert('you are wrong its my favourite color');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }



 let study = prompt("do you think i like studying ?").toLowerCase();
 if(study === 'yes' || study === 'y'){
     alert('you are wrong , i dont like studying ');
     
 }else if(study === 'no' || study === 'n'){
    score++;
     alert('you are correct  i dont like studing :)');
    // console.log('correct');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }



 let travel = prompt("do you think i like travelling ?").toLowerCase();
 if(travel === 'yes' || travel === 'y'){
     alert('you are correct , I wish to travel around the world ^^');
     score++;
    // console.log('correct');
 }else if(travel === 'no' || travel === 'n'){
     alert('you are wrong , who dont like travel ! ');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }




    var counter = 1;
    if (counter === 5) {
        alert('you are finish your chances to guess , the correct answer is 12');
    }
    while (counter < 5 && number !==12) {
        var number = parseInt(prompt('Guess my favorite number'));
        if (number > 12) {
            alert('too high, please guess again');
            counter++;
        } else if (number < 12) {
            alert('too low!, please guess again');
            counter++;
        }
    }
    if (number === 12) {
        alert('That is correct! My favorite number is 12');
        score++;
        counter = 5;
        //  console.log('correct');
    }


    
    
        var favFruit = ['bnana', 'strawberry', 'orange', 'watermelon', 'manga'];
    
        for (var i = 0; i < 6; i++) {
            var userAnswer = prompt('guess my favorite fruit');
            var guess = userAnswer.toLowerCase();
    
            for (var j = 0; j < favFruit.length; j++){
                if (guess === favFruit[j]) {
                    alert('it right !!');
                    score++;
                    i = 6;
                    break;
                    //  console.log('correct');
                }
            }
            if (i !==6){
                alert('wrong answer,please  try again');
            }
        }
    
    alert('My favorite fruits are: bnana, strawberry, orange, watermelon, manga');
    
    alert('Well done!... You got ' + score + ' correct answers');


    alert('thank you for visiting our websites ' + userName);

 
     


 
 
 
 
