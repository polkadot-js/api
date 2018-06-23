// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interface$Sections } from '@polkadot/jsonrpc/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface$Section } from '../types';

import interfaces from '@polkadot/jsonrpc';

import methodSend from './methodSend';
import methodSubscribe from './methodSubscribe';

export default function createInterface (provider: ProviderInterface, section: Interface$Sections): ApiInterface$Section {
  const exposed: $Shape<ApiInterface$Section> = {};
  const methods = interfaces[section].public;

  return Object
    .keys(methods)
    .reduce((exposed, name: string) => {
      const rpcName = `${section}_${name}`;
      const def = methods[name];

      exposed[name] = def.isSubscription
        ? methodSubscribe(provider, rpcName, name, def)
        : methodSend(provider, rpcName, name, def);

      return exposed;
    }, exposed);
}
