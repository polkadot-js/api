// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { InterfaceDefinition } from '@polkadot/api-jsonrpc/types';
import type { ApiInterface, ApiInterface$Section } from './types';

const { formatInputs, formatOutput } = require('@polkadot/api-format');
const interfaces = require('@polkadot/api-jsonrpc');
const assert = require('@polkadot/util/assert');
const ExtError = require('@polkadot/util/ext/error');
const isFunction = require('@polkadot/util/is/function');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

module.exports = class Api implements ApiInterface {
  _provider: ProviderInterface;
  _chainInterface: ApiInterface$Section;
  _stateInterface: ApiInterface$Section;

  constructor (provider: ProviderInterface) {
    assert(provider && isFunction(provider.send), 'Expected Provider');

    this._provider = provider;

    this._chainInterface = this._createInterface(interfaces, 'chain');
    this._stateInterface = this._createInterface(interfaces, 'state');
  }

  // flowlint-next-line unsafe-getters-setters:off
  get chain (): ApiInterface$Section {
    return this._chainInterface;
  }

  // flowlint-next-line unsafe-getters-setters:off
  get state (): ApiInterface$Section {
    return this._stateInterface;
  }

  _createInterface (definitions: { [string]: InterfaceDefinition }, section: string): ApiInterface$Section {
    const definition = definitions[section];

    return Object
      .keys(definition.methods)
      .reduce((container, method: string) => {
        const { inputs, output } = definition.methods[method];
        const rpcName = `${section}_${method}`;

        container[method] = async (..._params: Array<mixed>): Promise<mixed> => {
          try {
            assert(inputs.length === _params.length, `${inputs.length} params expected, found ${_params.length} instead`);

            const params = formatInputs(inputs, _params);
            const result = await this._provider.send(rpcName, params);

            return formatOutput(output, result);
          } catch (error) {
            throw new ExtError(`${jsonrpcSignature(rpcName, inputs, output)}:: ${error.message}`, (error: ExtError).code);
          }
        };

        return container;
      }, {});
  }
};
