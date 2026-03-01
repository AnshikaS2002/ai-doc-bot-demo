# Math Utilities

A lightweight Node.js library for basic mathematical operations.

## Features

This library provides a set of simple functions to handle common arithmetic tasks:

- **Addition**: Add two numbers together.
- **Subtraction**: Subtract one number from another.
- **Multiplication**: Multiply two numbers.
- **Division**: Divide one number by another.
- **Modulo**: Find the remainder after division.
- **Double**: Quickly multiply a number by two.
- **Half**: Quickly divide a number by two.

## Installation

```bash
npm install
```

## Usage

Import the required functions from the module:

```javascript
const { add, multiply, mod, doubleNumber, halfNumber } = require('./app');

console.log(add(10, 5));          // 15
console.log(multiply(10, 5));     // 50
console.log(mod(10, 3));          // 1
console.log(doubleNumber(10));    // 20
console.log(halfNumber(10));      // 5
```

## API Reference

| Function | Description |
| :--- | :--- |
| `add(a, b)` | Returns the sum of `a` and `b`. |
| `subtract(a, b)` | Returns the difference between `a` and `b`. |
| `multiply(a, b)` | Returns the product of `a` and `b`. |
| `divide(a, b)` | Returns the quotient of `a` divided by `b`. |
| `mod(a, b)` | Returns the remainder of `a` divided by `b`. |
| `doubleNumber(n)` | Multiplies `n` by 2. |
| `halfNumber(n)` | Divides `n` by 2. |

## License

MIT