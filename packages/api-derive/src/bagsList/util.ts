// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { QueryableStorage } from '@polkadot/api-base/types';
import type { DeriveApi } from '../types.js';

export function getQueryInterface (api: DeriveApi): QueryableStorage<'rxjs'>['voterBagsList'] {
  return (
    // latest substrate (latest always first)
    api.query.voterBagsList ||
    // previous substrate
    api.query.bagsList ||
    // latest polkadot
    api.query.voterList
  );
}
