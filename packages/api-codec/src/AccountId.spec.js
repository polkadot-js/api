// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AccountId from './AccountId';

describe('AccountId', () => {
  it('decodes with a prefix (255)', () => {
    expect(
      new AccountId()
        .fromU8a(
          new Uint8Array([
            255,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
          ])
        )
        .toString()
    ).toEqual('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
  });

  it('codes with a prefix (1-byte)', () => {
    expect(
      new AccountId()
        .fromU8a(
          new Uint8Array([
            1, 17
          ])
        )
        .toString()
    ).toEqual('0x11');
  });
});
