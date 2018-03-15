// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface } from '@polkadot/api-provider/types';

const formatOutput = require('@polkadot/api-format/output');
const ExtError = require('@polkadot/util/ext/error');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

type Method = (..._params: Array<mixed>) => Promise<mixed>;

const createParams = require('./params');

module.exports = function createMethod (provider: ProviderInterface, rpcName: string, { inputs, output }: InterfaceMethodDefinition): Method {
  return async (..._params: Array<mixed>): Promise<mixed> => {
    try {
      const params = createParams(rpcName, _params, inputs);
      const result = await provider.send(rpcName, params);

      return formatOutput(output, result);
    } catch (error) {
      throw new ExtError(`${jsonrpcSignature(rpcName, inputs, output)}:: ${error.message}`, (error: ExtError).code);
    }
  };
};
