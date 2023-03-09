// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
//  var username = prompt("Enter Username")
  var passwordLength = parseInt(prompt("Enter password length between 8 to 126"))
  if(passwordLength < 8 || passwordLength > 126 || isNaN(passwordLength)){
    return "Invalid Password length entered..." // || or operator
  }
  var acceptUppercase = confirm("Do you like to have Uppercase alphabets in your password")
  var acceptLowercase = confirm("Do you like to have Lowercased alpabets in your password")
  var acceptSpecialcharacters = confirm("Do you like to have Special Characters in your password")
  var acceptNumbers = confirm("Do you like to have Numbers in your password")
  if(!acceptLowercase && !acceptSpecialcharacters && !acceptNumbers && !acceptUppercase){
    return "Please select an option..."
  }
  // ! not operator  && and operator
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
