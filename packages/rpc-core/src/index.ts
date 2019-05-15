// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterface$Callback } from '@plugnet/rpc-provider/types';
import { RpcSection, RpcMethod } from '@plugnet/jsonrpc/types';
import { RpcInterface, RpcInterface$Method, RpcInterface$Section } from './types';

import interfaces from '@plugnet/jsonrpc';
import { WsProvider } from '@plugnet/rpc-provider';
import { Codec } from '@plugnet/types/types';
import { Option, StorageChangeSet, StorageKey, Vector, createClass, createType } from '@plugnet/types';
import { ExtError, assert, isFunction, isNull, logger } from '@plugnet/util';

const l = logger('rpc-core');

const EMPTY_META = {
  fallback: undefined,
  modifier: { isOptional: true },
  type: {
    asMap: { isLinked: false },
    isMap: false
  }
};

/**
 * @name Rpc
 * @summary The API may use a HTTP or WebSockets provider.
 * @description It allows for querying a Plugnet Client Node.
 * WebSockets provider is recommended since HTTP provider only supports basic querying.
 *
 * ```mermaid
 * graph LR;
 *   A[Api] --> |WebSockets| B[WsProvider];
 *   B --> |endpoint| C[ws://127.0.0.1:9944]
 * ```
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@plugnet/rpc-core';
 * import WsProvider from '@plugnet/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
 */
export default class Rpc implements RpcInterface {
  readonly _provider: ProviderInterface;
  readonly author: RpcInterface$Section;
  readonly chain: RpcInterface$Section;
  readonly state: RpcInterface$Section;
  readonly system: RpcInterface$Section;

  /**
   * @constructor
   * Default constructor for the Api Object
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (provider: ProviderInterface = new WsProvider()) {
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
   * <BR>
   *
   * ```javascript
   * import Api from '@plugnet/rpc-core';
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

  /**
   * @description Manually disconnect from the attached provider
   */
  disconnect (): void {
    this._provider.disconnect();
  }

  private createInterface ({ methods }: RpcSection): RpcInterface$Section {
    return Object
      .keys(methods)
      .reduce((exposed, method) => {

        const def = methods[method];

        exposed[method] = def.isSubscription
          ? this.createMethodSubscribe(def)
          : this.createMethodSend(def);

        return exposed;
      }, {} as RpcInterface$Section);
  }

  private createMethodSend (method: RpcMethod): RpcInterface$Method {
    const rpcName = `${method.section}_${method.method}`;

    const call = async (...values: Array<any>): Promise<any> => {
      // TODO Warn on deprecated methods
      try {
        const params = this.formatInputs(method, values);
        const paramsJson = params.map((param) => param.toJSON());
        const result = await this._provider.send(rpcName, paramsJson);

        return this.formatOutput(method, params, result);
      } catch (error) {
        const message = `${Rpc.signature(method)}:: ${error.message}`;

        l.error(message);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    return call as RpcInterface$Method;
  }

  private createMethodSubscribe (method: RpcMethod): RpcInterface$Method {
    const [updateType, subMethod, unsubMethod] = method.pubsub;
    const subName = `${method.section}_${subMethod}`;
    const unsubName = `${method.section}_${unsubMethod}`;
    const subType = `${method.section}_${updateType}`;

    const unsubscribe = (subscriptionId: any): Promise<any> =>
      this._provider.unsubscribe(subType, unsubName, subscriptionId);
    const _call = async (...values: Array<any>): Promise<any> => {
      try {
        const cb: ProviderInterface$Callback = values.pop();

        assert(isFunction(cb), `Expected callback in last position of params`);

        const params = this.formatInputs(method, values);
        const paramsJson = params.map((param) => param.toJSON());
        const update = (error: Error | null, result?: any) => {
          if (error) {
            l.error(`${Rpc.signature(method)}:: ${error.message}`);
            return;
          }

          cb(this.formatOutput(method, params, result));
        };

        return this._provider.subscribe(subType, subName, paramsJson, update);
      } catch (error) {
        const message = `${Rpc.signature(method)}:: ${error.message}`;

        l.error(message);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    const call = _call as RpcInterface$Method;

    call.unsubscribe = unsubscribe;

    return call;
  }

  private formatInputs (method: RpcMethod, inputs: Array<any>): Array<Codec> {
    const reqArgCount = method.params.filter(({ isOptional }) => !isOptional).length;
    const optText = reqArgCount === method.params.length
      ? ''
      : ` (${method.params.length - reqArgCount} optional)`;

    assert(inputs.length >= reqArgCount && inputs.length <= method.params.length, `Expected ${method.params.length} parameters${optText}, ${inputs.length} found instead`);

    return inputs.map((input, index) =>
      createType(method.params[index].type, input)
    );
  }

  private formatOutput (method: RpcMethod, params: Array<Codec>, result?: any): Codec | Array<Codec | null | undefined> {
    const base = createType(method.type as string, result);

    if (method.type === 'StorageData') {
      return this.formatStorageData(params[0] as StorageKey, base, isNull(result));
    } else if (method.type === 'StorageChangeSet') {
      // multiple return values (via state.storage subscription), decode the values
      // one at a time, all based on the query types. Three values can be returned -
      //   - Base - There is a valid value, non-empty
      //   - null - The storage key is empty (but in the resultset)
      //   - undefined - The storage value is not in the resultset
      return (params[0] as Vector<StorageKey>).reduce((results, key: StorageKey) => {
        results.push(this.formatStorageSet(key, base as StorageChangeSet));

        return results;
      }, [] as Array<Codec | undefined>);
    }

    return base;
  }

  private formatStorageData (key: StorageKey, base: Codec, isNull: boolean): Codec {
    // single return value (via state.getStorage), decode the value based on the
    // outputType that we have specified. Fallback to Data on nothing
    const type = key.outputType || 'Data';
    const Clazz = createClass(type);
    const meta = key.meta || EMPTY_META;
    let created: Codec;

    if (meta.type.isMap && meta.type.asMap.isLinked) {
      // linked map
      created = new Clazz(base);
    } else {
      created = meta.modifier.isOptional
        ? new Option(Clazz, isNull ? null : new Clazz(base))
        : new Clazz(base);
    }

    // TODO Check that the encoded created value matches that what was supplied

    return created;
  }

  private formatStorageSet (key: StorageKey, base: StorageChangeSet): Codec | undefined {
    // Fallback to Data (i.e. just the encoding) if we don't have a specific type
    const type = key.outputType || 'Data';
    const Clazz = createClass(type);

    // see if we have a result value for this specific key
    const hexKey = key.toHex();
    const { value } = base.changes.find((item) =>
      item.key.toHex() === hexKey
    ) || { value: null };
    const meta = key.meta || EMPTY_META;

    // if we don't have a value, do not fill in the entry, it will be up to the
    // caller to sort this out, either ignoring or having a cache for older values
    let created: Codec | undefined;

    if (value) {
      if (meta.type.isMap && meta.type.asMap.isLinked) {
        // linked map
        created = new Clazz(value.unwrapOr(null));
      } else if (meta.modifier.isOptional) {
        // create option either with the existing value, or empty when
        // there is no value returned
        created = new Option(Clazz, value.isNone ? null : new Clazz(value.unwrap()));
      } else {
        // for `null` we fallback to the default value, or create an empty type,
        // otherwise we return the actual value as retrieved
        created = new Clazz(value.unwrapOr(meta.fallback));
      }

      // TODO Check that the encoded created value matches that what was supplied
    }

    return created;
  }
}
