// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isObject, isUndefined } from '@polkadot/util';

import { hasEq } from './util';

function hasMismatch (a?: unknown, b?: unknown): boolean {
  return isUndefined(a) || (
    hasEq(a)
      ? !a.eq(b)
      : a !== b
  );
}

function notEntry (value: any): boolean {
  return !Array.isArray(value) || value.length !== 2;
}

function compareMapArray (a: Map<any, any>, b: [any, any][]): boolean {
  // equal number of entries and each entry in the array should match
  return (a.size === b.length) && !b.some((entry): boolean =>
    notEntry(entry) || hasMismatch(a.get(entry[0]), entry[1])
  );
}

// NOTE These are used internally and when comparing objects, expects that
// when the second is an Map<string, Codec> that the first has to be as well
export default function compareMap (a: Map<any, any>, b?: unknown): boolean {
  if (Array.isArray(b)) {
    return compareMapArray(a, b);
  } else if (b instanceof Map) {
    return compareMapArray(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareMapArray(a, Object.entries(b));
  }

  return false;
}
