// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import testingPairs from '@polkadot/util-keyring/testingPairs';

import extrinsics from '../../index';
import encode from './index';

const keyring = testingPairs();

describe('encode', () => {
  it('encodes extrinsic correctly', () => {
    expect(
      encode(
        keyring.nobody.publicKey(), 1234,
        extrinsics.timestamp.public.set,
        [10101],
        'latest'
      )
    ).toEqual(
      new Uint8Array([
        // publicKey
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        // account nonce
        210, 4, 0, 0,
        // extrinsic index
        3, 0,
        // values
        117, 39, 0, 0, 0, 0, 0, 0
      ])
    );
  });
});
