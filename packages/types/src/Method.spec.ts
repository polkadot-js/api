// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsics from '@polkadot/extrinsics/static';

import Method from './Method';

describe('Method', () => {
  beforeEach(() => {
    Method.injectExtrinsics(extrinsics);
  });

  it('throws when not decodable', () => {
    expect(
      () => new Method('foo')
    ).toThrowError(/Method: cannot decode value/);
  });

  it('handles decoding correctly (bare)', () => {
    expect(
      new Method({
        args: [],
        callIndex: [1, 2]
      }).toU8a()
    ).toEqual(new Uint8Array([1, 2]));
  });
});
