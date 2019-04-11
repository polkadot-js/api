// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isInstanceOf } from '.';

describe('isInstanceOf', () => {
  it('returns true on real instances', () => {
    expect(
      isInstanceOf(new Array(2), Array)
    ).toEqual(true);
  });

  it('returns false on non-allocated instances', () => {
    expect(
      isInstanceOf([], Array)
    ).toEqual(true);
  });

  it('returns false on non-instances', () => {
    expect(
      isInstanceOf('array', Array)
    ).toEqual(false);
  });

  it('returns false when class not specified', () => {
    expect(
      isInstanceOf('array', Array)
    ).toEqual(false);
  });

  it('returns false on wrong class type', () => {
    expect(
      isInstanceOf(new Array(2), String)
    ).toEqual(false);
  });
});
