const { checkFilter } = require('./utils');

describe('Utils tests', () => {
  describe('checkFilter method', () => {
    test('should return the same filter when is a valid filter', () =>  {
      const result = checkFilter('longTitles');
      expect(result).toEqual('longTitles');
    });

    test('should throw error when the filter is invalid', () => {
      const call = () => checkFilter('xxxx');
      expect(call).toThrowError('Just "longTitles" and "shortTitles" are valid filters');
    });

    test('should return null when the filter param is null or undefined', () => {
      const result = checkFilter();
      expect(result).toEqual(null);
    });
  })
});
