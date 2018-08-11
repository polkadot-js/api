// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Bytes } from '../../base';
import { JsonBytes } from '../types';

import u8aToHex from '@polkadot/util/u8a/toHex';

export default function bytesEncode (value: Bytes): JsonBytes {
  return u8aToHex(value);
}
