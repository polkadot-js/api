// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '../../types';

import { AbstractArray } from '../AbstractArray';
import { AbstractInt } from '../AbstractInt';
import { Enum, Struct } from '..';

type SortArg = Codec | Codec[] | number[] | number | Uint8Array

/** @internal **/
function isArrayLike (arg: SortArg): arg is AbstractArray<Codec> | Uint8Array | Codec[] | number[] {
  return arg instanceof AbstractArray || arg instanceof Uint8Array || Array.isArray(arg);
}

/** @internal **/
function isCodec (arg: SortArg): arg is Codec {
  return !!(arg && typeof (arg as Codec).toU8a === 'function');
}

/**
* Sort keys/values of BTreeSet/BTreeMap in acending order for encoding compatibility with Rust's BTreeSet/BTreeMap
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html)
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeMap.html)
*/
export function sortAsc<V extends SortArg = Codec> (a: V, b: V): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else if (a instanceof Struct && b instanceof Struct) {
    return sortAsc(Array.from(a.values()), Array.from(b.values()));
  } else if (a instanceof Enum && b instanceof Enum) {
    return sortAsc(a.index, b.index) || sortAsc(a.value, b.value);
  } else if (isArrayLike(a) && isArrayLike(b)) {
    // Vec, Tuple, Bytes etc.
    let sortRes = 0; const lenA = a.length; const lenB = b.length;
    const minLen = Math.min(lenA, lenB);

    for (let i = 0; i < minLen; ++i) {
      sortRes = sortAsc(a[i], b[i]);

      if (sortRes !== 0) {
        return sortRes;
      }
    }

    return lenA - lenB;
  } else if (a instanceof AbstractInt && b instanceof AbstractInt) {
    return a.cmp(b);
  } else if (isCodec(a) && isCodec(b)) {
    // Text, Bool etc.
    return sortAsc(a.toU8a(true), b.toU8a(true));
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
