// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { HexString } from '@polkadot/util/types';
import type { Enum } from '../base/Enum.js';
import type { Option } from '../base/Option.js';
import type { Codec } from '../types/index.js';

import { bnToBn, isBigInt, isBn, isBoolean, isCodec, isNumber, stringify } from '@polkadot/util';

type SortArg = Codec | Codec[] | number[] | BN | bigint | number | Uint8Array;

/** @internal **/
function isArrayLike (arg: SortArg): arg is Uint8Array | Codec[] | number[] {
  return arg instanceof Uint8Array || Array.isArray(arg);
}

/** @internal **/
function isEnum (arg: SortArg): arg is Enum {
  return isCodec<Codec>(arg) && isNumber((arg as Enum).index) && isCodec((arg as Enum).value);
}

/** @internal **/
function isOption (arg: SortArg): arg is Option<Codec> {
  return isCodec<Codec>(arg) && isBoolean((arg as Option<Codec>).isSome) && isCodec((arg as Option<Codec>).value);
}

/** @internal */
function isNumberLike (arg: SortArg): arg is BN | bigint | number {
  return isNumber(arg) || isBn(arg) || isBigInt(arg);
}

/** @internal */
function sortArray (a: Uint8Array | Codec[] | number[], b: Uint8Array | Codec[] | number[]): number {
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
}

/** @internal */
function checkForDuplicates (container: string, seen: Set<HexString>, arg: SortArg): boolean {
  // Convert the value to hex.
  if (isCodec<Codec>(arg)) {
    const hex = arg.toHex();

    // Check if we have seen the value.
    if (seen.has(hex)) {
      // Duplicates are not allowed.
      throw new Error(`Duplicate value in ${container}: ${stringify(arg)}`);
    }

    seen.add(hex);
  }

  return true;
}

/**
* Sort keys/values of BTreeSet/BTreeMap in ascending order for encoding compatibility with Rust's BTreeSet/BTreeMap
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html)
* (https://doc.rust-lang.org/stable/std/collections/struct.BTreeMap.html)
*/
export function sortAsc<V extends SortArg = Codec> (a: V, b: V): number {
  if (isNumberLike(a) && isNumberLike(b)) {
    return bnToBn(a).cmp(bnToBn(b));
  } else if (a instanceof Map && b instanceof Map) {
    return sortAsc(Array.from(a.values()), Array.from(b.values()));
  } else if (isEnum(a) && isEnum(b)) {
    return sortAsc(a.index, b.index) || sortAsc(a.value, b.value);
  } else if (isOption(a) && isOption(b)) {
    return sortAsc(a.isNone ? 0 : 1, b.isNone ? 0 : 1) || sortAsc(a.value, b.value);
  } else if (isArrayLike(a) && isArrayLike(b)) {
    return sortArray(a, b);
  } else if (isCodec<Codec>(a) && isCodec<Codec>(b)) {
    // Text, Bool etc.
    return sortAsc(a.toU8a(true), b.toU8a(true));
  }

  throw new Error(`Attempting to sort unrecognized values: ${stringify(a)} (typeof ${typeof a}) <-> ${stringify(b)} (typeof ${typeof b})`);
}

export function sortSet<V extends Codec = Codec> (set: Set<V>): Set<V> {
  const seen = new Set<HexString>();

  return new Set(Array.from(set).filter((value) => checkForDuplicates('BTreeSet', seen, value)).sort(sortAsc));
}

export function sortMap<K extends Codec = Codec, V extends Codec = Codec> (map: Map<K, V>): Map<K, V> {
  const seen = new Set<HexString>();

  return new Map(Array.from(map.entries()).filter(([key]) => checkForDuplicates('BTreeMap', seen, key)).sort(([keyA], [keyB]) => sortAsc(keyA, keyB)));
}
