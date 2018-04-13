// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { ApiInterface$Section$Method } from '../types';

const formatOutput = require('@polkadot/api-format/output');
const ExtError = require('@polkadot/util/ext/error');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

const createParams = require('./params');

module.exports = function createMethodSend (provider: ProviderInterface, rpcName: string, name: string, { inputs, output }: InterfaceMethodDefinition): $Shape<ApiInterface$Section$Method> {
  return async (..._params: Array<mixed>): Promise<mixed> => {
    // TODO: Deprecated warning
    try {
      const params = createParams(rpcName, _params, inputs);
      const result = await provider.send(rpcName, params);

      return formatOutput(output, result);
    } catch (error) {
      throw new ExtError(`${jsonrpcSignature(rpcName, inputs, output)}:: ${error.message}`, (error: ExtError).code);
    }
  };
};
