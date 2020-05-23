// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isUndefined } from '@polkadot/util';

import { hasEq } from './util';

// NOTE These are used internally and when comparing objects, expects that
// when the second is an Codec[] that the first has to be as well
export default function compareArray (a: unknown[], b?: unknown): boolean {
  if (Array.isArray(b)) {
    return (a.length === b.length) && isUndefined(
      a.find((value, index): boolean =>
        hasEq(value)
          ? !value.eq(b[index])
          : value !== b[index]
      )
    );
  }

  return false;
}
