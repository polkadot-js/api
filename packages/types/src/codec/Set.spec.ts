// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Set from './Set';

describe('Set', () => {
  it('constructs via an Array<string>', () => {
    const set = new Set({
      none:      0b00000000,
      full:      0b00000001,
      light:     0b00000010,
      authority: 0b00000100
    }, ['full', 'authority']);

    expect(set.isEmpty).toEqual(false);
    expect(set.toString()).toEqual(
      '[full, authority]'
    );
  });

  it('constructs via Uint8Array', () => {
    const set = new Set({
      header:        0b00000001,
      body:          0b00000010,
      receipt:       0b00000100,
      messageQueue:  0b00001000,
      justification: 0b00010000
    }, new Uint8Array([0b00000001 | 0b00000010 | 0b00010000]));

    expect(set.encodedLength).toEqual(1);
    expect(set.toJSON()).toEqual([
      'header', 'body', 'justification'
    ]);
  });
});
