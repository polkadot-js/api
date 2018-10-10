// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/rpc-provider/types';
import { RpcSection, RpcMethod } from '@polkadot/jsonrpc/types';
import { RpcInterface, RpcInterface$Section, RpcInterface$Section$Method } from './types';

import E3 from 'eventemitter3';
import interfaces from '@polkadot/jsonrpc/index';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import { Base, Vector, createType } from '@polkadot/types/codec';
import { Method, StorageChangeSet, StorageKey } from '@polkadot/types/index';
import assert from '@polkadot/util/assert';
import ExtError from '@polkadot/util/ext/error';
import isFunction from '@polkadot/util/is/function';

/**
 * @name Rpc
 * @summary The API may use a HTTP or WebSockets provider.
 * @description It allows for querying a Polkadot Client Node.
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@polkadot/rpc-core';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
 */
export default class Rpc extends E3.EventEmitter implements RpcInterface {
  private _provider: ProviderInterface;
  readonly author: RpcInterface$Section;
  readonly chain: RpcInterface$Section;
  readonly state: RpcInterface$Section;
  readonly system: RpcInterface$Section;

  /**
   * @constructor
   * Default constructor for the Api Object
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (provider: ProviderInterface) {
    super();

    assert(provider && isFunction(provider.send), 'Expected Provider to API create');

    this._provider = provider;

    this.author = this.createInterface(interfaces.author);
    this.chain = this.createInterface(interfaces.chain);
    this.state = this.createInterface(interfaces.state);
    this.system = this.createInterface(interfaces.system);

    this.init();
  }

  /**
   * @name signature
   * @summary Returns a string representation of the method with inputs and outputs.
   * @description
   * Formats the name, inputs and outputs into a human-readable string. This contains the input parameter names input types and output type.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/rpc-core';
   *
   * Api.signature({ name: 'test_method', params: [ { name: 'dest', type: 'Address' } ], type: 'Address' }); // => test_method (dest: Address): Address
   * ```
   */
  static signature ({ method, params, type }: RpcMethod): string {
    const inputs = params.map(({ name, type }) =>
      `${name}: ${type}`
    ).join(', ');

    return `${method} (${inputs}): ${type}`;
  }

  private init (): void {
    // load metadata and and setup the Method static so we are able to use
    // decoding at any point going forward. This is not great, but the best
    // we can come up with for now
    this.state
      .getMetadata()
      .then((metadata) => {
        Method.injectExtrinsics(
          extrinsicsFromMeta(metadata)
        );

        this.emit('metadata', metadata);
      })
      .catch((error) => {
        console.error('Unable to retrieve metadata', error);
      });
  }

  private createInterface ({ methods, section }: RpcSection): RpcInterface$Section {
    return Object
      .keys(methods)
      .reduce((exposed, method) => {
        const rpcName = `${section}_${method}`;
        const def = methods[method];

        exposed[method] = def.isSubscription
          ? this.createMethodSubscribe(rpcName, def)
          : this.createMethodSend(rpcName, def);

        return exposed;
      }, {} as RpcInterface$Section);
  }

  private createMethodSend (rpcName: string, method: RpcMethod): RpcInterface$Section$Method {
    const call = async (...values: Array<any>): Promise<any> => {
      // TODO Warn on deprecated methods
      try {
        const params = this.formatInputs(method, values);
        const paramsJson = params.map((param) => param.toJSON());
        const result = await this._provider.send(rpcName, paramsJson);

        return this.formatOutput(method, params, result);
      } catch (error) {
        const message = `${Rpc.signature(method)}:: ${error.message}`;

        console.error(message, error);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    return call as RpcInterface$Section$Method;
  }

  private createMethodSubscribe (rpcName: string, method: RpcMethod): RpcInterface$Section$Method {
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
        const message = `${Rpc.signature(method)}:: ${error.message}`;

        console.error(message, error);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    const call = _call as RpcInterface$Section$Method;

    call.unsubscribe = unsubscribe;

    return call;
  }

  private formatInputs (method: RpcMethod, inputs: Array<any>): Array<Base> {
    assert(method.params.length === inputs.length, `Expected ${method.params.length} parameters, ${inputs.length} found instead`);

    return method.params.map(({ type }, index) =>
      createType(type as string, inputs[index])
    );
  }

  private formatOutput (method: RpcMethod, params: Array<Base>, result?: any): Base | Array<Base | null | undefined> {
    const base = createType(method.type as string).fromJSON(result);

    if (method.type === 'StorageData') {
      // single return value (via state.getStorage), decode the value based on the
      // outputType that we have specified
      const type = (params[0] as StorageKey).outputType;

      if (type) {
        return createType(type, base.raw);
      }
    } else if (method.type === 'StorageChangeSet') {
      // multiple return values (via state.storage subscription), decode the values
      // one at a time, all based on the query types. Three values can be returned -
      //   - Base - There is a valid value, non-empty
      //   - null - The storage key is empty (but in the resultset)
      //   - undefined - The storage value is not in the resultset
      return (params[0] as Vector<StorageKey>).reduce((result, _key: StorageKey) => {
        const type = _key.outputType;

        if (!type) {
          throw new Error('Cannot format StorageChangeSet, output type missing for key');
        }

        // see if we have a result value for this specific key
        const key = _key.toHex();
        const item = (base as StorageChangeSet).changes.find((item) =>
          item.key.toHex() === key
        );

        // if we don't have a value, do not fill in the entry, it will be up to the
        // caller to sort this out, either ignoring or having a cache for older values
        result.push(
          !item
            ? undefined
            : (
              item.value.isEmpty
                ? null
                : createType(type, item.value.value)
            )
        );

        return result;
      }, [] as Array<Base | null | undefined>);
    }

    return base;
  }
}
