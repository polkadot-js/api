// Copyright 2017-2026 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { LRUCache } from './lru.js';

describe('LRUCache', (): void => {
  let lru: LRUCache | undefined;

  beforeEach((): void => {
    lru = new LRUCache(4, 500);
  });

  it('allows getting of items below capacity', (): void => {
    const keys = ['1', '2', '3', '4'];

    keys.forEach((k) => lru?.set(k, `${k}${k}${k}`));
    const lruKeys = lru?.keys();

    expect(lruKeys?.join(', ')).toBe(keys.reverse().join(', '));
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);

    keys.forEach((k) => expect(lru?.get(k)).toEqual(`${k}${k}${k}`));
  });

  it('drops items when at capacity', (): void => {
    const keys = ['1', '2', '3', '4', '5', '6'];

    keys.forEach((k) => lru?.set(k, `${k}${k}${k}`));

    expect(lru?.keys().join(', ')).toEqual(keys.slice(2).reverse().join(', '));
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);

    keys.slice(2).forEach((k) => expect(lru?.get(k)).toEqual(`${k}${k}${k}`));
  });

  it('adjusts the order as they are used', (): void => {
    const keys = ['1', '2', '3', '4', '5'];

    keys.forEach((k) => lru?.set(k, `${k}${k}${k}`));

    expect(lru?.entries()).toEqual([['5', '555'], ['4', '444'], ['3', '333'], ['2', '222']]);
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);

    lru?.get('3');

    expect(lru?.entries()).toEqual([['3', '333'], ['5', '555'], ['4', '444'], ['2', '222']]);
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);

    lru?.set('4', '4433');

    expect(lru?.entries()).toEqual([['4', '4433'], ['3', '333'], ['5', '555'], ['2', '222']]);
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);

    lru?.set('6', '666');

    expect(lru?.entries()).toEqual([['6', '666'], ['4', '4433'], ['3', '333'], ['5', '555']]);
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);
  });

  it('retains all entries when the oldest entry is retrieved', (): void => {
    const keys = ['1', '2', '3', '4'];

    keys.forEach((k) => lru?.set(k, `${k}${k}${k}`));

    // '1' is the least-recently-used entry, i.e. the internal list tail
    expect(lru?.get('1')).toBe('111');

    expect(lru?.keys().length).toBe(lru?.lengthData);
    expect(lru?.entries()).toEqual([['1', '111'], ['4', '444'], ['3', '333'], ['2', '222']]);
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);
  });

  it('evicts the least-recently-used entry after the oldest entry is retrieved', (): void => {
    const keys = ['1', '2', '3', '4'];

    keys.forEach((k) => lru?.set(k, `${k}${k}${k}`));

    lru?.get('1');
    lru?.set('5', '555');

    // the get('1') made '2' the least-recently-used entry, so it is the
    // one dropped by the set('5') above, with '1' itself retained
    expect(lru?.get('2')).toBe(null);
    expect(lru?.get('1')).toBe('111');
    expect(lru?.entries()).toEqual([['1', '111'], ['5', '555'], ['4', '444'], ['3', '333']]);
    expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);
  });

  it('keeps the list and data in sync over repeated oldest-entry retrievals', (): void => {
    for (let i = 0; i < 32; i++) {
      lru?.set(`${i}`, `value${i}`);

      const keys = lru?.keys() ?? [];

      // retrieve the oldest entry, i.e. the one at the internal list tail
      lru?.get(keys[keys.length - 1]);

      expect(lru?.keys().length).toBe(lru?.length);
      expect(lru?.length === lru?.lengthData && lru?.length === lru?.lengthRefs).toBe(true);
    }
  });

  it('evicts items with TTL', (): void => {
    const keys = ['1', '2', '3', '4', '5'];

    keys.forEach((k) => lru?.set(k, `${k}${k}${k}`));

    expect(lru?.entries()).toEqual([['5', '555'], ['4', '444'], ['3', '333'], ['2', '222']]);

    setTimeout((): void => {
      lru?.get('3');
      expect(lru?.entries()).toEqual([['3', '333']]);
    }, 800);
  });
});
