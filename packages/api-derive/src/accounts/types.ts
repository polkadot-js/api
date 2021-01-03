// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, AccountIndex, RegistrationJudgement } from '@polkadot/types/interfaces';

export type AccountIdAndIndex = [AccountId?, AccountIndex?];

export type AccountIndexes = Record<string, AccountIndex>;

export interface DeriveAccountRegistration {
  display?: string;
  displayParent?: string;
  email?: string;
  image?: string;
  legal?: string;
  other?: Record<string, string>;
  parent?: AccountId;
  pgp?: string;
  riot?: string;
  twitter?: string;
  web?: string;
  judgements: RegistrationJudgement[];
}

export interface DeriveAccountFlags {
  isCouncil: boolean;
  isSociety: boolean;
  isSudo: boolean;
  isTechCommittee: boolean;
}

export interface DeriveAccountInfo {
  accountId?: AccountId;
  accountIndex?: AccountIndex;
  identity: DeriveAccountRegistration;
  nickname?: string;
}

export interface DeriveHasIdentity {
  display?: string;
  hasIdentity: boolean;
  parentId?: string;
}
