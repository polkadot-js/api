// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import AccountIndex from './AccountIndex';

describe('AccountIndex', () => {
  it('creates a BN representation', () => {
    expect(
      new AccountIndex([0xfd, 17, 18, 19, 20]).toBn().toString()
    ).toEqual('336794129');
  });

  it('creates a BN representation (from ss-58)', () => {
    expect(
      new AccountIndex('Mwz15xN8').toBn().toString()
    ).toEqual('336794129');
  });

  it('constructs 2-byte from number', () => {
    expect(
      new AccountIndex(256 * 1).toString()
    ).toEqual('25GUyk');
  });

  it('constructs from number', () => {
    expect(
      new AccountIndex(new BN(336794129)).toString()
    ).toEqual('Mwz15xN8');
  });

  describe('calcLength', () => {
    it('returns 1 for <= 0xef', () => {
      expect(AccountIndex.calcLength(0xef)).toEqual(1);
    });

    it('returns 2 for > 0xef', () => {
      expect(AccountIndex.calcLength(0xf0)).toEqual(2);
    });

    it('returns 4 bytes for 32-bit inputs', () => {
      expect(AccountIndex.calcLength(0xffeeddcc)).toEqual(4);
    });

    it('returns 8 bytes for larger inputs', () => {
      expect(AccountIndex.calcLength(0x122334455)).toEqual(8);
    });
  });
});
