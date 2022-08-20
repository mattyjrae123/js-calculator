let currInput = null;        // operand on right of equation
let prevInput = null;        // operand on left of equation
let result = null;           // result of equation (when equals button clicked)
let currOperator = null;     // oeprator in middle of equation (+ - * /)

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

            if (result !== null) {
              result = null;
            }
            
            if (currInput === null) {
              currInput = num;
            } else {
              currInput *= 10;
              currInput += num;
            }

            updateDisplay();
          });
        });

/*
* Clear variables and reset display
*/
document.querySelector('input[value="AC"]')
        .addEventListener('click', () => {
          currInput = null;
          prevInput = null;
          result = null;
          currOperator = null;

          updateDisplay();
        });

/*
* [+ - * /] operation functions
*/
document.querySelectorAll('.operator')
        .forEach(button => {
          button.addEventListener('click', () => {
            if (result !== null) {
              prevInput = result;
              result = null;
            }

            if (currInput === null && prevInput === null) {
              return;
            }

            if (prevInput === null) {
              prevInput = currInput;
              currInput = null;
            }

            if (prevInput !== null && currInput !== null) {
              prevInput = operate(prevInput, currInput, currOperator);
              currInput = null;
            }

            currOperator = button.value;
            updateDisplay();
          });
        });

document.querySelector('.equals')
        .addEventListener('click', () => {
          if (prevInput === null || currInput === null || currOperator === null) {
            return;
          }

          result = operate(prevInput, currInput, currOperator);
          prevInput = null;
          currInput = null;
          currOperator = null;

          updateDisplay();
        });

function updateDisplay() {
  let resultString = '';

  if (result !== null) {
    resultString += result;
  }
  if (prevInput !== null) {
    resultString += prevInput;
  }
  if (currOperator !== null) {
    resultString += ' ' + currOperator + ' ';
  }

  if (currInput !== null) {
    resultString += currInput;
  }

  resultString.trim();

  displayPanel.textContent = resultString;
}

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
