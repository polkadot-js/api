// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface DeriveContributions {
  blockHash: string;
  childKey: string;
  contributorsHex: string[];
  contributorsMap: Record<string, boolean>;
  hasKeys: boolean;
}
