const { validateRomanInput } = require('./validators');

/**
 * Converts a Roman numeral to an integer
 * @param {string} roman - The Roman numeral to convert
 * @returns {number} The corresponding integer value
 * @throws {Error} If the input is invalid
 */
function romanToInt(roman) {
    // Validate input
    validateRomanInput(roman);

    // Roman numeral to integer mapping
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    // Process the string from right to left
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanMap[roman[i]];
        
        // If current value is less than previous, subtract it
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        
        prevValue = currentValue;
    }

    return result;
}

module.exports = {
    romanToInt
}; 