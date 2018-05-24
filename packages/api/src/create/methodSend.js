// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { Interface$Method } from '@polkadot/jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface$Section$Method } from '../types';

const formatOutput = require('@polkadot/api-format/output');
const ExtError = require('@polkadot/util/ext/error');
const jsonrpcSignature = require('@polkadot/params/signature');

const createParams = require('./params');

module.exports = function createMethodSend (provider: ProviderInterface, rpcName: string, name: string, method: Interface$Method): ApiInterface$Section$Method {
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
};
