// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletBagsListListBag, PalletBagsListListNode } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';

export interface BagBase {
  bag: PalletBagsListListBag | null;
  id: BN;
}

export interface Bag extends BagBase {

  nodes: PalletBagsListListNode[];
}
