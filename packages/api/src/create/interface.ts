// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interface$Sections } from '@polkadot/jsonrpc/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface$Section } from '../types';
import { MethodCreator } from './types';

import interfaces from '@polkadot/jsonrpc';
import assert from '@polkadot/util/assert';
import isUndefined from '@polkadot/util/is/undefined';

import methodSend from './methodSend';
import methodSetStorage from './methodSetStorage';
import methodSubscribe from './methodSubscribe';

type RpcOverrides = {
  [index: string]: MethodCreator
};

const overrides: RpcOverrides = {
  'state_getStorage': methodSetStorage
};

export default function createInterface (provider: ProviderInterface, section: Interface$Sections): ApiInterface$Section {
  const definition = interfaces[section];

  assert(!isUndefined(definition), `Unable to find section '${section}`);

  // @ts-ignore undefined check done in assert
  const methods = definition.public;

  return Object
    .keys(methods)
    .reduce((exposed, name) => {
      const rpcName = `${section}_${name}`;
      const def = methods[name];

      exposed[name] = def.isSubscription
        ? methodSubscribe(provider, rpcName, name, def)
        : (overrides[rpcName] || methodSend)(provider, rpcName, name, def);

      return exposed;
    }, {} as ApiInterface$Section);
}
