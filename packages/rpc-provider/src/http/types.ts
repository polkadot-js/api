// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Logger } from '@polkadot/util/types';

import { RpcCoder } from '../coder';

export interface HttpState {
  coder: RpcCoder;
  endpoint: string;
  l: Logger;
}
