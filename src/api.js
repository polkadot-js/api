// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { InterfaceDefinition } from '@polkadot/jsonrpc/src/types';
import type { ApiInterface } from './types';
import type { ProviderInterface } from './provider/types';

const interfaces = require('@polkadot/jsonrpc');
const { callSignature } = require('@polkadot/jsonrpc/lib/util');
const { formatInputs, formatOutput } = require('./format');
const { HttpProvider } = require('./provider');
const { isFunction } = require('./util/is');

module.exports = class Api implements ApiInterface {
  _provider: ProviderInterface;
  _chainInterface: any = null;
  _stateInterface: any = null;

  constructor (provider: ProviderInterface) {
    if (!provider) {
      throw new Error('Instantiate the Api with `new Api(new Provider(...))`');
    }

    if (!isFunction(provider.send)) {
      throw new Error('Supplied provider does not expose send method');
    }

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
            if (inputs.length !== _params.length) {
              throw new Error(`${inputs.length} params expected, found ${_params.length} instead`);
            }

            const params = formatInputs(inputs, _params);
            const result = await this._provider.send(rpcName, params);

            return formatOutput(output, result);
          } catch (error) {
            throw new Error(`${callSignature(rpcName, inputs, output)}:: ${error.message}`);
          }
        };

        return container;
      }, {});
  }

  static HttpProvider = HttpProvider;
};
