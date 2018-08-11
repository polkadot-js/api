// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AccountId, BlockNumber, HeaderHash, Signature } from './base';

export type MisbehaviorReport = {
  authorityId: AccountId,
  number: BlockNumber,
  parentHash: HeaderHash,
  type: number,
  data: Array<{
    header: HeaderHash,
    signature: Signature
  }>
};
