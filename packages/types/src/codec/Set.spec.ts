// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Set from './Set';

const SET_FIELDS = {
  header:        0b00000001,
  body:          0b00000010,
  receipt:       0b00000100,
  messageQueue:  0b00001000,
  justification: 0b00010000
};
const SET_ROLES = {
  none:      0b00000000,
  full:      0b00000001,
  light:     0b00000010,
  authority: 0b00000100
};

describe('Set', () => {
  it('constructs via an Array<string>', () => {
    const set = new Set(SET_ROLES, ['full', 'authority']);

    expect(set.isEmpty).toEqual(false);
    expect(set.toString()).toEqual(
      '[full, authority]'
    );
  });

  it('throws with invalid values', () => {
    expect(
      () => new Set(SET_ROLES, ['full', 'authority', 'invalid'])
    ).toThrow(/Invalid key 'invalid'/);
  });

  it('throws with add on invalid', () => {
    expect(
      () => (new Set(SET_ROLES, [])).add('invalid')
    ).toThrow(/Invalid key 'invalid'/);
  });

  it('constructs via Uint8Array', () => {
    const set = new Set(SET_FIELDS, new Uint8Array([0b00000001 | 0b00000010 | 0b00010000 | 0b10000000]));

    expect(set.encodedLength).toEqual(1);
    expect(set.toJSON()).toEqual([
      'header', 'body', 'justification'
    ]);
  });

  it('hash a valid encoding', () => {
    const set = new Set(SET_FIELDS, ['header', 'body', 'justification']);

    expect(set.toU8a()).toEqual(new Uint8Array([19]));
  });

  describe('utils', () => {
    const set = new Set(SET_ROLES, ['full', 'authority']);

    it('compares against string array', () => {
      expect(
        set.eq(['authority', 'full'])
      ).toBe(true);
    });

    it('compares against number (encoded)', () => {
      expect(
        set.eq(SET_ROLES.full | SET_ROLES.authority)
      ).toBe(true);
    });

    it('compares against other sets', () => {
      expect(
        set.eq(new Set(SET_ROLES, ['authority', 'full']))
      ).toBe(true);
    });

    it('returns false on other values', () => {
      expect(
        set.eq('full')
      ).toBe(false);
    });
  });
});
