/**
 * Unit tests for utility functions
 */

const { greet, add, isEven } = require('../src/utils');

// Simple test runner
function test(description, fn) {
    try {
        fn();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(`  Error: ${error.message}`);
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`Expected ${expected}, but got ${actual}. ${message}`);
    }
}

// Run tests
console.log('Running tests...\n');

test('greet should return greeting with name', () => {
    assertEqual(greet('World'), 'Hello, World!');
});

test('greet should handle empty string', () => {
    assertEqual(greet(''), 'Hello, !');
});

test('add should sum two numbers', () => {
    assertEqual(add(2, 3), 5);
});

test('add should handle negative numbers', () => {
    assertEqual(add(-1, 1), 0);
});

test('isEven should return true for even numbers', () => {
    assertEqual(isEven(4), true);
});

test('isEven should return false for odd numbers', () => {
    assertEqual(isEven(3), false);
});

test('isEven should handle zero', () => {
    assertEqual(isEven(0), true);
});

console.log('\nAll tests completed!');
