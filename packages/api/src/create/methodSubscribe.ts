// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interface$Method } from '@polkadot/jsonrpc/types';
import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';
import { ApiInterface$Section$Method } from '../types';

const formatOutput = require('@polkadot/api-format/output');
const signature = require('@polkadot/params/signature');
const assert = require('@polkadot/util/assert');
const ExtError = require('@polkadot/util/ext/error');
const isFunction = require('@polkadot/util/is/function');

const createParams = require('./params');

module.exports = function methodSubscribe (provider: ProviderInterface, rpcName: string, name: string, method: Interface$Method): ApiInterface$Section$Method {
  const unsubscribe = (subscriptionId: any): Promise<any> =>
    provider.send(`unsubscribe_${name}`, [subscriptionId]);
  const call = async (...values: Array<any>): Promise<any> => {
    try {
      const cb = ((values.pop(): any): ProviderInterface$Callback);

      assert(isFunction(cb), `Expected callback in last position of params`);

      const params = createParams(method.params, values);
      const update = (error: ?Error, result?: any) => {
        cb(error, formatOutput(method.type, result));
      };

      return provider.subscribe(`subscribe_${name}`, params, update);
    } catch (error) {
      throw new ExtError(`${signature(method)}:: ${error.message}`, (error: ExtError).code);
    }
  };

  call.unsubscribe = unsubscribe;

  return ((call: any): ApiInterface$Section$Method);
};
