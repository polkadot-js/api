// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import testingPairs from '@polkadot/util-keyring/testingPairs';

import call from './call';

const keyring = testingPairs();

describe('call', () => {
  it('encodes the call correctly (poc-1)', () => {
    expect(
      call(
        keyring.one.publicKey(),
        1234,
        new Uint8Array([0xab, 0xcd]),
        'poc-1'
      )
    ).toEqual(
      new Uint8Array([
        // key
        47, 140, 97, 41, 216, 22, 207, 81, 195, 116, 188, 127, 8, 195, 230, 62, 209, 86, 207, 120, 174, 251, 74, 101, 80, 217, 123, 135, 153, 121, 119, 238,
        // nonce (u64)
        210, 4, 0, 0, 0, 0, 0, 0,
        // data
        171, 205
      ])
    );
  });

  it('encodes the call correctly (latest)', () => {
    expect(
      call(
        keyring.one.publicKey(),
        1234,
        new Uint8Array([0xab, 0xcd]),
        'latest'
      )
    ).toEqual(
      new Uint8Array([
        // key
        47, 140, 97, 41, 216, 22, 207, 81, 195, 116, 188, 127, 8, 195, 230, 62, 209, 86, 207, 120, 174, 251, 74, 101, 80, 217, 123, 135, 153, 121, 119, 238,
        // nonce (u32)
        210, 4, 0, 0,
        // data
        171, 205
      ])
    );
  });
});
