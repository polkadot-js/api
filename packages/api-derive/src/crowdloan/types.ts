// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Balance } from '@polkadot/types/interfaces';

export interface DeriveContributions {
  blockHash: string;
  childKey: string;
  contributorsHex: string[];
  contributorsMap: Record<string, boolean>;
}

export type DeriveOwnContributions = Record<string, Balance>;
