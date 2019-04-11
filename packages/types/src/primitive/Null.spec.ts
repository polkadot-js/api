// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Null from './Null';

describe('Null', () => {
  it('compares against null', () => {
    expect(new Null().eq(null)).toBe(true);
  });

  it('compares against Null', () => {
    expect(new Null().eq(new Null())).toBe(true);
  });

  it('compares against other (failed)', () => {
    expect(new Null().eq()).toBe(false);
  });
});
