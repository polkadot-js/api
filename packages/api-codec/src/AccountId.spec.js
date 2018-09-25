// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import AccountId from './AccountId';

describe('AccountId', () => {
  it('decodes from u8a', () => {
    expect(
      new AccountId()
        .fromU8a(
          new Uint8Array([
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
          ])
        )
        .toString()
    ).toEqual(
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
  });

  it('decodes from address', () => {
    expect(
      new AccountId()
        .fromJSON('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s')
        .toHex()
    ).toEqual(
      '0x0102030405060708010203040506070801020304050607080102030405060708'
    );
  });

  it('decodes from hex', () => {
    expect(
      new AccountId()
        .fromJSON('0x0102030405060708010203040506070801020304050607080102030405060708')
        .toJSON()
    ).toEqual(
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
  });

  it('allows creation from another', () => {
    expect(
      new AccountId(
        new AccountId(
          '0x0102030405060708010203040506070801020304050607080102030405060708'
        )
      ).toString()
    ).toEqual(
      '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    );
  });
});
