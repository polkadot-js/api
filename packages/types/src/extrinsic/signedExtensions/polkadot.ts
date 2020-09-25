// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExtDef } from './types';

import EmptyCheck from './emptyCheck';

export default {
  LimitParathreadCommits: EmptyCheck,
  OnlyStakingAndClaims: EmptyCheck,
  PrevalidateAttests: EmptyCheck,
  RestrictFunctionality: EmptyCheck,
  TransactionCallFilter: EmptyCheck,
  ValidateDoubleVoteReports: EmptyCheck
} as ExtDef;
