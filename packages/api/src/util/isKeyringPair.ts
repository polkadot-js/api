// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Address } from '@polkadot/types/interfaces';
import type { IKeyringPair } from '@polkadot/types/types';

import { isFunction } from '@polkadot/util';

export function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}
