// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockDecoded } from '@polkadot/params/types';
import { JsonBlock } from '../types';

import toU8a from '@polkadot/util/u8a/toU8a';

import decodeExtrinsic from '../extrinsic/decode';
import decodeHeader from '../header/decode';

export default function blockDecode ({ block: { extrinsics, header }, justification }: JsonBlock): BlockDecoded {
  return {
    // TODO We should decode the justifications (and change type from any)
    justification,
    header: decodeHeader(header),
    extrinsics: extrinsics.map((extrinsic) =>
      decodeExtrinsic(
        toU8a(extrinsic as any)
      )
    )
  };
}
