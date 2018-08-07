// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interface$Sections } from '@polkadot/jsonrpc/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { RxApiInterface } from './types';

import createApi from '@polkadot/api/index';
import interfaces from '@polkadot/jsonrpc';
import Ws from '@polkadot/api-provider/ws';

import createExposed from './api';
import defaults from './defaults';
import createInterface from './interface';

export default function rxApi (provider: ProviderInterface = new Ws(defaults.WS_URL)): RxApiInterface {
  const api = createApi(provider);

  return Object.keys(interfaces).reduce((result, type) => {
    result[type as Interface$Sections] = createInterface(api, type as Interface$Sections);

    return result;
  }, createExposed(provider));
}
