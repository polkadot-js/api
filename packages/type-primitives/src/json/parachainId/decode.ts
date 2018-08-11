// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ParaChainId } from '../../base';
import { JsonParaChainId } from '../types';

import bnDecode from '../bn/decode';

export default function parachainIdDecode (value: JsonParaChainId): ParaChainId {
  return bnDecode(value, 64);
}
