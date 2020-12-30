// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Block, BlockNumber, EventRecord, Hash, Justification } from '@polkadot/types/interfaces';

export interface FullNewBlock {
  block: Block;
  blockHash: Hash;
  blockNumber: BlockNumber;
  events: EventRecord[];
  justification: Justification;
}
