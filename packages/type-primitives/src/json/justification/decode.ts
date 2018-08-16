// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockJustificationDecoded } from '@polkadot/params/types';
import { JsonJustification } from '../types';

import BN from 'bn.js';
import toU8a from '@polkadot/util/u8a/toU8a';
import addressEncode from '@polkadot/util-keyring/address/encode';

export default function justificcationDecode ({ hash, round_number, signatures }: JsonJustification): BlockJustificationDecoded {
  return {
    hash: toU8a(hash),
    round: new BN(round_number),
    signatures: signatures.map(([address, signature]) => ({
      address: addressEncode(toU8a(address)),
      signature: toU8a(signature)
    }))
  };
}
