// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

import { LRUCache } from './lru.js';

describe('LRUCache', (): void => {
  it('allows getting of items below capacity', (): void => {
    const keys = ['1', '2', '3', '4'];
    const lru = new LRUCache(4);

    keys.forEach((k) => lru.set(k, `${k}${k}${k}`));

    expect(lru.keys().join(', ')).toEqual(keys.reverse().join(', '));
    expect(lru.length === lru.lengthData && lru.length === lru.lengthRefs).toBe(true);

    keys.forEach((k) => expect(lru.get(k)).toEqual(`${k}${k}${k}`));
  });

  it('drops items when at capacity', (): void => {
    const keys = ['1', '2', '3', '4', '5', '6'];
    const lru = new LRUCache(4);

    keys.forEach((k) => lru.set(k, `${k}${k}${k}`));

    expect(lru.keys().join(', ')).toEqual(keys.slice(2).reverse().join(', '));
    expect(lru.length === lru.lengthData && lru.length === lru.lengthRefs).toBe(true);

    keys.slice(2).forEach((k) => expect(lru.get(k)).toEqual(`${k}${k}${k}`));
  });

  it('adjusts the order as they are used', (): void => {
    const keys = ['1', '2', '3', '4', '5'];
    const lru = new LRUCache(4);

    keys.forEach((k) => lru.set(k, `${k}${k}${k}`));

    expect(lru.entries()).toEqual([['5', '555'], ['4', '444'], ['3', '333'], ['2', '222']]);
    expect(lru.length === lru.lengthData && lru.length === lru.lengthRefs).toBe(true);

    lru.get('3');

    expect(lru.entries()).toEqual([['3', '333'], ['5', '555'], ['4', '444'], ['2', '222']]);
    expect(lru.length === lru.lengthData && lru.length === lru.lengthRefs).toBe(true);

    lru.set('4', '4433');

    expect(lru.entries()).toEqual([['4', '4433'], ['3', '333'], ['5', '555'], ['2', '222']]);
    expect(lru.length === lru.lengthData && lru.length === lru.lengthRefs).toBe(true);

    lru.set('6', '666');

    expect(lru.entries()).toEqual([['6', '666'], ['4', '4433'], ['3', '333'], ['5', '555']]);
    expect(lru.length === lru.lengthData && lru.length === lru.lengthRefs).toBe(true);
  });
});
