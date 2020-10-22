// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';

export interface FullNewBlock {
  block: SignedBlock;
  blockHash: Hash;
  events: EventRecord[];
}
