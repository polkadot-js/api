// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId, Address } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';

import { isFunction } from '@polkadot/util';

export default function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}
