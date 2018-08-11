// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Bytes } from '../../base';
import { JsonBytes } from '../types';

import hexToU8a from '@polkadot/util/hex/toU8a';

export default function bytesDecode (value: JsonBytes): Bytes {
  return Array.isArray(value)
    ? new Uint8Array(value)
    : hexToU8a(value);
}
