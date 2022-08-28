// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
}

function prompt(){
  var length = prompt('How long do you want your password to be ?');
  var lowercase = prompt('Would you like to include lowercase ?');
  var uppercase = prompt('Would you like to include uppercase ?');
  var number = prompt('Would you like to include numbers');
  var special = prompt('Would you like to include Special Characters');
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
