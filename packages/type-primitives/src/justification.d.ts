// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Header } from './header';
import { UncheckedRaw } from './extrinsic';
import BN from 'bn.js';

export type Justification$Signature = {
  address: Uint8Array,
  signature: Uint8Array
};

export type Justification = {
  hash: Uint8Array,
  round: BN,
  signatures: Array<Justification$Signature>
}
