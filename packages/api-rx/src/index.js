// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { RxApiInterface } from './types';

const createApi = require('@polkadot/api');
const interfaces = require('@polkadot/jsonrpc');
const createWs = require('@polkadot/api-provider/ws');

const createExposed = require('./api');
const defaults = require('./defaults');
const createInterface = require('./interface');

module.exports = function rxApi (provider?: ProviderInterface = createWs(defaults.WS_URL)): RxApiInterface {
  const api = createApi(provider);
  const exposed = createExposed(provider);

  return Object
    .keys(interfaces)
    .reduce((result, type) => {
      result[type] = createInterface(api, type);

      return result;
    }, exposed);
};
