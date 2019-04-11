// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import encode from './encode';
import setPrefix from './setPrefix';

describe('setPrefix', () => {
  beforeEach(() => {
    setPrefix(68);
  });

  it('sets and allows encoding using', () => {
    expect(
      encode(
        new Uint8Array([1])
      )
    ).toEqual('PqtB');
  });
});
