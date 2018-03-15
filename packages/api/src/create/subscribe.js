// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition$Methods } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';

const assert = require('@polkadot/util/assert');

type Method = (name: string, ...params: Array<mixed>) => Promise<number>;

const subscribeMethod = require('./subscribeMethod');

module.exports = function createSubscribe (provider: ProviderInterface, section: string, methods: InterfaceDefinition$Methods): Method {
  return async (name: string, ...params: Array<mixed>): Promise<number> => {
    const rpcName = `${section}_${name}`;

    assert(methods[name], `Unable to find '${rpcName}' subscription`);

    const fn = subscribeMethod(provider, rpcName, methods[name]);

    return fn.apply(null, params);
  };
};
