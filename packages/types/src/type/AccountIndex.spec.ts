// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import AccountIndex from './AccountIndex';

describe('AccountIndex', () => {
  it('creates a BN representation', () => {
    expect(
      new AccountIndex(new Uint8Array([17, 18, 19, 20])).toNumber()
    ).toEqual(336794129);
  });

  it('creates a BN representation (from ss-58)', () => {
    expect(
      new AccountIndex('Mwz15xP2').toNumber()
    ).toEqual(336794129);
  });

  it('constructs 2-byte from number', () => {
    expect(
      new AccountIndex(256 * 1).toString()
    ).toEqual('25GUyv');
  });

  it('constructs from number', () => {
    expect(
      new AccountIndex(new BN(336794129)).toString()
    ).toEqual('Mwz15xP2');
  });

  it('compares ss-58 values', () => {
    expect(new AccountIndex(256 * 1).eq('25GUyv')).toBe(true);
  });

  it('compares numbers', () => {
    expect(new AccountIndex('2jpAFn').eq(256 * 1)).toBe(true);
  });

  describe('calcLength', () => {
    const testLength = (value: number, length: number) =>
      expect(AccountIndex.calcLength(value)).toEqual(length);

    it('returns 1 for <= 0xef', () => {
      testLength(0xef, 1);
    });

    it('returns 2 for > 0xef', () => {
      testLength(0xf0, 2);
    });

    it('returns 4 bytes for 32-bit inputs', () => {
      testLength(0xffeeddcc, 4);
    });

    it('returns 8 bytes for larger inputs', () => {
      testLength(0x122334455, 8);
    });
  });
});
