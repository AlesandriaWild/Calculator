function add(number1, number2) {
  return number1 + number2;
}
 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

function subtract(number3, number4) {
  return number3 - number4;
}

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));

function divide(number5, number6) {
  return number5 / number6;
}

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));

function multiply(number7, number8) {
  return number7 * number8;
}

const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));

console.log(add(number1,number2))

window.alert("The additon of your numbers equals " + "" + add(number1, number2) + "" + ". " + "The subtraction of your numbers equals " + subtract(number3, number4) + ". " + "The product of your number is " + divide(number5, number6) + ". " + "The product of your number is " + multiply(number7, number8) + ".");
