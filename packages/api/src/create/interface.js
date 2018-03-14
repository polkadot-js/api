// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface, ProviderInterface$Subscribe } from '@polkadot/api-provider/types';
import type { ApiInterface$Section } from '../types';

const isFunction = require('@polkadot/util/is/function');

const createMethod = require('./method');
const createSubscribe = require('./subscribe');

module.exports = function createInterface (provider: ProviderInterface, { methods }: InterfaceDefinition, section: string): ApiInterface$Section {
  const exposed: $Shape<ApiInterface$Section> = {};
  const pubsub = (provider: ProviderInterface$Subscribe);

  if (isFunction(pubsub.subscribe)) {
    exposed.subscribe = createSubscribe(pubsub, section, methods);
    exposed.unsubscribe = provider.unsubcribe;
  }

  return Object
    .keys(methods)
    .reduce((exposed, name: string) => {
      const rpcName = `${section}_${name}`;
      const method = createMethod(provider, rpcName, methods[name]);

      exposed[name] = method;

      return exposed;
    }, exposed);
};
