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
function generatePassword() {
    var length = prompt("Input password Length between 8 and 128");
    if (length < 8 || length > 128) {
        prompt("Please Input a length more than 8 and less than 128")
    }

    var isLower = confirm("Are lower case letters included ?");
    var isUpper = confirm("Are uppper case letters included ?");
    var isNumeric = confirm("Are numeric values included ?");
    var isSpecialCharacters = confirm("Are special characters included ?");

    var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    var password = "";

    length = +length;
    for (var i = 0; i < length; i++) {
        if (isNumeric) {

            index = Math.floor(Math.random() * numeric.length);
            password += numeric[index];
        }

        if (isLower) {
            index = Math.floor(Math.random() * lowerCase.length);
            password += lowerCase[index];
        }

        if (isUpper) {
            index = Math.floor(Math.random() * upperCase.length);
            password += upperCase[index];
        }


        if (isSpecialCharacters) {
            index = Math.floor(Math.random() * specialCharacters.length);
            password += specialCharacters[index];
        }



    }
    return password.slice(0, length);
}