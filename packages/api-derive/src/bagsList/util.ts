// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi } from '../types.js';

export function getQueryInterface (api: DeriveApi): DeriveApi['query']['voterList'] {
  return (
    // latest substrate & polkadot
    api.query.voterList ||
    // previous substrate
    api.query['voterBagsList'] ||
    api.query['bagsList']
  );
}
