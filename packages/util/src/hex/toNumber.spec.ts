// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToNumber } from '.';

describe('hexToNumber', () => {
  it('converts an empty to NaN', () => {
    expect(
      hexToNumber()
    ).toEqual(NaN);
  });

  it('converts to a number from hex', () => {
    expect(
      hexToNumber('0x1234')
    ).toEqual(0x1234);
  });
});
