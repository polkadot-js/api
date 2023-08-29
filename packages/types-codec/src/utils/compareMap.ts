// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isObject, isUndefined } from '@polkadot/util';

import { hasEq } from './util.js';

function hasMismatch (a?: unknown, b?: unknown): boolean {
  return isUndefined(a) || (
    hasEq(a)
      ? !a.eq(b)
      : a !== b
  );
}

function notEntry (value: unknown): boolean {
  return !Array.isArray(value) || value.length !== 2;
}

function compareMapArray (a: Map<unknown, unknown>, b: [unknown, unknown][]): boolean {
  // equal number of entries and each entry in the array should match
  return (a.size === b.length) && !b.some((e) =>
    notEntry(e) ||
    hasMismatch(a.get(e[0]), e[1])
  );
}

// NOTE These are used internally and when comparing objects, we expect that
// when the second is an Map<string, Codec> that the first has to be as well
export function compareMap (a: Map<unknown, unknown>, b?: unknown): boolean {
  if (Array.isArray(b)) {
    return compareMapArray(a, b as [unknown, unknown][]);
  } else if (b instanceof Map) {
    return compareMapArray(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareMapArray(a, Object.entries(b));
  }

  return false;
}
