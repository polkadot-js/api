// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import {
  AccountId,
  AccountIdOf,
  AccountIndex,
  AccountInfo,
  Address,
  Balance
} from './index.types';

// Holds a registry of all generated interfaces
// https://github.com/polkadot-js/api/issues/1177
export interface InterfaceRegistry {
  AccountId: AccountId;
  AccountIdOf: AccountIdOf;
  AccountIndex: AccountIndex;
  AccountInfo: AccountInfo;
  Address: Address;
  Balance: Balance;
  // TODO Finish this
}
