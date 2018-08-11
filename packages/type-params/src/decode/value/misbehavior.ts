// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MisbehaviorReport } from '@polkadot/primitives/misbehavior';
import { Param$Decoded } from '../../types';

import u8aToBn from '@polkadot/util/u8a/toBn';

const O_PHASH = 0;
const O_PNUM = 32;
const O_AUTH = O_PNUM + 8;
const O_TYPE = O_AUTH + 32;
const A_HASH = O_TYPE + 1;
const A_SIG = A_HASH + 32;
const B_HASH = A_SIG + 64;
const B_SIG = B_HASH + 32;

const length = B_SIG + 64;

export default function misbehavior (input: Uint8Array): Param$Decoded {
  return {
    length,
    value: ({
      parentHash: input.subarray(O_PHASH, O_PNUM),
      number: u8aToBn(input.subarray(O_PNUM, O_AUTH), true),
      authorityId: input.subarray(O_AUTH, O_TYPE),
      type: input[O_TYPE],
      data: [
        {
          header: input.subarray(A_HASH, A_SIG),
          signature: input.subarray(A_SIG, B_HASH)
        },
        {
          header: input.subarray(B_HASH, B_SIG),
          signature: input.subarray(B_SIG)
        }
      ]
    } as MisbehaviorReport)
  };
}
