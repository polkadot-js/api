// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U32 from '../../primitive/U32';
import compareArray from './compareArray';

describe('compareArray', (): void => {
  const a = [new U32(123), new U32(456), new U32(789)];

  it('returns false when second param is a non-array', (): void => {
    expect(
      compareArray(a, 123)
    ).toBe(false);
  });

  it('compares array of codec agains primitive', (): void => {
    expect(
      compareArray(a, [123, 456, 789])
    ).toBe(true);
  });

  it('compares array of codec agains codec', (): void => {
    expect(
      compareArray(a, [new U32(123), new U32(456), new U32(789)])
    ).toBe(true);
  });

  it('compares primitive against primitive', (): void => {
    expect(
      compareArray(
        [123, 456], [123, 456]
      )
    ).toBe(true);
  });

  it('returns false when lengths are not matching', (): void => {
    expect(
      compareArray(a, [123])
    ).toBe(false);
  });

  it('returns false when value mismatches', (): void => {
    expect(
      compareArray(a, [123, 456, 999])
    ).toBe(false);
  });
});
