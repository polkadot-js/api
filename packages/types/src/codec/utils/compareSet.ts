// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isObject } from '@polkadot/util';

// NOTE These are used internally and when comparing objects, expects that
// when the second is an Set<string, Codec> that the first has to be as well
export default function compareSet (a: Set<any>, b?: any): boolean {
  if (Array.isArray(b)) {
    // equal number of entries and each entry in the array should match
    return (a.size === b.length) && !b.some((entry): boolean => !a.has(entry));
  } else if (b instanceof Set) {
    return compareSet(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareSet(a, Object.entries(b));
  }

  return false;
}
