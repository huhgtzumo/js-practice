var Input= prompt("'Rock', 'Paper', or 'Scissors.?");
var computer = Math.ceil(Math.random()*3)

if (computer===1){var choose = "Scissors";}
else if (computer===2){var choose = "Rock";}
else if (computer===3){var choose = "Paper";}
else {console.log("system wrong!");}
console.log(`computer choose :${choose}`);
console.log(`you choose :${userInput}`);
switch(computer){
  case 1:
    switch(userInput){
      case 'Rock':
        console.log("uwin!");break;
      case 'Scissors':
        console.log("tied!");break;
      case 'Paper':
        console.log("ulose!");break;  
    console.log("computer choose1");break;}
    break;
  case 2:
    switch(userInput){
      case 'Rock':
        console.log("tied!");break;
      case 'Scissors':
        console.log("ulose");break;
      case 'Paper':
        console.log("uwin");break;
    console.log("computer choose2");break;}
    break;
  case 3:
      switch(userInput){
      case 'Rock':
        console.log("ulose!");break;
      case 'Scissors':
        console.log("uwin");break;
      case 'Paper':
        console.log("tied");break;  
    console.log("computer choose3");break;}
    break; 
               }


console.log(computer );
