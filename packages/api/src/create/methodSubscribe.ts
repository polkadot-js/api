// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';
import { ApiInterface$Section$Method } from '../types';

import formatInputs from '@polkadot/api-format/input';
import signature from '@polkadot/params/signature';
import assert from '@polkadot/util/assert';
import ExtError from '@polkadot/util/ext/error';
import isFunction from '@polkadot/util/is/function';

import formatResult from './formatResult';

export default function methodSubscribe (provider: ProviderInterface, rpcName: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
  const unsubscribe = (subscriptionId: any): Promise<any> =>
    provider.send(rpcName.replace('subscribe', 'unsubscribe'), [subscriptionId]);
  const call = async (...values: Array<any>): Promise<any> => {
    try {
      const cb: ProviderInterface$Callback = values.pop();

      assert(isFunction(cb), `Expected callback in last position of params`);

      const params = formatInputs(method.params, values);
      const update = (error: Error | null, result?: any) => {
        cb(error, formatResult(method, values, result));
      };

      return provider.subscribe(rpcName, params, update);
    } catch (error) {
      throw new ExtError(`${signature(method)}:: ${error.message}`, (error as ExtError).code, undefined);
    }
  };

  // @ts-ignore yes, we are extending here
  call.unsubscribe = unsubscribe;

  return call as ApiInterface$Section$Method;
}
