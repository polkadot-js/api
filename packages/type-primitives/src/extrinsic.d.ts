// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AccountId, Index, Signature } from './base';

// TODO Should be the actual decoded extrinsic
export type ExtrinsicFunction = Uint8Array;

export type Unchecked = {
  index: Index,
  function: ExtrinsicFunction,
  signed: AccountId,
  signature: Signature
};

export type UncheckedRaw = Uint8Array;
