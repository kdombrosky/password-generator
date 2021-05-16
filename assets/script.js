// Assignment code here
// Strings containing content 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = '!@#$%^&*()-_=+[]{}\|;:"<>.,/?~`' + "'"; 


// Function for User Prompts 
function generateLength() {
    var confirmLength = prompt("What is your desired password length? Select between 8 and 128 characters.");
    var passwordLength = parseInt(confirmLength); 

    if(!passwordLength){
        alert("You must choose a valid option."); 
        return generateLength();
    } else if(passwordLength < 8 || passwordLength > 128) {
        alert("Please pick a number between 8 and 128.");
        return generateLength();
    } else {
        return passwordLength;
    }
}

function generateCriteria() { 
    var confirmUppercase = confirm("Would you like to include uppercase letters?");
    var confirmLowercase = confirm("Would you like to include lowercase letters?");
    var confirmNumber = confirm("Would you like to include numbers?");
    var confirmSpecial = confirm("Would you like to include special characters?");

    if(!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSpecial) {
        alert("You must choose at least 1 criteria!");
        return generateCriteria();
    } else {
        var criteria = {
            uppercase: confirmUppercase,
            lowercase: confirmLowercase,
            number: confirmNumber,
            specialChar: confirmSpecial
        }

        return criteria;
    }
} 

// Function to generate and return the password to writePassword()
function generatePassword() {
    // USER PROMPTS BY FUNCTION 
    var passwordLength = generateLength();

    var userCriteria = generateCriteria();

    // PASSWORD GENERATION 
    var tempString = ""; 
    if(userCriteria.uppercase) tempString += upperCase; 
    if(userCriteria.lowercase) tempString += lowerCase;
    if(userCriteria.number) tempString += numbers;
    if(userCriteria.specialChar) tempString += symbols;

    var generatedPassword = "";
    for(i=0; i<passwordLength; i++) {
        generatedPassword += tempString.charAt(Math.floor(Math.random() * tempString.length));
    }

    // RETURN STRING VALUE BELOW
    return generatedPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();  // call generatePassword to create a password
    var passwordText = document.querySelector("#password"); // creating variable to store selection of the text area 

    passwordText.value = password;  // set the value of the text area to whatever password came from generatePassword(); "not changing text content, but the value which is a little different"

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
