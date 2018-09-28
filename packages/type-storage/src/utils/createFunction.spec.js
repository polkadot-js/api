// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';

import createFunction from './createFunction';

describe('createFunction', () => {
  it('should create timestamp.now correctly', () => {
    expect(
      createFunction(
        'Timestamp',
        'Now',
        { type: {} }
      )()
    ).toEqual(
      hexToU8a('0x0e4944cfd98d6f4cc374d16f5a4e3f9c')
    );
  });
});
