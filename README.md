# Math Utilities

A simple, lightweight JavaScript library for performing basic mathematical operations.

## Features

This library provides a collection of utility functions for common arithmetic tasks:

- **Addition (`add`)**: Returns the sum of two numbers.
- **Subtraction (`subtract`)**: Returns the difference between two numbers.
- **Multiplication (`multiply`)**: Returns the product of two numbers.
- **Division (`divide`)**: Returns the quotient of two numbers.
- **Modulo (`mod`)**: Returns the remainder after division.
- **Double (`doubleNumber`)**: Multiplies a given number by two.
- **Half (`halfNumber`)**: Divides a given number by two.

## Installation

Clone the repository and include `app.js` in your project:

```bash
git clone <repository-url>
```

## Usage

You can import the utility functions into your Node.js project as follows:

```javascript
const { 
    add, 
    subtract, 
    multiply, 
    divide, 
    mod, 
    doubleNumber, 
    halfNumber 
} = require('./app');

console.log(add(5, 3));         // Output: 8
console.log(mod(10, 3));        // Output: 1
console.log(doubleNumber(10));  // Output: 20
```

## Development

The project includes basic exported functions within `app.js` and is configured for simple integration and testing.

### Recent Updates
- Added `mod` function for remainder calculations.
- Included `doubleNumber` and `halfNumber` utilities.
- General maintenance and PR testing.

## License

This project is open-source and available under the MIT License.