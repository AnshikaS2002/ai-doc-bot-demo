# Math Operations Library

A simple and efficient Node.js module for performing basic arithmetic calculations.

## Features

- **Addition**: Sum two numbers.
- **Subtraction**: Calculate the difference between two numbers.
- **Multiplication**: Find the product of two numbers.
- **Division**: Calculate the quotient of two numbers.

## Installation

```bash
npm install
```

## Usage

You can import the functions directly from the `app.js` module:

```javascript
const { add, subtract, multiply, divide } = require('./app');

console.log(add(10, 5));       // Output: 15
console.log(subtract(10, 5));  // Output: 5
console.log(multiply(10, 5));  // Output: 50
console.log(divide(10, 5));    // Output: 2
```

## API Reference

### `add(a, b)`
Returns the sum of `a` and `b`.

### `subtract(a, b)`
Returns the result of `a` minus `b`.

### `multiply(a, b)`
Returns the product of `a` and `b`.

### `divide(a, b)`
Returns the result of `a` divided by `b`.

## License
MIT