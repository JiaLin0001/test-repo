/**
 * Utility functions
 */

/**
 * Creates a greeting message
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name) {
    return `Hello, ${name}!`;
}

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Checks if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if even, false otherwise
 */
function isEven(num) {
    return num % 2 === 0;
}

module.exports = {
    greet,
    add,
    isEven
};
