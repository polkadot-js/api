// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Block } from '../../block';

import headerEncode from '../header/encode';
import encodeRaw from './encodeRaw';

export default function encodeBlock ({ extrinsics, header }: Block): Uint8Array {
  return encodeRaw(
    headerEncode(header, extrinsics),
    extrinsics
  );
}
