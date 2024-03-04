// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types/index.js';

export const rpc: DefinitionsRpc = {
  epochAuthorship: {
    description: 'Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore',
    isUnsafe: true,
    params: [],
    type: 'HashMap<AuthorityId, EpochAuthorship>'
  }
};
