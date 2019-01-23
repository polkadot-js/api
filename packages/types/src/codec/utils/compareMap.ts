// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../../types';

import { isObject, isUndefined } from '@polkadot/util';

export default function compareMap (a: Map<any, Codec>, b?: any): boolean {
  if (Array.isArray(b)) {
    // compare the entries, assuming the b has an `[key, value]` map
    const entries = [...a.entries()];

    return entries.length === b.length && isUndefined(
      entries.find(([key, value], index) => {
        const test = b[index];

        return Array.isArray(test) && key === test[0] && value.eq(test[1]);
      })
    );
  } else if (b instanceof Map) {
    return compareMap(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareMap(a, Object.entries(b));
  }

  return false;
}
