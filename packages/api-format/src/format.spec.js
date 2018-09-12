// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import format from './format';
import echo from './echo';

describe('format', () => {
  let formatters;
  let echoSpy;
  let warnSpy;

  beforeEach(() => {
    echoSpy = jest.fn(echo);
    warnSpy = jest.spyOn(console, 'log');

    formatters = new Map([
      ['Address', echoSpy],
      ['Exception', () => {
        throw new Error('something went wrong');
      }]
    ]);
  });

  afterEach(() => {
    echoSpy.mockRestore();
    warnSpy.mockRestore();
  });

  it('formats unknown types with a fallback', () => {
    expect(
      format(formatters, ['Unknown'], ['test'])
    ).toEqual(['test']);
  });

  it('logs a warning with unknown types', () => {
    format(formatters, ['Unknown'], ['test']);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.anything(), expect.anything(), "Unable to find default formatter for 'Unknown', falling back to echo"
    );
  });

  it('wraps exceptions with the type', () => {
    expect(
      () => format(formatters, ['Exception'], ['test'])
    ).toThrow(/Error formatting 'test' as 'Exception'/);
  });

  describe('primitives', () => {
    it('formats known types using the supplied formatter', () => {
      format(formatters, ['Address'], ['0xaddress']);

      expect(echoSpy).toHaveBeenCalledWith('0xaddress');
    });
  });

  describe('primitive[]', () => {
    it('formats using the primitive type', () => {
      format(formatters, [['Address']], [['0x123', '0x234']]);

      expect(echoSpy).toHaveBeenCalledWith('0x123');
      expect(echoSpy).toHaveBeenCalledWith('0x234');
    });

    it('returns formatted values as arrays', () => {
      expect(
        format(formatters, [['Address']], [['0x123', '0x234']])
      ).toEqual([['0x123', '0x234']]);
    });
  });

  it('formats each value in an array', () => {
    expect(
      format(formatters, ['Unknown', 'Unknown'], ['test', 'blah'])
    ).toEqual(['test', 'blah']);
  });
});
