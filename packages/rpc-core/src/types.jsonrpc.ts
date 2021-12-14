// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AugmentedRpc } from './types';

export interface RpcInterface {
  [section: string]: {
    [method: string]: AugmentedRpc<(...params: any[]) => any>;
  }
}

export const __PHANTOM_RPC = 'phantom-rpc';
