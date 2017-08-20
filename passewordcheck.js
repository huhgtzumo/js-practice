function isPasswordValid(input){
  clickupper(input);
  clicklower(input);
  clicklong(input);
  hasSpecialCharacter(input);
  function clickupper(input){
    for(var a=0;a<input.length;a++){
     if (input[a]===input[a].toUpperCase())           {return true; }  
    }
  }
  function clicklower(input){
    for(var b=0;b<input.length;b++){
     if (input[b]===input[b].toLowerCase())           {return true; }  
    }
  }
  
  function clicklong(input){
    for(var a=0;a<input.length;a++){
     if (input.length>=8){return true; }  
    }
  }
  
  function hasSpecialCharacter(input){
    var Special =['!','@','$','#','%','^']
    for(var a=0;a<input.length;a++){
      for(var z=0;z<Special.length;z++){
        if(input[a]===Special[z]){
          return true}
      }
     
    }
  }
  
  
  if (clickupper(input)) {}
    else{console.log('need one upper letter')}  
  if (clicklower(input)) {}
    else{console.log('need one lower letter')}  
  if (clicklong(input)) {}
    else{console.log('need at least 8 word')}  
  if (hasSpecialCharacter(input)) {}
    else{console.log('need at least 1 special letter ex:!@#$%^')} 
  
  if(clickupper(input)&&
  clicklower(input)&&
  clicklong(input)&&
  hasSpecialCharacter(input)){console.log('your password is good')}
}  
  


isPasswordValid('AAAA!asaaqsca') ;
