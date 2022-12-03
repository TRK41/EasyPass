// Assignment Code
const generateBtn = document.querySelector("#generate");
// var characters = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
var characters = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password
let length = prompt('How long do you want your password to be ?');
if (length >=8 && length <= 128) { 
  length = true;
  } else {

    length = false
    return alert ("Password length is either too short or too long! Choose a length of atleast 8 characters and no more than 128 characters")
  }

let lowercase = confirm('Would you like to include lowercase ?');
 if(lowercase = true){
  characters = lowercase + characters; 
} else {alert(lowercase,false);
  
}

}
console.log(characters)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword );



function generatePassword(length,characters) {
  let passwordText ="";
  var t = Math.floor(Math.random()*26) + 1;
  for (i =0; i < length; i++) {
    passwordText += characters.charAt(t);
  }
  return passwordText;
};
  
  




  