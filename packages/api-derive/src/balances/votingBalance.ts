// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@plugnet/api/types';

import { all } from './all';

export function votingBalance (api: ApiInterface$Rx) {
  return all(api);
}
