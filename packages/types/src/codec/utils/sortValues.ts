// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '../../types';

import { AbstractArray } from '../AbstractArray';
import { AbstractInt } from '../AbstractInt';

/**
* Sort keys/values of BTreeSet/BTreeMap in acending order for encoding compatibility with Rust's BTreeSet/BTreeMap
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html)
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeMap.html)
*/
export function sortAsc<V extends Codec | number[] | number | Uint8Array = Codec> (a: V, b: V): number {
  if (typeof a === 'number') {
    return a - (b as typeof a);
  } else if (a instanceof AbstractArray || a instanceof Uint8Array || Array.isArray(a)) {
    // Vec, Tuple, Bytes etc.
    let sortRes = 0; const lenA = a.length; const lenB = (b as typeof a).length;
    const minLen = Math.min(lenA, lenB);

    for (let i = 0; i < minLen; ++i) {
      sortRes = sortAsc(a[i], (b as typeof a)[i]);

      if (sortRes !== 0) {
        return sortRes;
      }
    }

    return lenA - lenB;
  } else if (a instanceof AbstractInt) {
    return a.eq(b) ? 0 : a.lt(b as typeof a) ? -1 : 1;
  } else if (a && typeof a.toU8a === 'function') {
    // Fallback
    return sortAsc(a.toU8a(true), (b as Codec).toU8a(true));
  } else {
    throw new Error(`Attempting to sort unrecognized value: ${JSON.stringify(a)}`);
  }
}

export function sortSet<V extends Codec = Codec> (set: Set<V>): Set<V> {
  return new Set(Array.from(set).sort(sortAsc));
}

export function sortMap<K extends Codec = Codec, V extends Codec = Codec> (map: Map<K, V>): Map<K, V> {
  return new Map(Array.from(map.entries()).sort(([keyA], [keyB]) => sortAsc(keyA, keyB)));
}
