// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Decoded } from '../../types';

import isNull from '@polkadot/util/is/null';
import isUndefined from '@polkadot/util/is/undefined';

export default function bool (input: Uint8Array | null | undefined): Param$Decoded {
  if (isUndefined(input) || isNull(input)) {
    return {
      length: 0,
      value: false
    };
  }

  return {
    length: 1,
    value: input[0] !== 0
  };
}
