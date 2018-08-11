// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AccountId, HeaderHash, Signature } from './base';

export type Justification$Signature = [AccountId, Signature];

export type Justification = {
  roundNumber: number,
  hash: HeaderHash,
  signatures: Array<Justification$Signature>
}
