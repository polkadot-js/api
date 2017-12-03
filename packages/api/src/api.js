// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { ProviderInterface } from '@polkadot/api-provider/types';
import type { InterfaceDefinition } from '@polkadot/api-jsonrpc/types';
import type { ApiInterface } from './types';

const { formatInputs, formatOutput } = require('@polkadot/api-format');
const interfaces = require('@polkadot/api-jsonrpc');
const assert = require('@polkadot/util/assert');
const isFunction = require('@polkadot/util/is/function');
const jsonrpcSignature = require('@polkadot/util/jsonrpc/signature');

module.exports = class Api implements ApiInterface {
  _provider: ProviderInterface;
  _chainInterface: any = null;
  _stateInterface: any = null;

  constructor (provider: ProviderInterface) {
    assert(provider, 'Instantiate the Api with `new Api(new Provider(...))`');

    assert(isFunction(provider.send), 'Supplied provider does not expose send method');

    this._provider = provider;

    this._chainInterface = this._createInterface(interfaces, 'chain');
    this._stateInterface = this._createInterface(interfaces, 'state');
  }

  get chain (): any {
    return this._chainInterface;
  }

  get state (): any {
    return this._stateInterface;
  }

  _createInterface (definitions: { [string]: InterfaceDefinition }, section: string): any {
    const definition = definitions[section];

    return Object
      .keys(definition.methods)
      .reduce((container, method: string) => {
        const { inputs, output } = definition.methods[method];
        const rpcName = `${section}_${method}`;

        container[method] = async (..._params: Array<any>): any => {
          try {
            assert(inputs.length === _params.length, `${inputs.length} params expected, found ${_params.length} instead`);

            const params = formatInputs(inputs, _params);
            const result = await this._provider.send(rpcName, params);

            return formatOutput(output, result);
          } catch (error) {
            throw new Error(`${jsonrpcSignature(rpcName, inputs, output)}:: ${error.message}`);
          }
        };

        return container;
      }, {});
  }
};
