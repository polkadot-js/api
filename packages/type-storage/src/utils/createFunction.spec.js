// Copyright 2017-2018 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
      Uint8Array.from([64, 14, 73, 68, 207, 217, 141, 111, 76, 195, 116, 209, 111, 90, 78, 63, 156]) // Length-prefixed
    );
  });

  it('allows overrides on method name', () => {
    expect(
      createFunction(
        'Substrate',
        ':auth:len',
        { type: {} },
        {
          isUnhashed: true,
          method: 'authorityCount'
        }
      ).method
    ).toEqual('authorityCount');
  });
});
