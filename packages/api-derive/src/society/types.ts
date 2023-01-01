// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from '@polkadot/types';
import type { AccountId, Balance, BalanceOf, BlockNumber, StrikeCount } from '@polkadot/types/interfaces';
import type { PalletSocietyBid, PalletSocietyBidKind, PalletSocietyVote, PalletSocietyVouchingStatus } from '@polkadot/types/lookup';

export interface DeriveSociety {
  bids: PalletSocietyBid[];
  defender?: AccountId;
  hasDefender: boolean;
  head?: AccountId;
  founder?: AccountId;
  maxMembers: u32;
  pot: BalanceOf;
}

export interface DeriveSocietyCandidate {
  accountId: AccountId;
  kind: PalletSocietyBidKind;
  value: Balance;
  isSuspended: boolean;
}

export interface DeriveSocietyMember {
  accountId: AccountId;
  isDefenderVoter: boolean;
  isSuspended: boolean;
  payouts: [BlockNumber, Balance][];
  strikes: StrikeCount;
  vote?: PalletSocietyVote;
  vouching?: PalletSocietyVouchingStatus;
}
