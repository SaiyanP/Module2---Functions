console.log("************1************")

// EXERCISE 1
/**
 * Make 3 functions:

    Function that takes a number through a parameter and returns how many digits that number has.
    Function that takes a number through a parameter and returns if its even or odd.
    Function that takes a number through a parameter and returns if its positive or negative.

    Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
    It should show the results in the console.

    Ex:
    Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative.
 */


// RETURNS HOW MANY DIGITS A NUMBER HAS.
function numberOfDigits(number){
    let i = 0;
    if(number >= 1) i++;

    while (number / 10 >= 1){
        number /= 10;
        i++;
    }
    return `The number has ${i} digits.`;
}
console.log(numberOfDigits(312543));


// RETURNS IF NUMBER IS EVEN OR ODD.
function evenAndOdd(number){
    if(number % 2 === 0){
        return `The number ${number} is even.`
    }else{
        return `The number ${number} is odd.`
    };
};
console.log(evenAndOdd(5));
console.log(evenAndOdd(4));
console.log(evenAndOdd(19));


// RETURNS IF NUMBER IS POSITIVE OR NEGATIVE.
function positiveAndNegativeNum(number){
    if(number < 0){
        return `The number ${number} is negative.`
    }else{
        return `The number ${number} is positive.`
    };
};
console.log(positiveAndNegativeNum(-25));
console.log(positiveAndNegativeNum(10));

// COMBINING ALL :D :D
function getNumberStats(number){
    return `The number is ${number}. ${numberOfDigits(number)}${evenAndOdd(number)}${positiveAndNegativeNum(number)}`;
};
console.log(getNumberStats(259));


// EXERCISE 2
/**
 * ***Create 2 variables with arrow functions.***
 * First arrow function will accept two parameters, one for element and one for color. 
 * The function should change the given element text color with the color given from the second color parameter. 
 * If no parameter is passed for color, the default value is black.
 
 * Second arrow function will accept two parameters, one for element and one for textSize.
 * The function should change the given element text size to the number given from the second textSize parameter. 
 * If no parameter is passed for textSize, the default value is 24.
 * 
 * Create an HTML document with two inputs, a button and an h1 header with some text. 
 * The first input should be for text size and the second for color. 
 * When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ).
 * Use the functions that we declared earlier and use arrow function for the event listener of the button.
 * 
 * Ex:
 * **Input1: ** Person enters 28 **Input2: ** Person enters red **Result: ** The h1 text should change to size 28 and color red
 */


console.log("************2************")



let firstDiv = document.getElementById("firstDiv");
let sizeInput = document.getElementById("sizeInput");
let colorInput = document.getElementById("colorInput");
let myBtn = document.getElementById("myBtn");
let headingOne = document.getElementById("heading");
let resultDiv = document.getElementById("resultDiv");

let generateTextColor = (element, textColor) =>{
    element.style.color = textColor;
};

myBtn.addEventListener("click", function(){
    generateTextColor(headingOne, colorInput.value);
    console.log(`The color of the text has been changed to ${colorInput.value}.`);
    generateTextSize(headingOne, sizeInput.value);
    console.log(`The size of the text has been changed to ${sizeInput.value}px.`);
});

let generateTextSize = (element, textSize) =>{
    element.style.fontSize = `${textSize}px`;
};