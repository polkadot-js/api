// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Justification, Justification$Signature } from '../../justification';

import u8aToBn from '@polkadot/util/u8a/toBn';

export default function decodeJustification (u8a: Uint8Array): Justification {
  let offset = 4 + 32;
  const round = u8aToBn(u8a.subarray(0, 4), true);
  const hash = u8a.subarray(4, 4 + 32);
  const signatures: Array<Justification$Signature> = [];
  const numSigs = u8aToBn(u8a.subarray(offset, offset + 4), true).toNumber();

  offset += 4;

  for (let index = 0; index < numSigs; index++, offset += (32 + 64)) {
    signatures.push({
      address: u8a.subarray(offset, offset + 32),
      signature: u8a.subarray(offset + 32, offset + 32 + 64)
    });
  }

  return {
    hash,
    round,
    signatures
  };
}
