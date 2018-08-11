// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import extrinsics from '../../index';

import extrinsic from './extrinsic';

describe('extrinsic', () => {
  it('encodes extrinsic correctly', () => {
    expect(
      extrinsic(
        extrinsics.timestamp.public.set,
        [10101],
        'latest'
      )
    ).toEqual(
      new Uint8Array([
        // index
        3, 0,
        // values
        117, 39, 0, 0, 0, 0, 0, 0
      ])
    );
  });
});
