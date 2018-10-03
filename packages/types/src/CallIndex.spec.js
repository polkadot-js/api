// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CallIndex from './CallIndex';

describe('CallIndex', () => {
  it('handles u8a encoding correctly', () => {
    expect(
      new CallIndex([1, 2]).toU8a()
    ).toEqual(new Uint8Array([1, 2]));
  });
});
