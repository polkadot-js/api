// ISC, Copyright 2017 Jaco Greeff

const { format, formatArray } = require('./util');
const formatNoop = require('./noop');

describe('util', () => {
  let formatters;
  let noopSpy;
  let warnSpy;

  beforeEach(() => {
    noopSpy = jest.fn(formatNoop);
    warnSpy = jest.spyOn(console, 'warn');

    formatters = {
      'Address': noopSpy,
      'Address[]': noopSpy,
      'Exception': () => {
        throw new Error('something went wrong');
      }
    };
  });

  afterEach(() => {
    noopSpy.mockRestore();
    warnSpy.mockRestore();
  });

  describe('format', () => {
    it('formats unknown types with a fallback', () => {
      expect(
        format(formatters, 'Unknown', 'test')
      ).toEqual('test');
    });

    it('logs a warning with unknown types', () => {
      format(formatters, 'Unknown', 'test');
      expect(warnSpy).toHaveBeenCalledWith("Unable to find default formatter for 'Unknown', falling back to noop");
    });

    it('wraps exceptions with the type', () => {
      expect(
        () => format(formatters, 'Exception', 'test')
      ).toThrow(/Error formatting 'test' as 'Exception'/);
    });

    describe('primitives', () => {
      it('formats known types using the supplied formatter', () => {
        format(formatters, 'Address', '0xaddress');

        expect(noopSpy).toHaveBeenCalledWith('0xaddress');
      });
    });

    describe('primitive[]', () => {
      it('throws exception with array type, but non-array value', () => {
        expect(
          () => format(formatters, 'Address[]', 'not-an-array')
        ).toThrow(/Unable to format non-array/);
      });

      it('formats using the primitive type', () => {
        format(formatters, 'Address[]', ['0x123', '0x234']);

        expect(noopSpy).toHaveBeenCalledWith('0x123');
        expect(noopSpy).toHaveBeenCalledWith('0x234');
      });

      it('returns formatted values as arrays', () => {
        expect(
          format(formatters, 'Address[]', ['0x123', '0x234'])
        ).toEqual(['0x123', '0x234']);
      });
    });
  });

  describe('formatArray', () => {
    it('formats each value in an array', () => {
      expect(
        formatArray(formatters, ['Unknown', 'Unknown'], ['test', 'blah'])
      ).toEqual(['test', 'blah']);
    });
  });
});
