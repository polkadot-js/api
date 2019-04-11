// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isNumber } from '.';

describe('isNumber', () => {
  it('returns true on valid numbers', () => {
    expect(
      isNumber(2)
    ).toEqual(true);
  });

  it('returns false on invalid numbers', () => {
    expect(
      isNumber('2')
    ).toEqual(false);
  });
});
