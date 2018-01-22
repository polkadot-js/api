// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface, ApiInterface$Section } from './types';

const interfaces = require('@polkadot/api-jsonrpc');
const assert = require('@polkadot/util/assert');
const isFunction = require('@polkadot/util/is/function');

const createInterface = require('./create/interface');

module.exports = class Api implements ApiInterface {
  chain: ApiInterface$Section;
  state: ApiInterface$Section;

  constructor (provider: ProviderInterface) {
    assert(provider && isFunction(provider.send), 'Expected Provider');

    this.chain = createInterface(provider, interfaces.chain, 'chain');
    this.state = createInterface(provider, interfaces.state, 'state');
  }
};
