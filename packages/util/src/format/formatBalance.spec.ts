// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import formatBalance from './formatBalance';

describe('formatBalance', () => {
  const TESTVAL = new BN('123456789000');

  it('formats empty to 0', () => {
    expect(formatBalance()).toEqual('0');
    expect(formatBalance('0')).toEqual('0');
  });

  it('formats 123,456,789,000 (decimals=15)', () => {
    expect(
      formatBalance(TESTVAL, true, 15)
    ).toEqual('123.456µ Unit');
  });

  it('formats 123,456,789,000 (decimals=12)', () => {
    expect(
      formatBalance(TESTVAL, true, 12)
    ).toEqual('123.456m Unit');
  });

  it('formats 123,456,789,000 (decimals=12, no SI)', () => {
    expect(
      formatBalance(TESTVAL, false, 12)
    ).toEqual('123.456');
  });

  it('formats 123,456,789,000 (decimals=9)', () => {
    expect(
      formatBalance(TESTVAL, true, 9)
    ).toEqual('123.456 Unit');
  });

  it('formats 123,456,789,000 (decimals=6)', () => {
    expect(
      formatBalance(TESTVAL, true, 6)
    ).toEqual('123.456k Unit');
  });

  it('formats 123,456,789,000 * 10 (decimals=12)', () => {
    expect(
      formatBalance(TESTVAL.muln(10), true, 12)
    ).toEqual('1.234 Unit');
  });

  it('formats 123,456,789,000 * 100 (decimals=12)', () => {
    expect(
      formatBalance(TESTVAL.muln(100), true, 12)
    ).toEqual('12.345 Unit');
  });

  it('formats 123,456,789,000 * 1000 (decimals=12)', () => {
    expect(
      formatBalance(TESTVAL.muln(1000), true, 12)
    ).toEqual('123.456 Unit');
  });

  describe('findSi', () => {
    it('finds the SI value', () => {
      expect(
        formatBalance.findSi('k')
      ).toEqual({ power: 3, value: 'k', text: 'Kilo' });
    });

    it('returns default on not found', () => {
      expect(
        formatBalance.findSi('blah')
      ).toEqual({ power: 0, value: '-', text: 'Unit' });
    });
  });

  describe('defaults', () => {
    it('returns defaults', () => {
      expect(formatBalance.getDefaults()).toEqual({
        decimals: 0,
        unit: 'Unit'
      });
    });

    it('formats 123,456,789,000 (defaultDecimals=12)', () => {
      formatBalance.setDefaults({ decimals: 12 });

      expect(
        formatBalance(TESTVAL)
      ).toEqual('123.456m Unit');
    });

    it('formats 123,456,789,000 (defaultUnit=TEST)', () => {
      formatBalance.setDefaults({ unit: 'TEST' });

      expect(
        formatBalance(TESTVAL)
      ).toEqual('123.456m TEST');
    });
  });

  it('returns options for dropdown', () => {
    formatBalance.setDefaults({ decimals: 0, unit: 'TEST' });

    expect(
      formatBalance.getOptions()
    ).toEqual([
      { power: 0, value: '-', text: 'TEST' },
      { power: 3, value: 'k', text: 'Kilo' },
      { power: 6, value: 'M', text: 'Mega' },
      { power: 9, value: 'G', text: 'Giga' },
      { power: 12, value: 'T', text: 'Tera' },
      { power: 15, value: 'P', text: 'Peta' },
      { power: 18, value: 'E', text: 'Exa' },
      { power: 21, value: 'Z', text: 'Zeta' },
      { power: 24, value: 'Y', text: 'Yotta' }
    ]);
  });
});
