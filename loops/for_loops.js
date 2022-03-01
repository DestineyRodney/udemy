"use strict";

//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(num + ' x ' + i + ' =  ' + (num * i));
    }
}

showMultiplicationTable(7);

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (let i = 1; i <=10; i++){
    let randomNum = Math.floor(Math.random() * (200 - 20) + 20);
    if(randomNum %2 === 0){
        console.log(randomNum + 'even');
    } else {
        console.log(randomNum + 'odd');
    }
}


//Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (let i = 1; i < 10; i++){
    let showNum = '';
    for(let x = 0; x < i; x++){
        showNum = showNum + i;
    }
    console.log(showNum);
}

//Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i >= 5; i -= 5){
    console.log(i);
}

