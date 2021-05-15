// Assignment code here
// Strings containing content 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = '!@#$%^&*()-_=+[]{}\|;:"<>.,/?~`' + "'"; 
var newString = lowerCase + upperCase + symbols;

// Generate random combination 
// PSEUDO CODE
// 1. Prompt for length
// 2. Make sure length is between 8-128 
// 3. prompt for criteria
// 4. make sure at least 1 criteria is selected
// 5. IF criteria is selected, CONCATENATE criteria to string var newString = lowerCase + upperCase
// 6. use loop to output random index's from the string into an array (add strings to array for i=0; i<confirmLength;i++)
// 7. return string to writePassword




// Function to generate and return the password to writePassword()
function generatePassword() {
    // USER PROMPTS
    var confirmLength = prompt("What is your desired password length? Select between 8 and 128 characters.");
    var passwordLength = parseInt(confirmLength);
    
    if(!passwordLength){
        alert("You need to pick a valid option!"); 
        generatePassword();
    } else if(passwordLength < 8 || passwordLength > 128) {
        alert("Please pick a number between 8 and 128");
        generatePassword();
    } else {
        var confirmUppercase = confirm("Would you like to include uppercase letters?");
        var confirmLowercase = confirm("Would you like to include lowercase letters?");
        var confirmNumber = confirm("Would you like to include numbers?");
        var confirmSpecial = confirm("Would you like to include special characters?");
    }
    
    
    
    
    return "a string"; 
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
