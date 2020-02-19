// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcSection } from './types';

import account from './account';
import author from './author';
import chain from './chain';
import contracts from './contracts';
import payment from './payment';
import rpc from './rpc';
import state from './state';
import system from './system';

const interfaces: Record<string, RpcSection> = {
  account,
  author,
  chain,
  contracts,
  payment,
  rpc,
  state,
  system
};

export default interfaces;
