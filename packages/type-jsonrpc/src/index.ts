// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from './types';

import author from './author';
import chain from './chain';
import state from './state';
import system from './system';

const interfaces: Interfaces = {
  author: author('author'),
  chain: chain('chain'),
  state: state('state'),
  system: system('system')
};

export default interfaces;
