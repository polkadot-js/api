// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Method from './Method';

describe('Metadata', () => {
  it('throws when not decodable', () => {
    expect(() => new Method('foo')).toThrowError(/Method: cannot decode value/);
  });
});
