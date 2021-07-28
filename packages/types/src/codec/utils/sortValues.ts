// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '../../types';
import type { Enum } from '../Enum';

import { isBn, isFunction, isNumber, stringify } from '@polkadot/util';

type SortArg = Codec | Codec[] | number[] | number | Uint8Array

/** @internal **/
function isArrayLike (arg: SortArg): arg is Uint8Array | Codec[] | number[] {
  return arg instanceof Uint8Array || Array.isArray(arg);
}

/** @internal **/
function isCodec (arg: SortArg): arg is Codec {
  return isFunction(arg && (arg as Codec).toU8a);
}

/** @internal **/
function isEnum (arg: SortArg): arg is Enum {
  return isCodec(arg) && isNumber((arg as Enum).index) && isCodec((arg as Enum).value);
}

/**
* Sort keys/values of BTreeSet/BTreeMap in acending order for encoding compatibility with Rust's BTreeSet/BTreeMap
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html)
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeMap.html)
*/
export function sortAsc<V extends SortArg = Codec> (a: V, b: V): number {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else if (a instanceof Map && b instanceof Map) {
    return sortAsc(Array.from(a.values()), Array.from(b.values()));
  } else if (isEnum(a) && isEnum(b)) {
    return sortAsc(a.index, b.index) || sortAsc(a.value, b.value);
  } else if (isArrayLike(a) && isArrayLike(b)) {
    // Vec, Tuple, Bytes etc.
    let sortRes = 0;
    const minLen = Math.min(a.length, b.length);

    for (let i = 0; i < minLen; ++i) {
      sortRes = sortAsc(a[i], b[i]);

      if (sortRes !== 0) {
        return sortRes;
      }
    }

    return a.length - b.length;
  } else if (isBn(a) && isBn(b)) {
    return a.cmp(b);
  } else if (isCodec(a) && isCodec(b)) {
    // Text, Bool etc.
    return sortAsc(a.toU8a(true), b.toU8a(true));
  }

  throw new Error(`Attempting to sort unrecognized value: ${stringify(a)}`);
}

export function sortSet<V extends Codec = Codec> (set: Set<V>): Set<V> {
  return new Set(Array.from(set).sort(sortAsc));
}

export function sortMap<K extends Codec = Codec, V extends Codec = Codec> (map: Map<K, V>): Map<K, V> {
  return new Map(Array.from(map.entries()).sort(([keyA], [keyB]) => sortAsc(keyA, keyB)));
}
