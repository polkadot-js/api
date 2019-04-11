// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isString } from '.';

describe('isString', () => {
  it('returns true on valid strings', () => {
    expect(
      isString('123')
    ).toEqual(true);
  });

  it('returns true on empty strings', () => {
    expect(
      isString('')
    ).toEqual(true);
  });

  it('returns true on String object', () => {
    expect(
      isString(new String('foo'))
    ).toEqual(true);
  });

  it('returns false on invalid numbers', () => {
    expect(
      isString(2)
    ).toEqual(false);
  });
});
