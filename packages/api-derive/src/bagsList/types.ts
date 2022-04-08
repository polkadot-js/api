// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PalletBagsListListBag, PalletBagsListListNode } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';

export interface BagBase {
  bag: PalletBagsListListBag | null;
  id: BN;
  key: string;
}

export interface Bag extends BagBase {
  nodes: PalletBagsListListNode[];
}

export interface BagListEntry extends BagBase {
  bagUpper: BN;
  bagLower: BN;
  index: number;
}

export type BagList = BagListEntry[];
