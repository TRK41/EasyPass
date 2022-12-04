// Assignment Code
const generateBtn = document.getElementById("generate");
const uppercases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = "0123456789";
const spchar = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','"\"',']','^','_','`','{','|','}','~'];
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const passwordText =document.getElementById("password")


// Add event listener to generate button
generateBtn.addEventListener("click", function generatePassword ()
// Write password to the #password input
 {
let characters = ""
let length = prompt('How long do you want your password to be ?');
if (length >=8 && length <= 128) { 
  length == true;
  } else {

    length = false
    return alert ("Password length is either too short or too long! Choose a length of atleast 8 characters and no more than 128 characters")
  }

let lowercase = confirm('Would you like to include lowercase ?');
 if(lowercase === true){
  (characters += lowercases ); 
  
} else {return false;}

let number = confirm('Would you like to include numbers ?');
 if(number = true){
  (characters += numbers ); 
  
} else {return false;}




passwordText.value = generatePassword(length,characters);


  function generatePassword (length, characters) {
    let password ="";
    for (let i =0; i < length; i++) {
     password += characters.charAt(Math.floor(Math.random() * characters.length)
     );
    }
    return password;
  };
  console.log(length)
  console.log(numbers)
  console.log(passwordText.value)
}

);




  




  
  //const uppercases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  //const spchar = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','"\"',']','^','_','`','{','|','}','~'];


    //if(length >= 8){
  //  document.getElementById('password').innerHTML = length;
 // } 


 // if(uppercase,true){var uppercase = confirm('Would you like to include uppercase ?');}
 // else {alert(uppercase,false);}

 // if(number,true){var number = confirm('Would you like to include numbers');}
//  else {alert(number,false);}

 // if(special,true){ var special = confirm('Would you like to include Special Characters');}
 // else {alert(special,false);}
  
 // }
  
  //while(false) break;

  
 // let lowercase
   // if (lowercase == true) {
     // document.getElementById('generate').innerHTML = lowercases();
   // }
  // if true  
   //else
   //while true
  