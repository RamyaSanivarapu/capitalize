let userInputElement = document.getElementById("userInput");
let capitalizeElement = document.getElementById("capitalize");
let resultElement= document.getElementById("result");

capitalizeElement.onclick=function() {
    let userInputValue = userInputElement.value 
    let emtyValue="";
    if (userInputValue.length > emtyValue.length ){
        var separateWord = userInputValue.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
        }
        let result = separateWord.join(' ');
        resultElement.textContent = result;
        resultElement.style.backgroundColor="green";
        console.log(result);
    } else{
        console.log("Please provide a valid input.")
        resultElement.textContent = "Please provide a valid input.";
        resultElement.style.backgroundColor="red";
    } 
 }