
" use strict";
 let userName = prompt("Hello , Whats your name ?");
 alert("Welcome to our website " + userName);

 let favFood = prompt("do you think i like pizza ?").toLowerCase();
 if(favFood === 'yes' || favFood === 'y'){
     alert('you are correct , pizaa my favourite food ^^');
   //  console.log('correct');
 }else if(favFood === 'no' || favFood === 'n'){
     alert('you are wrong its my favourite food');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }


 let myAge = prompt("Am i 23 years old ?").toLowerCase();
 if(myAge === 'yes' || myAge === 'y'){
     alert('you are correct , I am almost 23 ^^');
     //console.log('correct');
 }else if(myAge === 'no' || myAge === 'n'){
     alert('you are wrong ');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }


  let favColor = prompt("do you think is the red color my favourite color ?").toLowerCase();
 if(favColor === 'yes' || favColor === 'y'){
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
     alert('you are correct  i dont like studing :)');
    // console.log('correct');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }



 let travel = prompt("do you think i like travelling ?").toLowerCase();
 if(travel === 'yes' || travel === 'y'){
     alert('you are correct , I wish to travel around the world ^^');
    // console.log('correct');
 }else if(travel === 'no' || travel === 'n'){
     alert('you are wrong , who dont like travel ! ');
 }else{
     alert('please type (yes) or (no) or (y) or (n)');
 }

 alert(' thank you for visiting our website  ' + userName);
 