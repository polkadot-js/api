// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceMethodDefinition } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';

const formatOutput = require('@polkadot/api-format/output');
const ExtError = require('@polkadot/util/ext/error');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

type Method = (params: Array<mixed>, cb: ProviderInterface$Callback) => Promise<number>;

const createParams = require('./params');

module.exports = function createSubscribeMethod (provider: ProviderInterface, rpcName: string, { inputs, output }: InterfaceMethodDefinition): Method {
  return async (_params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number> => {
    try {
      const params = createParams(rpcName, _params, inputs);

      return provider.subscribe(rpcName, params, (error: ?Error, result: mixed) => {
        if (error) {
          cb(error);
        } else {
          cb(null, formatOutput(output, result));
        }
      });
    } catch (error) {
      throw new ExtError(`${jsonrpcSignature(rpcName, inputs, output)}:: ${error.message}`, (error: ExtError).code);
    }
  };
};
