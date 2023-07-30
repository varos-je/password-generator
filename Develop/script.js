// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // Add event listeners to checkboxes
    var lowercaseBox = document.getElementById("#lowercase").checked;
    var uppercaseBox = document.getElementById("#uppercase").checked;
    var numericalBox = document.getElementById("#numerical").checked;
    var specialBox = document.getElementById("#special").checked;

    // Check that at least one box is selected
    // If not, return alert
    if (lowercaseBox + uppercaseBox + numericalBox + specialBox === 0) {
        alert("You have not selected a box. Please select at least one box:");
        return;
    }

    // Initialize a 'bank' of strings for all available chars
    var chars = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numerical: "0123456789",
        special: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };



    passwordText.value = password;

    generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
