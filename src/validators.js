/**
 * Validates Roman numeral input
 * @param {string} roman - The Roman numeral string to validate
 * @throws {Error} If the input is invalid
 */
function validateRomanInput(roman) {
    if (!roman) {
        throw new Error('Input cannot be null or empty');
    }

    if (typeof roman !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check for invalid characters
    const validChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const invalidChars = roman.split('').filter(char => !validChars.includes(char));
    if (invalidChars.length > 0) {
        throw new Error(`Invalid characters found: ${invalidChars.join(', ')}`);
    }

    // Check for invalid repetitions
    const invalidRepetitions = ['VV', 'LL', 'DD', 'IIII', 'XXXX', 'CCCC', 'MMMM'];
    for (const pattern of invalidRepetitions) {
        if (roman.includes(pattern)) {
            throw new Error(`Invalid repetition of symbols: ${pattern}`);
        }
    }

    // Check for invalid subtractive notation
    const invalidSubtractive = ['IL', 'IC', 'ID', 'IM', 'VX', 'VL', 'VC', 'VD', 'VM', 'XD', 'XM', 'LC', 'LD', 'LM'];
    for (const pattern of invalidSubtractive) {
        if (roman.includes(pattern)) {
            throw new Error(`Invalid subtractive notation: ${pattern}`);
        }
    }
}

module.exports = {
    validateRomanInput
}; 