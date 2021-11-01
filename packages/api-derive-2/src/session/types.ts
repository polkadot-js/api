// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, u32, u64 } from '@polkadot/types';
import type { BlockNumber, EraIndex, Moment, SessionIndex } from '@polkadot/types/interfaces';

export interface DeriveSessionIndexes {
  activeEra: EraIndex;
  activeEraStart: Option<Moment>;
  currentEra: EraIndex;
  currentIndex: SessionIndex;
  validatorCount: u32;
}

export interface DeriveSessionInfo extends DeriveSessionIndexes {
  eraLength: BlockNumber;
  isEpoch: boolean;
  sessionLength: u64;
  sessionsPerEra: SessionIndex;
}

export interface DeriveSessionProgress extends DeriveSessionInfo {
  eraProgress: BlockNumber;
  sessionProgress: BlockNumber;
}
