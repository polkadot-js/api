// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isFunction, isObject, isUndefined } from '@polkadot/util';

// NOTE These are used internally and when comparing objects, expects that
// when the second is an Map<string, Codec> that the first has to be as well
export default function compareMap (a: Map<any, any>, b?: any): boolean {
  if (Array.isArray(b)) {
    return (a.size === b.length) && isUndefined(
      b.find((entry) => {
        if (!Array.isArray(entry) || entry.length !== 2) {
          return true;
        }

        const value = a.get(entry[0]);

        return isUndefined(value) || (
          // Codec has .eq, use it here
          isFunction(value.eq)
            ? !value.eq(entry[1])
            : value !== entry[1]
        );
      })
    );
  } else if (b instanceof Map) {
    return compareMap(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareMap(a, Object.entries(b));
  }

  return false;
}
