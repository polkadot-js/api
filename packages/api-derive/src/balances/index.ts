// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { all } from './all';

export * from './account';
export * from './votingBalances';

const votingBalance = all;

export {
  all,
  votingBalance
};
