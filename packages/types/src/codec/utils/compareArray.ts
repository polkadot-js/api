// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '../../types';

import { isUndefined } from '@polkadot/util';

export default function compareArray (a: Array<Codec>, b?: any): boolean {
  if (Array.isArray(b)) {
    return a.length === b.length && isUndefined(
      a.find((value, index) => !value.eq(b[index]))
    );
  }

  return false;
}
