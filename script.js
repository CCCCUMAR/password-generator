// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//setting up code for prompts for password criteria

//putting all my values into arrays by category

number = [0,1,2,3,4,5,6,7,8,9]
specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","`","~","[","{","]","}","|",":",";","'",",","<",".",">","/","?"]
lettersUpper = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
lettersLower = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

function generatePassword(){

  var passLength = parseInt(prompt("How long do you want your password? (choose a number between 8-128)"));
    //conditions for the password length
    if (!passLength){
      alert("You must enter a value!");
    } else if (passLength <= 8 || passLength >= 128){
      passLength = alert("You must enter a number between 8-128!")

    }
    
  var criteria;
  var confirmNum = confirm("do you want to include numbers?");
  var confirmChar = confirm("do you  want to include special characters?");
  var confirmUpper = confirm("do you  want to include uppercase letters?");
  var confirmLower = confirm("do you  want to include lowercase letters?");
 
  // what happens if no criteria is chosen
  if (!confirmNum && !confirmChar && !confirmUpper && !confirmLower){
    criteria = alert("You must choose criteria!");
  }
    //all 4 criteria selected
  else if (confirmNum && confirmChar && confirmUpper && confirmLower ){
    
    criteria = number.concat(specialChar, lettersUpper, lettersLower);
  }
  
    //just 3 criteria selected
    
  else if (confirmNum &&  confirmUpper && confirmLower ){
    criteria = number.concat(lettersUpper, lettersLower);
  }

  else if (confirmNum && confirmChar && confirmLower){
    criteria = number.concat(specialChar, lettersLower);
  }
  else if (confirmNum && confirmChar && confirmUpper){
    criteria = number.concat(specialChar, lettersUpper);
  }
  else if (confirmChar && confirmUpper && confirmLower){
    criteria = specialChar.concat(lettersUpper, lettersLower);
  }

    //just 2 criteria selected
    else if (confirmNum && confirmChar){
      criteria = number.concat(specialChar);

    }
    else if (confirmNum && confirmUpper){
      criteria = number.concat(lettersUpper); 
    }
    else if (confirmNum && confirmLower){
      criteria = number.concat(lettersLower); 
    }
    else if (confirmChar && confirmUpper){
      criteria = specialChar.concat(lettersUpper); 
    }
    else if (confirmChar&& confirmLower){
      criteria = specialChar.concat(lettersLower);  
    }
    else if (confirmUpper && confirmLower){
      criteria = lettersUpper.concat(lettersLower);  
    }

    //just one criteria selected
    else if (confirmNum){
      criteria = number;
    }
    else if (confirmChar){
      criteria = specialChar;
    }
    else if (confirmUpper){
      criteria = lettersUpper;
    }
    else if (confirmLower ){
      criteria = lettersLower;
    }

    //randomizing values to get a final password
    for (var i =0; i > passLength; i++){
      var pickChoices = criteria[Math.floor(Math.random()* criteria.length)];
      password.push(pickChoices)
      
    };
    
}
