// Assignment code here

var allCharactersRandom = [];
var generatedPassword = [];

function generatePassword(){
  
  var charLength = window.prompt("How many characters would you like your password to contain? Your password must be between 8-128 characters." ); //ask the user to put an input
  if(8 <= charLength && charLength <= 128 ){
    
    var isSpecialChar = window.confirm("Click OK to confirm including special characters."); //ask the user if they want to include special characters
      if(isSpecialChar){
        // Special characters
        var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[" , "]", "^", "_", "`", "{", "|", "}", "~"];
      }else{
        var specialChar = [];
      }

    var isNumericChar = window.confirm("Click OK to confirm including numeric characters."); //ask the user if they want to include numeric characters
      if(isNumericChar){
        // Numeric characters
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      }else{
        var numbers = [];
      }

      var isLowerCaseChar = window.confirm("Click OK to confirm including lower case characters."); //ask the user if they want to include lower case characters
      if(isLowerCaseChar){
        // Alphabetical lower case characters
        var alphabethLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      }else{
        var alphabethLowerCase = [];
      }

      var isUpperCaseChar = window.confirm("Click OK to confirm including upper case characters."); //ask the user if they want to include upper case characters
      if(isUpperCaseChar){
        // Alphabetical upper case characters
        var alphabethUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      }else{
        var alphabethUpperCase = [];
      }

      //combines all the arrays into one
      var allCharacters = [...specialChar, ...numbers, ...alphabethLowerCase, ...alphabethUpperCase]; 
      
      //prompts user to choose at least one type of characters
      if (!isSpecialChar && !isNumericChar && !isLowerCaseChar && !isUpperCaseChar) {
        window.alert('You have to choose at least one type of character type to generate a password.');
      }else{

      // randomly selecting array elements and filling another array with random characters
      for (let i = 0; i < charLength; i++) {

        allCharactersRandom[i] = Math.floor(Math.random()*(allCharacters.length+1)); // maximum limits: 0 <= x <= 188
        generatedPassword[i] = allCharacters[allCharactersRandom[i]];

      }
        return generatedPassword.join("");
      }
  }else{
    window.alert("Wrong input, try again.");
    generatePassword();
  }
  }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
