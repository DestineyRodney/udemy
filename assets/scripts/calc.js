// alert('this works');
let currentResult = 0;

// currentResult = (10 * 3) + (currentResult + 5);
function add (){
    const userNum = parseInt(userInput.value);
    const calcDescription = `${currentResult} + ${userNum}`; // put here so we get current result and not the one after user input
    currentResult = currentResult + userNum;  // .value gives the string of the number as text and parse gives the num as actual number
    outputResult(currentResult, calcDescription);

}

// add();
adbtn = document.getElementById("btn-add");
adbtn.addEventListener('click', add); //takes 2 arguments (string) and second parameter should be a function
//Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).
//
// That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.
//
// => someButton.addEventListener('click', add);
// currentResult = add(1, 2);

function subtract (){
    const userNum = parseInt(userInput.value);
    const calcDescription = `${currentResult} - ${userNum}`;
    currentResult = currentResult - userNum;
    outputResult(currentResult, calcDescription );
}
subtractbtn = document.getElementById('btn-subtract');
subtractbtn.addEventListener('click', subtract);

function mult (){
    const userNum = parseInt(userInput.value);
    const calcDescription = `${currentResult} * ${userNum}`;
    currentResult = currentResult * userNum;
    outputResult(currentResult, calcDescription);
}

multbtn = document.getElementById('btn-multiply');
multbtn.addEventListener('click', mult);

function divide (){
    const userNum = parseInt(userInput.value);
    const calcDescription = `${currentResult} / ${userNum}`;
    currentResult = currentResult /userNum;
    outputResult(currentResult, calcDescription);
}
dividebtn = document.getElementById('btn-divide');
dividebtn.addEventListener('click', divide);

outputResult(currentResult, '');
