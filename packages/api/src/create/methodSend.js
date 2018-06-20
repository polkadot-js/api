// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Interface$Method } from '@polkadot/jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface$Section$Method } from '../types';

import formatOutput from '@polkadot/api-format/output';
import ExtError from '@polkadot/util/ext/error';
import jsonrpcSignature from '@polkadot/params/signature';

import createParams from './params';

export default function createMethodSend (provider: ProviderInterface, rpcName: string, name: string, method: Interface$Method): ApiInterface$Section$Method {
  const call = async (...values: Array<mixed>): Promise<mixed> => {
    // TODO: Deprecated warning
    try {
      const params = createParams(method.params, values);
      const result = await provider.send(rpcName, params);

      return formatOutput(method.type, result);
    } catch (error) {
      throw new ExtError(`${jsonrpcSignature(method)}:: ${error.message}`, (error: ExtError).code);
    }
  };

  // flowlint-next-line unclear-type:off
  return ((call: any): ApiInterface$Section$Method);
}
