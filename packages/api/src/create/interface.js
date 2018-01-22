// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { InterfaceDefinition } from '@polkadot/api-jsonrpc/types';

const { formatInputs, formatOutput } = require('@polkadot/api-format');
const assert = require('@polkadot/util/assert');
const ExtError = require('@polkadot/util/ext/error');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

module.exports = function createInterface (provider: ProviderInterface, definition: InterfaceDefinition, section: string): ApiInterface$Section {
  return Object
    .keys(definition.methods)
    .reduce((container, method: string) => {
      const { inputs, output } = definition.methods[method];
      const rpcName = `${section}_${method}`;

      container[method] = async (..._params: Array<mixed>): Promise<mixed> => {
        try {
          assert(inputs.length === _params.length, `${inputs.length} params expected, found ${_params.length} instead`);

          const params = formatInputs(inputs, _params);
          const result = await provider.send(rpcName, params);

          return formatOutput(output, result);
        } catch (error) {
          throw new ExtError(`${jsonrpcSignature(rpcName, inputs, output)}:: ${error.message}`, (error: ExtError).code);
        }
      };

      return container;
    }, ({}: $Shape<ApiInterface$Section>));
};
