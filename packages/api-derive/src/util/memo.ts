
// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import memoizee from 'memoizee';

export function memo <T extends Function> (fn: T): T {
  return memoizee(fn, {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    normalizer: JSON.stringify
  });
}
