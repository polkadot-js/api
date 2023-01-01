// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Logger } from '@polkadot/util/types';
import type { RpcCoder } from '../coder';

export interface HttpState {
  coder: RpcCoder;
  endpoint: string;
  l: Logger;
}
