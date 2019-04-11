// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isNull } from '.';

describe('isNull', () => {
  it('returns true when a null value', () => {
    expect(
      isNull(null)
    ).toEqual(true);
  });

  it('returns false on non-null values', () => {
    expect(
      isNull()
    ).toEqual(false);
  });
});
