// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { stringToU8a, u8aConcat } from '@plugnet/util';

import createFunction from './createFunction';

describe('createFunction', () => {
  it('should create timestamp.now correctly', () => {
    expect(
      createFunction(
        'Timestamp',
        'Now',
        { type: {} } as any
      )()
    ).toEqual(
      Uint8Array.from([64, 14, 73, 68, 207, 217, 141, 111, 76, 195, 116, 209, 111, 90, 78, 63, 156]) // Length-prefixed
    );
  });

  it('allows overrides on key (keeping name)', () => {
    expect(
      createFunction(
        'Substrate',
        'authorityCount',
        { type: {} } as any,
        {
          key: ':auth:len',
          skipHashing: true
        }
      ).method
    ).toEqual('authorityCount');
  });

  it('allows overrides on key (unhashed)', () => {
    const key = ':auth:len';

    expect(
      createFunction(
        'Substrate',
        'authorityCount',
        { type: {} } as any,
        {
          key,
          skipHashing: true
        }
      )()
    ).toEqual(
      u8aConcat(
        Uint8Array.from([key.length << 2]),
        stringToU8a(':auth:len')
      )
    );
  });
});
