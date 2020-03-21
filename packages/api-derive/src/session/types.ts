// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, EraIndex, Moment, SessionIndex } from '@polkadot/types/interfaces';

import { Option, u32 } from '@polkadot/types';

export interface DeriveSessionIndexes {
  activeEra: EraIndex;
  activeEraStart: Option<Moment>;
  currentEra: EraIndex;
  currentIndex: SessionIndex;
  validatorCount: u32;
}

export interface DerivedSessionInfo extends DeriveSessionIndexes {
  eraLength: BlockNumber;
  eraProgress: BlockNumber;
  isEpoch: boolean;
  sessionLength: BlockNumber;
  sessionsPerEra: SessionIndex;
  sessionProgress: BlockNumber;
}
