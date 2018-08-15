// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Block } from '../../block';

import createBlock from '../../create/block';
import decodeHeader from '../header/decode';
import decodeRaw from './decodeRaw';

export default function decodeBlock (u8a: Uint8Array): Block {
  const { header, extrinsics } = decodeRaw(u8a);

  return createBlock({
    header: decodeHeader(header),
    extrinsics
  });
}
