// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockDecoded } from '@polkadot/params/types';
import { JsonBlock } from '../types';

import toU8a from '@polkadot/util/u8a/toU8a';

import decodeExtrinsic from '../extrinsic/decode';
import decodeHeader from '../header/decode';
import decodeJustification from '../justification/decode';

export default function blockDecode ({ block: { extrinsics, header }, justification }: JsonBlock): BlockDecoded {
  return {
    extrinsics: extrinsics.map((extrinsic) =>
      decodeExtrinsic(
        toU8a(extrinsic as any)
      )
    ),
    header: decodeHeader(header),
    justification: decodeJustification(justification)
  };
}
