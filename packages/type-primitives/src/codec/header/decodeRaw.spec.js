// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import decode from './decodeRaw';

describe('decodeRaw', () => {
  it('returns the raw parts', () => {
    expect(
      JSON.stringify(
        decode(
          new Uint8Array([
            // parent_hash
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
            // number
            67, 0, 0, 0, 0, 0, 0, 0,
            // state_root
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
            // transaction_root
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
            // digest (length, log1, log2)
            2, 0, 0, 0,
            1, 0, 0, 0, 1,
            1, 0, 0, 0, 2,
            // remainder
            1, 2, 3, 4, 5, 4, 3, 2, 1
          ])
        )
      )
    ).toEqual(
      JSON.stringify({
        body: new Uint8Array([1, 2, 3, 4, 5, 4, 3, 2, 1]),
        header: new Uint8Array([
          // parent_hash
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
          // number
          67, 0, 0, 0, 0, 0, 0, 0,
          // state_root
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
          // transaction_root
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
          // digest (length, log1, log2)
          2, 0, 0, 0,
          1, 0, 0, 0, 1,
          1, 0, 0, 0, 2
        ]),
        logs: [
          new Uint8Array([1]),
          new Uint8Array([2])
        ],
        number: new BN(67)
      })
    );
  });
});
