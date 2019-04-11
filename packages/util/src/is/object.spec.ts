// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isObject } from '.';

describe('isObject', () => {
  it('returns true on valid objects', () => {
    expect(
      isObject({})
    ).toEqual(true);
  });

  it('returns false on invalid objects', () => {
    expect(
      isObject('notAnObject')
    ).toEqual(false);
  });
});
