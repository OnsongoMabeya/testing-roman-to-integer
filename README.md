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

## Testing

Run the test suite:

```bash
npm test
```

### Test Results

The test suite includes comprehensive tests for all functionality:

```bash
> roman-numeral-converter@1.0.0 test
> jest

 PASS  tests/romanConverter.test.js
  Roman Numeral Converter
    ✓ converts single letters correctly
    ✓ converts multiple letter combinations correctly
    ✓ handles subtractive notation correctly
    ✓ handles complex examples correctly
    ✓ throws error for null input
    ✓ throws error for invalid characters
    ✓ throws error for invalid repetitions
    ✓ throws error for invalid subtractive notation
    ✓ throws error for non-string input

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.245 s
Ran all test suites.
```

### Test Coverage

The project maintains 100% test coverage across all metrics:

```bash
> roman-numeral-converter@1.0.0 test:coverage
> jest --coverage

 PASS  tests/romanConverter.test.js
  Roman Numeral Converter
    ✓ converts single letters correctly (1 ms)
    ✓ converts multiple letter combinations correctly
    ✓ handles subtractive notation correctly (1 ms)
    ✓ handles complex examples correctly
    ✓ throws error for null input (5 ms)
    ✓ throws error for invalid characters
    ✓ throws error for invalid repetitions
    ✓ throws error for invalid subtractive notation (2 ms)
    ✓ throws error for non-string input (1 ms)
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |                   
 romanConverter.js |     100 |      100 |     100 |     100 |                   
 validators.js     |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.264 s, estimated 1 s
Ran all test suites.
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
