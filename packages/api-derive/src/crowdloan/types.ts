// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Balance } from '@polkadot/types/interfaces';

export interface DeriveContributions {
  blockHash: string;
  contributorsHex: string[];
}

export type DeriveOwnContributions = Record<string, Balance>;
