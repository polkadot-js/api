// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Interfaces } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { ApiInterface$Section$Method } from '../types';

import formatOutput from '@polkadot/api-format/output';
import ExtError from '@polkadot/util/ext/error';
import signature from '@polkadot/params/signature';

import createParams from './params';

export default function createMethodSend (provider: ProviderInterface, rpcName: string, name: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
  const call = async (...values: Array<any>): Promise<any> => {
    // TODO Warn on deprecated methods
    try {
      const params = createParams(method.params, values);
      const result = await provider.send(rpcName, params);

      return formatOutput(method.type, result);
    } catch (error) {
      throw new ExtError(`${signature(method)}:: ${error.message}`, (error as ExtError).code, undefined);
    }
  };

  return call as ApiInterface$Section$Method;
}
