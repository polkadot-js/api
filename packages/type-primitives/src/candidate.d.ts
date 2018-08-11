// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AccountId, Balance, Bytes, ChainId, Hash, Signature } from './base';

export type Candidate = {
  parachainIndex: ChainId,
  collatorSignature: Signature,
  unprocessedIngress: Array<Array<Array<Bytes>>>,
  blockData: Bytes
};

export type CandidateReceipt$BalanceUpload = [AccountId, Balance];
export type CandidateReceipt$EgressQueueRoot = [ChainId, Hash];

export type CandidateReceipt = {
  parachainIndex: ChainId,
  collator: AccountId,
  headData: Bytes,
  balanceUploads: Array<CandidateReceipt$BalanceUpload>,
  egressQueueRoots: Array<CandidateReceipt$EgressQueueRoot>,
  fees: Balance
};
