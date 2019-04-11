// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction } from '.';

describe('isFunction', () => {
  it('returns true on valid functions', () => {
    expect(
      isFunction(isFunction)
    ).toEqual(true);
  });

  it('returns false on invalid functions', () => {
    expect(
      isFunction('notAFunction')
    ).toEqual(false);
  });
});
