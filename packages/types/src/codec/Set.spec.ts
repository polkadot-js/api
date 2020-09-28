// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import { TypeRegistry } from '../create';
import Set from './Set';

// TODO actually import these from definitions, don't re-define here
const SET_FIELDS = {
  header: 0b00000001,
  body: 0b00000010,
  receipt: 0b00000100,
  messageQueue: 0b00001000,
  justification: 0b00010000
};
const SET_ROLES = {
  none: 0b00000000,
  full: 0b00000001,
  light: 0b00000010,
  authority: 0b00000100
};
const SET_WITHDRAW = {
  TransactionPayment: 0b00000001,
  Transfer: 0b00000010,
  Reserve: 0b00000100,
  Fee: 0b00001000
};

describe('Set', (): void => {
  const registry = new TypeRegistry();

  it('constructs via an string[]', (): void => {
    const set = new Set(registry, SET_ROLES, ['full', 'authority']);

    expect(set.isEmpty).toEqual(false);
    expect(set.toString()).toEqual(
      '[full, authority]'
    );
  });

  it('throws with invalid values', (): void => {
    expect(
      (): Set => new Set(registry, SET_ROLES, ['full', 'authority', 'invalid'])
    ).toThrow(/Invalid key 'invalid'/);
  });

  it('throws with add on invalid', (): void => {
    expect(
      (): Set => (new Set(registry, SET_ROLES, [])).add('invalid')
    ).toThrow(/Invalid key 'invalid'/);
  });

  it('allows construction via number', (): void => {
    expect(
      (new Set(registry, SET_WITHDRAW, 15)).eq(['TransactionPayment', 'Transfer', 'Reserve', 'Fee'])
    ).toBe(true);
  });

  it('does not allow invalid number', (): void => {
    expect(
      (): Set => new Set(registry, SET_WITHDRAW, 31)
    ).toThrow(/Mismatch decoding '31', computed as '15'/);
  });

  it('hash a valid encoding', (): void => {
    const set = new Set(registry, SET_FIELDS, ['header', 'body', 'justification']);

    expect(set.toU8a()).toEqual(new Uint8Array([19]));
  });

  describe('utils', (): void => {
    const set = new Set(registry, SET_ROLES, ['full', 'authority']);

    it('compares against string array', (): void => {
      expect(
        set.eq(['authority', 'full'])
      ).toBe(true);
    });

    it('compares against number (encoded)', (): void => {
      expect(
        set.eq(SET_ROLES.full | SET_ROLES.authority)
      ).toBe(true);
    });

    it('compares against other sets', (): void => {
      expect(
        set.eq(new Set(registry, SET_ROLES, ['authority', 'full']))
      ).toBe(true);
    });

    it('returns false on other values', (): void => {
      expect(
        set.eq('full')
      ).toBe(false);
    });
  });

  it('has a sane toRawType representation', (): void => {
    expect(
      new Set(registry, { a: 1, b: 2, c: 345 }).toRawType()
    ).toEqual(JSON.stringify({
      _set: { a: 1, b: 2, c: 345 }
    }));
  });
});
