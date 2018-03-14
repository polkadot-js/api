// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition$Methods } from '@polkadot/api-jsonrpc/types';
import type { ProviderInterface$Subscribe, ProviderInterface$Subscribe$Callback } from '@polkadot/api-provider/types';

const formatOutput = require('@polkadot/api-format/output');
const ExtError = require('@polkadot/util/ext/error');
const assert = require('@polkadot/util/assert');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

type Method = (..._params: Array<mixed>) => Promise<mixed>;

const createParams = require('./params');

module.exports = function createSubscribe (provider: ProviderInterface$Subscribe, methods: InterfaceDefinition$Methods, section: string): Method {
  return async (name: string, _params: Array<mixed>, cb: ProviderInterface$Subscribe$Callback): Promise<number> => {
    const rpcName = `${section}_${name}`;

    assert(methods[name], `Unable to find '${rpcName}' subscription`);

    const { inputs, output } = methods[name];

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
