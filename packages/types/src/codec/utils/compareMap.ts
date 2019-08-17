// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction, isObject, isUndefined } from '@polkadot/util';

function hasMismatch (a?: any, b?: any): boolean {
  return isUndefined(a) || (
    // Codec has .eq, use it here
    isFunction(a.eq)
      ? !a.eq(b)
      : a !== b
  );
}

// NOTE These are used internally and when comparing objects, expects that
// when the second is an Map<string, Codec> that the first has to be as well
export default function compareMap (a: Map<any, any>, b?: any): boolean {
  if (Array.isArray(b)) {
    // equal number of entries and each entry in the array should match
    return (a.size === b.length) && !b.some((entry): boolean =>
      !Array.isArray(entry) ||
      entry.length !== 2 ||
      hasMismatch(a.get(entry[0]), entry[1])
    );
  } else if (b instanceof Map) {
    return compareMap(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareMap(a, Object.entries(b));
  }

  return false;
}
