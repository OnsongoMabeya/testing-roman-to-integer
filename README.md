# Roman Numeral Converter

A JavaScript application that converts Roman numerals to their corresponding integer values, with robust error handling and validation.

## Features

- Converts valid Roman numerals to integers
- Comprehensive input validation
- Clear error messages
- High test coverage
- Modular and maintainable code

## Installation

```bash
npm install
```

## Usage

```javascript
const { romanToInt } = require('./src/romanConverter');

// Basic usage
console.log(romanToInt('IV')); // Output: 4
console.log(romanToInt('MCMXCIV')); // Output: 1994

// Error handling
try {
    romanToInt('IIII'); // Invalid repetition
} catch (error) {
    console.error(error.message);
}
```

## Testing

Run the test suite:

```bash
npm test
```

## Error Messages

The application provides clear error messages for various invalid inputs:

- Null/empty input
- Invalid characters
- Invalid repetitions of symbols
- Invalid subtractive notation combinations

## Project Structure

```bash
├── src/
│   ├── romanConverter.js    # Main conversion logic
│   └── validators.js        # Input validation functions
├── tests/
│   └── romanConverter.test.js
├── package.json
└── README.md
```
