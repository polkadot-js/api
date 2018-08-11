// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ParaChainId } from '../../base';
import { JsonParaChainId } from '../types';

import bnEncode from '../bn/encode';

export default function parachainIdEncode (value: ParaChainId): JsonParaChainId {
  return bnEncode(value, 64);
}
