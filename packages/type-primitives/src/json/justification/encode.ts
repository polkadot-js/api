// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Justification } from '../../justification';
import { JsonJustification, JsonJustification$Signature } from '../types';

import u8aToHex from '@polkadot/util/u8a/toHex';

export default function justificationEncode ({ hash, round, signatures }: Justification): JsonJustification {
  return {
    hash: u8aToHex(hash),
    round_number: round.toNumber(),
    signatures: signatures.map(({ address, signature }): JsonJustification$Signature => ([
      u8aToHex(address),
      u8aToHex(signature)
    ]))
  };
}
