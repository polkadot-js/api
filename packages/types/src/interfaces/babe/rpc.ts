// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionsRpc } from '../../types';

export const rpc: DefinitionsRpc = {
  epochAuthorship: {
    description: 'Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore',
    params: [],
    type: 'HashMap<AuthorityId, EpochAuthorship>'
  }
};
