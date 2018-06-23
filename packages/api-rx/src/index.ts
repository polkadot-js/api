// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/api-provider/types';
import { RxApiInterface } from './types';

import createApi from '@polkadot/api/index';
import interfaces from '@polkadot/jsonrpc';
import createWs from '@polkadot/api-provider/ws';

import createExposed from './api';
import defaults from './defaults';
import createInterface from './interface';

export default function rxApi (provider: ProviderInterface = createWs(defaults.WS_URL)): RxApiInterface {
  const api = createApi(provider);
  const exposed = createExposed(provider);

  return [...interfaces.keys()].reduce((result, type) => {
    result[type] = createInterface(api, type);

    return result;
  }, exposed);
}
