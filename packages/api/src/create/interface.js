// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceTypes } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface$Section } from '../types';

const interfaces = require('@polkadot/api-jsonrpc');

const createMethod = require('./method');
const createSubscribe = require('./subscribe');

console.log('interfaces', interfaces);

module.exports = function createInterface (provider: ProviderInterface, section: InterfaceTypes): ApiInterface$Section {
  const exposed: $Shape<ApiInterface$Section> = {};
  const { methods } = interfaces[section];

  exposed.subscribe = createSubscribe(provider, section, methods);
  exposed.unsubscribe = provider.unsubscribe;

  return Object
    .keys(methods)
    .reduce((exposed, name: string) => {
      const rpcName = `${section}_${name}`;
      const method = createMethod(provider, rpcName, methods[name]);

      exposed[name] = method;

      return exposed;
    }, exposed);
};
