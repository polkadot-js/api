// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import storage from '@polkadot/storage/static';

import StorageKey from './StorageKey';

describe('StorageKey', () => {
  it(`should correctly get Alice's freeBalance storage key (hex)`, () => {
    expect(
      new StorageKey(
        storage
          .balances
          .freeBalance('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ')
      )
        .toHex()
    ).toBe('0xce3f3d8f09e3411403f5ca59d042a40e'); // FIXME OK this should be length-prefixed in reality
  });

  it(`should correctly get Alice's freeBalance storage key (u8a)`, () => {
    expect(
      new StorageKey(
        storage
          .balances
          .freeBalance('5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ')
      )
        .toU8a()
    ).toEqual(
      Uint8Array.from([64, 206, 63, 61, 143, 9, 227, 65, 20, 3, 245, 202, 89, 208, 66, 164, 14]) // Length-prefixed
    );
  });
});
