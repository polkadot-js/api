// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';
import { ApiInterface$Section$Method } from '../types';

import formatOutput from '@polkadot/api-format/output';
import signature from '@polkadot/params/signature';
import assert from '@polkadot/util/assert';
import ExtError from '@polkadot/util/ext/error';
import isFunction from '@polkadot/util/is/function';

import createParams from './params';

export default function methodSubscribe (provider: ProviderInterface, rpcName: string, name: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
  const unsubscribe = (subscriptionId: any): Promise<any> =>
    provider.send(`unsubscribe_${name}`, [subscriptionId]);
  const call = async (...values: Array<any>): Promise<any> => {
    try {
      const cb: ProviderInterface$Callback = values.pop();

      assert(isFunction(cb), `Expected callback in last position of params`);

      const params = createParams(method.params, values);
      const update = (error: Error | null, result?: any) => {
        cb(error, formatOutput(method.type, result));
      };

      return provider.subscribe(`subscribe_${name}`, params, update);
    } catch (error) {
      throw new ExtError(`${signature(method)}:: ${error.message}`, (error as ExtError).code, undefined);
    }
  };

  // @ts-ignore yes, we are extending here
  call.unsubscribe = unsubscribe;

  return call as ApiInterface$Section$Method;
}
