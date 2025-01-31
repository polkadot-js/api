// Copyright 2017-2025 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Logger } from '@polkadot/util/types';
import type { RpcCoder } from '../coder/index.js';

export interface HttpState {
  coder: RpcCoder;
  endpoint: string;
  l: Logger;
}
