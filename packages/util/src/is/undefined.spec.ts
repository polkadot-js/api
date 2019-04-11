// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isUndefined } from '.';

describe('isUndefined', () => {
  it('returns true on undefined values', () => {
    expect(
      isUndefined()
    ).toEqual(true);
  });

  it('returns false on defined values', () => {
    expect(
      isUndefined(null)
    ).toEqual(false);
  });
});
