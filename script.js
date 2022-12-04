// All const strings 
const generateBtn = document.getElementById("generate");
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const spchars = "''`!#$%&()*+,-./:;<=>?@[\]^_{|}~";
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const passwordText = document.getElementById("password") // location of where the password will be displayed in the html


// Add event listener to generate button
generateBtn.addEventListener("click", function generatePassword() {
  let characters = ""
  let length = prompt('How long do you want your password to be ?'); //Asking user for length of the password
  if (length >= 8 && length <= 128) {   //Setting the boundaries for password length
    length == true;   //Length is true if it falls between 8 and 128 characters
  } else {
    length = false //If false a message with directions is prompted to tell user that the password doesn't fall between the boundaries that were set 
    return alert("Password length is either too short or too long! Choose a length of atleast 8 characters and no more than 128 characters")
  }

  let uppercase = confirm('Would you like to include uppercase ?'); //asking user if they want to include uppercase
  if (uppercase == true) { //if user selects OK then uppercase is included
    (characters += uppercases); // adds uppercase to the characters string
  } else { false; } //if user selects cancel then uppercase is not included


  let lowercase = confirm('Would you like to include lowercase ?');//asking user if they want to include lowercase
  if (lowercase == true) { //if user selects OK then lowercase is included
    (characters += lowercases); // adds lowercase to the characters string
  } else { false; } //if user selects cancel then lowercase is not included

  let number = confirm('Would you like to include numbers ?');//asking user if they want to include numbers
  if (number == true) { //if user selects OK then numbers are included
    (characters += numbers);//adds numbers to the characters string
  } else { false; } //if user selects cancel then numbers are not included

  let spchar = confirm('Would you like to include special characters ?');//asking user if they want to include special characters
  if (spchar == true) { //if user selects OK then special characters are included
    (characters += spchars);//adds special characters to the characters string
  } else { false; } //if user selects cancel then special characters are not included

  passwordText.value = generatePassword(length, characters);


  function generatePassword(length, characters) { //function to generate password
    let password = "";
    for (let i = 0; i < length; i++) { //for loop for the password
      password += characters.charAt(Math.floor(Math.random() * characters.length) //randomize the password with math floor and math random at the length given
      );
    }
    return password; //returning the final result of the password
  };
 
}

);


