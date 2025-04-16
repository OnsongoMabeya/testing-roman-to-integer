const { romanToInt } = require('../src/romanConverter');

describe('Roman Numeral Converter', () => {
    // Basic conversions
    test('converts single letters correctly', () => {
        expect(romanToInt('I')).toBe(1);
        expect(romanToInt('V')).toBe(5);
        expect(romanToInt('X')).toBe(10);
        expect(romanToInt('L')).toBe(50);
        expect(romanToInt('C')).toBe(100);
        expect(romanToInt('D')).toBe(500);
        expect(romanToInt('M')).toBe(1000);
    });

    // Multiple letter combinations
    test('converts multiple letter combinations correctly', () => {
        expect(romanToInt('III')).toBe(3);
        expect(romanToInt('VI')).toBe(6);
        expect(romanToInt('XV')).toBe(15);
        expect(romanToInt('LX')).toBe(60);
    });

    // Subtractive notation
    test('handles subtractive notation correctly', () => {
        expect(romanToInt('IV')).toBe(4);
        expect(romanToInt('IX')).toBe(9);
        expect(romanToInt('XL')).toBe(40);
        expect(romanToInt('XC')).toBe(90);
        expect(romanToInt('CD')).toBe(400);
        expect(romanToInt('CM')).toBe(900);
    });

    // Complex examples
    test('handles complex examples correctly', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
        expect(romanToInt('MMMCMXCIX')).toBe(3999);
        expect(romanToInt('LVIII')).toBe(58);
    });

    // Error handling
    test('throws error for null input', () => {
        expect(() => romanToInt(null)).toThrow('Input cannot be null or empty');
        expect(() => romanToInt('')).toThrow('Input cannot be null or empty');
    });

    test('throws error for invalid characters', () => {
        expect(() => romanToInt('A')).toThrow('Invalid characters found: A');
        expect(() => romanToInt('IVXZ')).toThrow('Invalid characters found: Z');
    });

    test('throws error for invalid repetitions', () => {
        expect(() => romanToInt('IIII')).toThrow('Invalid repetition of symbols: IIII');
        expect(() => romanToInt('VV')).toThrow('Invalid repetition of symbols: VV');
    });

    test('throws error for invalid subtractive notation', () => {
        expect(() => romanToInt('IL')).toThrow('Invalid subtractive notation: IL');
        expect(() => romanToInt('VX')).toThrow('Invalid subtractive notation: VX');
    });

    test('throws error for non-string input', () => {
        expect(() => romanToInt(123)).toThrow('Input must be a string');
        expect(() => romanToInt({})).toThrow('Input must be a string');
    });
}); 