// Simple Calculator

// Prompt the user for the first number
let firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number
let secondNumber = parseFloat(prompt("Enter the second number:"));

// Calculate the sum
let sum = firstNumber + secondNumber;

// Display the sum using an alert
alert("The sum is: " + sum);

// BONUS: Additional operations
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;

alert("The difference is: " + difference);
alert("The product is: " + product);
alert("The quotient is: " + quotient);

function pressKey(key) {
    const display = document.getElementById('display');
    display.value += key;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}