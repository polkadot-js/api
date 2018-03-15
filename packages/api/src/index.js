// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceTypes } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface } from './types';

const assert = require('@polkadot/util/assert');
const isFunction = require('@polkadot/util/is/function');

const createInterface = require('./create/interface');

const ALL_INTERFACES: Array<InterfaceTypes> = ['chain', 'extra', 'state'];

module.exports = function api (provider: ProviderInterface): ApiInterface {
  assert(provider && isFunction(provider.send), 'Expected Provider to API create');

  return ALL_INTERFACES.reduce((result, type: InterfaceTypes) => {
    result[type] = createInterface(provider, type);

    return result;
  }, ({}: $Shape<ApiInterface>));
};
