let currInput = null;
let prevInput = null;
let currOperator = null;

const displayPanel = document.querySelector('#display-panel');

/******************
* EVENT LISTENERS *
*******************/

/*
  Add digit to currInput and update display panel with currInput
 */
document.querySelectorAll('.operand')
        .forEach(button => {
          button.addEventListener('click', () => {
            const num = parseInt(button.value);

            if (typeof currInput !== 'number') {
              currInput = num;
            } else {
              currInput *= 10;
              currInput += num;
            }

            displayPanel.textContent = currInput;
          });
        });

/*
* Clear variables and reset display
*/
document.querySelector('input[value="AC"]')
        .addEventListener('click', () => {
          currInput = null;
          prevInput = null;
          currOperator = null;

          displayPanel.textContent = '';
        });

/*
Create variables for:
  currentInput
  firstInput
  currentOperator

when a number (operand) button is clicked
 add number to currentInput
 display currentInput

when operator button is clicked
  if firstInput and currentInput are null
    do nothing?
   else if firstInput is null
    set firstInput to currentInput
    set currentOperator to chosen operator
    clear currentInput (undefined?)
    dont change display?
  
  else
    store result of operate(firstInput, currentInput, currentOperator) in firstInput
    set currentOperator to chosen operator
    clear currentInput (undefined?)
    display firstInput?

when clear button is clicked
  clear currentInput
  clear firstInput
  clear currentOperator
  reset display to 0?

when equals button is clicked
  if firstInput or currentInput are undefined
    do nothing?
  
  else
    store result of operate(firstInput, currentInput, currentOperator) in firstInput
    clear currentInput
    clear currentOperator
    display firstInput
 */

/************
* FUNCTIONS *
*************/

/**
 * Returns the sum of n1 and n2
 * @param {number} n1
 * @param {number} n2
 * @returns {number} result of n2 + n2
 */
function add(n1, n2) {
  return n1 + n2;
}

/**
 * Returns the result of n2 subtracted from n1
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number} result of n1 - n2
 */
function subtract(n1, n2) {
  return n1 - n2;
}

/**
 * Returns the product of n1 and n2
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number} result of n1 * n2
 */
function multiply(n1, n2) {
  return n1 * n2;
}

/**
 * Returns result of n1 divided by n2
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number} result of n1 / n2
 */
function divide(n1, n2) {
  return n1 / n2;
}

/**
 * Returns result of applying the operator between n1 and n2
 * @param {number} n1 
 * @param {number} n2 
 * @param {string} operator - must be one of +*-/
 * @returns {number} result of applying the operator between n1 and n2
 */
function operate(n1, n2, operator) {
  if (operator === "+") {
    return add(n1, n2);
  }

  if (operator === "-") {
    return subtract(n1, n2);
  }

  if (operator === "*") {
    return multiply(n1, n2);
  }

  if (operator === "/") {
    return divide(n1, n2);
  }
}
