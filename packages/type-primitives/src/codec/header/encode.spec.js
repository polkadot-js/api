// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { encodeHeader } from './index';

describe('encodeHeader', () => {
  it('encodes the block header as u8a', () => {
    expect(
      encodeHeader({
        digest: {
          logs: [
            new Uint8Array([1, 2, 3]),
            new Uint8Array([7, 8, 9, 10])
          ]
        },
        extrinsicsRoot: new Uint8Array([
          6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0
        ]),
        parentHash: new Uint8Array([
          5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0
        ]),
        number: 67,
        stateRoot: new Uint8Array([
          3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0
        ])
      })
    ).toEqual(
      new Uint8Array([
        // parentHash
        5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0,
        // number
        67, 0, 0, 0, 0, 0, 0, 0,
        // stateRoot
        3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0,
        // extrinsicsRoot
        6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0,
        // digest (length, log1, log2)
        2, 0, 0, 0,
        3, 0, 0, 0, 1, 2, 3,
        4, 0, 0, 0, 7, 8, 9, 10
      ])
    );
  });
});
