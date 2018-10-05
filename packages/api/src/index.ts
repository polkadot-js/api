// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';
import { RpcSection, RpcMethod } from '@polkadot/jsonrpc/types';
import { ApiInterface, ApiInterface$Section, ApiInterface$Section$Method } from './types';

import { Base, Vector, createType } from '@polkadot/types/codec';
import { StorageChangeSet, StorageKey } from '@polkadot/types/index';
import interfaces from '@polkadot/jsonrpc/index';
import assert from '@polkadot/util/assert';
import ExtError from '@polkadot/util/ext/error';
import isFunction from '@polkadot/util/is/function';

/**
 * @name Api
 * @summary The API may use a HTTP or WebSockets provider.
 * @description It allows for querying a Polkadot Client Node.
 * @example
 * <BR><PRE><CODE>
 * import Api from '@polkadot/api';
 * import WsProvider from '@polkadot/api-provider/ws';
 * <BR>
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const api = new Api(provider);
 * </CODE></PRE>
 */
export default class Api implements ApiInterface {
  private _provider: ProviderInterface;
  readonly author: ApiInterface$Section;
  readonly chain: ApiInterface$Section;
  readonly state: ApiInterface$Section;
  readonly system: ApiInterface$Section;

  /**
   * @constructor
   * Default constructor for the Api Object
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (provider: ProviderInterface) {
    assert(provider && isFunction(provider.send), 'Expected Provider to API create');

    this._provider = provider;

    this.author = this.createInterface(interfaces.author);
    this.chain = this.createInterface(interfaces.chain);
    this.state = this.createInterface(interfaces.state);
    this.system = this.createInterface(interfaces.system);
  }

  /**
   * @name signature
   * @summary Returns a string representation of the method with inputs and outputs.
   * @description
   * Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.
   *
   * @example
   * <BR><PRE><CODE>
   * import Api from '@polkadot/Api';
   * <BR>
   * Api.signature({ name: 'test_method', params: [ { name: 'dest', type: 'Address' } ], type: 'Address' }); // => test_method (dest: Address): Address
   * </CODE></PRE>
   */
  static signature ({ method, params, type }: RpcMethod): string {
    const inputs = params.map(({ name, type }) =>
      `${name}: ${type}`
    ).join(', ');

    return `${method} (${inputs}): ${type}`;
  }

  private createInterface ({ methods, section }: RpcSection): ApiInterface$Section {
    return Object
      .keys(methods)
      .reduce((exposed, method) => {
        const rpcName = `${section}_${method}`;
        const def = methods[method];

        exposed[method] = def.isSubscription
          ? this.createMethodSubscribe(rpcName, def)
          : this.createMethodSend(rpcName, def);

        return exposed;
      }, {} as ApiInterface$Section);
  }

  private createMethodSend (rpcName: string, method: RpcMethod): ApiInterface$Section$Method {
    const call = async (...values: Array<any>): Promise<any> => {
      // TODO Warn on deprecated methods
      try {
        const params = this.formatInputs(method, values);
        const paramsJson = params.map((param) => param.toJSON());
        const result = await this._provider.send(rpcName, paramsJson);

        return this.formatOutput(method, params, result);
      } catch (error) {
        const message = `${Api.signature(method)}:: ${error.message}`;

        console.error(message, error);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    return call as ApiInterface$Section$Method;
  }

  private createMethodSubscribe (rpcName: string, method: RpcMethod): ApiInterface$Section$Method {
    const unsubscribe = (subscriptionId: any): Promise<any> =>
      this._provider.unsubscribe(rpcName, method.subscribe[1], subscriptionId);
    const _call = async (...values: Array<any>): Promise<any> => {
      try {
        const cb: ProviderInterface$Callback = values.pop();

        assert(isFunction(cb), `Expected callback in last position of params`);

        const params = this.formatInputs(method, values);
        const paramsJson = params.map((param) => param.toJSON());
        const update = (error: Error | null, result?: any) => {
          cb(error, this.formatOutput(method, params, result));
        };

        return this._provider.subscribe(rpcName, method.subscribe[0], paramsJson, update);
      } catch (error) {
        const message = `${Api.signature(method)}:: ${error.message}`;

        console.error(message, error);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    const call = _call as ApiInterface$Section$Method;

    call.unsubscribe = unsubscribe;

    return call;
  }

  private formatInputs (method: RpcMethod, inputs: Array<any>): Array<Base> {
    assert(method.params.length === inputs.length, `Expected ${method.params.length} parameters, ${inputs.length} found instead`);

    return method.params.map(({ type }, index) =>
      createType(type as string, inputs[index])
    );
  }

  private formatOutput (method: RpcMethod, params: Array<Base>, result?: any): Base {
    const base = createType(method.type as string).fromJSON(result);

    if (method.type === 'StorageData') {
      const type = (params[0] as StorageKey).outputType;

      if (type) {
        return createType(type, base.raw);
      }
    } else if (method.type === 'StorageChangeSet') {
      return (params[0] as Vector<StorageKey>).reduce((vector, _key: StorageKey) => {
        const type = _key.outputType;

        if (!type) {
          throw new Error('Cannot format StorageChangeSet, output type missing for key');
        }

        const key = _key.toHex();

        const item = (base as StorageChangeSet).changes.find((item) =>
          item.key.toHex() === key
        );

        if (!item) {
          throw new Error('No result found for key in StorageChangeSet');
        }

        vector.push(createType(type, item.value.value));

        return vector;
      }, new (Vector.with(Base))());
    }

    return base;
  }
}
