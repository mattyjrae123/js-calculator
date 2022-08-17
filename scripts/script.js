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
