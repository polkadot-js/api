// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance } from '@polkadot/types/interfaces';

export interface DeriveCouncilVote {
  stake: Balance;
  votes: AccountId[];
}

export type DeriveCouncilVotes = [AccountId, DeriveCouncilVote][];
