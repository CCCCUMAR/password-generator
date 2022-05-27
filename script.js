// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// var generateBtn = document.querySelector("#generate")
//setting up code for prompts for password criteria

//putting all my values into arrays by category
var generateBtn = document.querySelector("#generate")

var number = [0,1,2,3,4,5,6,7,8,9]
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","{","]","}","|",":",";","'",",","<",".",">","/","?"]
var lettersUpper = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var lettersLower = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

var container = []
var newPassword = "";

var charType = ["number", "specialChar", "lettersUpper", "lettersLower"]

var userSelection = {
  upper: false,
  lower: false,
  special: false,
  number: false,
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){

  var charInput = prompt("How long do you want your password? (choose a number between 8-128)")
    //conditions for the password length
   if (charInput < 8 || charInput > 128){
      alert("You must enter a number between 8-128!")
      generatePassword()
    }
    
 
  var confirmNum = confirm("do you want to include numbers?");
        // numbers confirmation
        if (confirmNum) {
          userSelection.number = true
          container.push(number)
          console.log(userSelection)
        } else {
          userSelection.number = false
          console.log(userSelection)
        }

  var confirmChar = confirm("do you  want to include special characters?");
        // special characters confirmation
        if (confirmChar) {
          userSelection.special = true
          container.push(specialChar)
          console.log(userSelection)
        } else {
          userSelection.special = false
          console.log(userSelection)
        }
  var confirmUpper = confirm("do you  want to include uppercase letters?");
         // upper case confirmation
        if (confirmUpper) {
          userSelection.upper = true
          container.push(lettersUpper)
          console.log(userSelection)
        } else {
          userSelection.upper = false
          console.log(userSelection)
        }
  var confirmLower = confirm("do you  want to include lowercase letters?");
         // lower case confirmation
        if (confirmLower) {
          userSelection.lower = true
          container.push(lettersLower)
          console.log(userSelection)
        } else {
          userSelection.lower = false
          console.log(userSelection)
        }

  // what happens if no criteria is chosen
  if (userSelection.number===false&&userSelection.special===false&&userSelection.upper===false&&userSelection.lower===false){
    alert("You must choose criteria!")
    
  }

  numberGenerator(charInput)
  var generatePassword = newPassword
  newPassword =""
  return generatePassword
}

  function numberGenerator (x){
    for (let i=0; i< x; i++){
      var selectType = container[Math.floor(Math.random()*container.length)]
      newPassword = newPassword.concat(selectType[Math.floor(Math.random()* selectType.length)])
    }
    return newPassword
    
  }
 
  
  //   //all 4 criteria selected
  // else if (confirmNum && confirmChar && confirmUpper && confirmLower ){
    
  //   criteria = number.concat(specialChar, lettersUpper, lettersLower);
  // }
  
  //   //just 3 criteria selected
    
  // else if (confirmNum &&  confirmUpper && confirmLower ){
  //   criteria = number.concat(lettersUpper, lettersLower);
  // }

  // else if (confirmNum && confirmChar && confirmLower){
  //   criteria = number.concat(specialChar, lettersLower);
  // }
  // else if (confirmNum && confirmChar && confirmUpper){
  //   criteria = number.concat(specialChar, lettersUpper);
  // }
  // else if (confirmChar && confirmUpper && confirmLower){
  //   criteria = specialChar.concat(lettersUpper, lettersLower);
  // }

  //   //just 2 criteria selected
  //   else if (confirmNum && confirmChar){
  //     criteria = number.concat(specialChar);

  //   }
  //   else if (confirmNum && confirmUpper){
  //     criteria = number.concat(lettersUpper); 
  //   }
  //   else if (confirmNum && confirmLower){
  //     criteria = number.concat(lettersLower); 
  //   }
  //   else if (confirmChar && confirmUpper){
  //     criteria = specialChar.concat(lettersUpper); 
  //   }
  //   else if (confirmChar&& confirmLower){
  //     criteria = specialChar.concat(lettersLower);  
  //   }
  //   else if (confirmUpper && confirmLower){
  //     criteria = lettersUpper.concat(lettersLower);  
  //   }

  //   //just one criteria selected
  //   else if (confirmNum){
  //     criteria = number;
  //   }
  //   else if (confirmChar){
  //     criteria = specialChar;
  //   }
  //   else if (confirmUpper){
  //     criteria = lettersUpper;
  //   }
  //   else if (confirmLower ){
  //     criteria = lettersLower;
  //   }

  //   //randomizing values to get a final password
  //   for (var i =0; i > passLength; i++){
  //     var pickChoices = criteria[Math.floor(Math.random()* criteria.length)];
  //     password.push(pickChoices)
      
  //   };
    

