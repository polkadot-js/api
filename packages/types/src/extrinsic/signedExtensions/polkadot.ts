// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from './types';

import { emptyCheck } from './emptyCheck';

export const polkadot: ExtDef = {
  LimitParathreadCommits: emptyCheck,
  OnlyStakingAndClaims: emptyCheck,
  PrevalidateAttests: emptyCheck,
  RestrictFunctionality: emptyCheck,
  TransactionCallFilter: emptyCheck,
  ValidateDoubleVoteReports: emptyCheck
};
