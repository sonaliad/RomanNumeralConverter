import convertToNumeral from '../utils/convertToNumeral';

test('it can convert to roman',() => {
    expect(convertToNumeral('MM')).toBe(2000);
    expect(convertToNumeral('IV')).toBe(4);
    expect(convertToNumeral('MMMCMXCIX')).toBe(3999);
    expect(convertToNumeral('CCXLV')).toBe(245);
});