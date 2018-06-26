// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interface$Sections } from '@polkadot/jsonrpc/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface } from './types';

import interfaces from '@polkadot/jsonrpc';
import assert from '@polkadot/util/assert';
import isFunction from '@polkadot/util/is/function';

import createInterface from './create/interface';

export default function api (provider: ProviderInterface): ApiInterface {
  assert(provider && isFunction(provider.send), 'Expected Provider to API create');

  return Object.keys(interfaces).reduce((exposed, type) => {
    exposed[type as Interface$Sections] = createInterface(provider, type as Interface$Sections);

    return exposed;
  }, {} as ApiInterface);
}
