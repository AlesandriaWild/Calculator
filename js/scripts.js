function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const additon = number1.toString() + " + " + number2.toString() + " = " + add(number1, number2).toString();
const subtraction = number1.toString() + " - " + number2.toString() + " = " + subtract(number1, number2).toString();
const division = number1.toString() + " / " + number2.toString() + " = " + divide(number1, number2).toString();
const multiplication = number1.toString() + " * " + number2.toString() + " = " + multiply(number1, number2).toString();

window.alert (additon + "\n" + subtraction + "\n" + division + "\n" + multiplication);