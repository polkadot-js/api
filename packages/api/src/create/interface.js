// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceTypes } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface$Section } from '../types';

const interfaces = require('@polkadot/api-jsonrpc');

const methodSend = require('./methodSend');
const methodSubscribe = require('./methodSubscribe');

module.exports = function createInterface (provider: ProviderInterface, section: InterfaceTypes): ApiInterface$Section {
  const exposed: $Shape<ApiInterface$Section> = {};
  const { methods } = interfaces[section];

  return Object
    .keys(methods)
    .reduce((exposed, name: string) => {
      const rpcName = `${section}_${name}`;
      const def = methods[name];

      // flowlint-next-line sketchy-null-bool:off
      exposed[name] = def.isSubscription
        ? methodSubscribe(provider, rpcName, name, methods[name])
        : methodSend(provider, rpcName, name, methods[name]);

      return exposed;
    }, exposed);
};
