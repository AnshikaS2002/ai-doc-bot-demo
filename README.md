# Math Utilities

A simple Node.js utility library providing basic arithmetic and numerical operations.

## Installation

```bash
npm install
```

## Usage

```javascript
const math = require('./app');

// Basic arithmetic
console.log(math.add(10, 5));      // 15
console.log(math.subtract(10, 5)); // 5

// Miscellaneous operations
console.log(math.doubleNumber(10)); // 20
console.log(math.halfNumber(10));   // 5
```

## API Reference

### Arithmetic Functions
- `add(a, b)`: Returns the sum of two numbers.
- `subtract(a, b)`: Returns the difference between two numbers.
- `multiply(a, b)`: Returns the product of two numbers.
- `divide(a, b)`: Returns the quotient of two numbers.
- `mod(a, b)`: Returns the remainder (modulo) of the division of two numbers.

### Miscellaneous Functions
- `doubleNumber(a)`: Takes a number and returns it multiplied by 2.
- `halfNumber(a)`: Takes a number and returns it divided by 2.

## License
MIT