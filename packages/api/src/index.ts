// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface } from './types';

const interfaces = require('@polkadot/jsonrpc');
const assert = require('@polkadot/util/assert');
const isFunction = require('@polkadot/util/is/function');

const createInterface = require('./create/interface');

module.exports = function api (provider: ProviderInterface): ApiInterface {
  assert(provider && isFunction(provider.send), 'Expected Provider to API create');

  const exposed: ApiInterface = {};

  return Object
    .keys(interfaces)
    .reduce((result, type) => {
      result[type] = createInterface(provider, type);

      return result;
    }, exposed);
};
