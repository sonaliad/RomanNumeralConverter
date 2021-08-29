// const { convertToRoman, convertToNumeral} = require('../utils/convertToRoman');
import convertToRoman from '../utils/convertToRoman';

test('it can convert to roman',() => {
    expect(convertToRoman(2000)).toBe('MM');
    expect(convertToRoman(4)).toBe('IV');
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
    expect(convertToRoman(245)).toBe('CCXLV');
});