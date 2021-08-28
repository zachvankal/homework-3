// Assignment Code
var generateBtn = document.querySelector("#generate");
var psswdLetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var psswdLetLow = "abcdefghijklmnopqrstuvwxyz"
var psswdNum = "1234567890";
var psswdSym = "!@#$%^&*<>?";
var lowercaseIsTrue
var uppercaseIsTrue
var specialCharIsTrue
var numericIsTrue 
// Write password to the #password input
function getPasswordOptions() {
  var text;
  var psswdLen =parseInt( prompt(
    "please enter length of password great than 8 and less than 128",
    "number"
  ));

  if (psswdLen >= 8 && psswdLen <= 128 && psswdLen != null && psswdLen != "") {
    console.log(psswdLen + ": is the length of the password");
  }

  lowercaseIsTrue = confirm("do you want lower case");
  uppercaseIsTrue = confirm("do u want this uppercase");
  specialCharIsTrue = confirm("do you  want special characters");
  numericIsTrue = confirm("do you want numbers");
  var passwordoptions = {
    psswdLen,
    lowercaseIsTrue,
    uppercaseIsTrue,
    specialCharIsTrue,
    numericIsTrue,
  };
  return passwordoptions;
}

function getRandomCharacter(chars) {
  var randomIndex =  chars.charAt (Math.floor(Math.random() * chars.length))
  return randomIndex
}

function generatePassword() {
  var options = getPasswordOptions();
  console.log("options: ", options);
  // declare array that will hold potential characters for final password
  var eligibleCharacters = ''
  var minimumCharacters = ''
  // declare array that will hold actual characters in final password
  var finalPassword = []

  if(lowercaseIsTrue){
    var randomLowerCase = getRandomCharacter(psswdLetLow)
    console.log(randomLowerCase)
    eligibleCharacters += randomLowerCase
    minimumCharacters += psswdLetLow
    console.log(minimumCharacters)
  }
   
  if(uppercaseIsTrue){
       var randomUpperCase = getRandomCharacter(psswdLetCap)
       console.log(randomUpperCase)
       eligibleCharacters += randomUpperCase
       minimumCharacters += psswdLetCap
       console.log(minimumCharacters) 
   }
  if(specialCharIsTrue){
  var randomSpecialChar = getRandomCharacter(psswdSym)
  console.log(randomSpecialChar)
 eligibleCharacters += randomSpecialChar
 minimumCharacters += psswdSym
 console.log(minimumCharacters)
  }

 if(numericIsTrue){
     var randomNumber = getRandomCharacter(psswdNum)
     console.log(randomNumber)
     eligibleCharacters += randomNumber
     minimumCharacters += psswdNum
     console.log(minimumCharacters)
 }

   for (var z = 0; z < options.psswdLen; z++) {
       finalPassword += minimumCharacters.charAt(Math.floor(Math.random()*minimumCharacters.length))
       console.log(finalPassword)

    // declare variable that holds a random character from the eligibleCharacters array
    // push that variable into the results array
  }
var finalPasswordArray = finalPassword.split("")
var gaurenteedCharacters = eligibleCharacters.split("")
  for (var i = 0; i < gaurenteedCharacters.length; i++) {
      finalPasswordArray[i] = gaurenteedCharacters[i]
    // assign the current index of finalPassword to be the current value of the minimumCharacters array

    
  }
  return finalPasswordArray.join("")
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
