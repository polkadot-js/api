// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
