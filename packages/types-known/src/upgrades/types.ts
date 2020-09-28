// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface ChainUpgradesRaw {
  genesisHash: string;
  versions: [number, number][];
}
