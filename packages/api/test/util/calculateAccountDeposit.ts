// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { ApiPromise, ApiRx } from '../../src';

export function calculateAccountDeposit (api: ApiPromise | ApiRx): number {
  const minimum = api.consts.balances && api.consts.balances.existentialDeposit ? api.consts.balances.existentialDeposit.toString() : 0;

  return (new BN(minimum).toNumber() < 100000000000000
    ? 1234 // Substrate spec_version 0 -100
    : 12345678912345678 // since Substrate spec_version 101
  );
}
