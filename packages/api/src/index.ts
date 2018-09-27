// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { createTypeInstance } from '@polkadot/api-codec/codec';
import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';
import { Interfaces, Interface$Sections } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { Storages } from '@polkadot/storage/types';
import { ApiInterface, ApiInterface$Section, ApiInterface$Section$Method } from './types';

import formatOutput from '@polkadot/api-format/output';
import interfaces from '@polkadot/jsonrpc/index';
import decodeParams from '@polkadot/params/decode';
import signature from '@polkadot/params/signature';
import assert from '@polkadot/util/assert';
import ExtError from '@polkadot/util/ext/error';
import isFunction from '@polkadot/util/is/function';
import isUndefined from '@polkadot/util/is/undefined';
import u8aToHex from '@polkadot/util/u8a/toHex';

/**
 * @example
 * ```javascript
 *
 * import Api from '@polkadot/api';
 * import WsProvider from '@polkadot/api-provider/ws';
 *
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
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

    this.author = this.createInterface('author');
    this.chain = this.createInterface('chain');
    this.state = this.createInterface('state');
    this.system = this.createInterface('system');
  }

  private createInterface (section: Interface$Sections): ApiInterface$Section {
    const definition = interfaces[section];

    assert(!isUndefined(definition), `Unable to find section '${section}`);

    // @ts-ignore undefined check done in assert
    const methods = definition.public;

    return Object
      .keys(methods)
      .reduce((exposed, name) => {
        const rpcName = `${section}_${name}`;
        const def = methods[name];

        exposed[name] = def.isSubscription
          ? this.createMethodSubscribe(rpcName, def)
          : this.createMethodSend(rpcName, def);

        return exposed;
      }, {} as ApiInterface$Section);
  }

  private createMethodSend (rpcName: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
    const call = async (...values: Array<any>): Promise<any> => {
      // TODO Warn on deprecated methods
      try {
        console.error(method, values);

        const params = this.formatInputs(method, values);
        const result = await this._provider.send(rpcName, params);

        return this.formatOutput(method, params, values, result);
      } catch (error) {
        throw new ExtError(`${signature(method)}:: ${error.message}`, (error as ExtError).code, undefined);
      }
    };

    return call as ApiInterface$Section$Method;
  }

  private createMethodSubscribe (rpcName: string, method: SectionItem<Interfaces>): ApiInterface$Section$Method {
    const unsubscribe = (subscriptionId: any): Promise<any> =>
      this._provider.unsubscribe(rpcName, method.subscribe[1], subscriptionId);
    const _call = async (...values: Array<any>): Promise<any> => {
      try {
        const cb: ProviderInterface$Callback = values.pop();

        assert(isFunction(cb), `Expected callback in last position of params`);

        const params = this.formatInputs(method, values);
        const update = (error: Error | null, result?: any) => {
          cb(error, this.formatOutput(method, params, values, result));
        };

        return this._provider.subscribe(rpcName, method.subscribe[0], params, update);
      } catch (error) {
        throw new ExtError(`${signature(method)}:: ${error.message}`, (error as ExtError).code, undefined);
      }
    };

    const call = _call as ApiInterface$Section$Method;

    call.unsubscribe = unsubscribe;

    return call;
  }

  private formatInputs (method: SectionItem<Interfaces>, inputs: Array<any>): Array<any> {
    assert(method.params.length === inputs.length, `Expected ${method.params.length} parameters, ${inputs.length} found instead`);

    return method.params.map(({ type }, index) =>
      createTypeInstance(type as string, inputs[index]).toJSON()
    );
  }

  private formatOutput (method: SectionItem<Interfaces>, params: Array<any>, inputs: Array<any>, result?: any): any {
    console.error(method, result);

    if (method.type === 'StorageResult') {
      return this.formatStorageOutput(inputs[0][0], result);
    }

    if (method.type === 'StorageResultSet') {
      return params[0].map((key: string, index: number) => {
        const input = inputs[0][index][0];
        const { changes = [] }: { block: string, changes: Array<[string, string]> } = result || {};
        const value = changes.find(([_key]) => key === _key);

        if (!value) {
          return undefined;
        }

        return this.formatStorageOutput(input, value[1]);
      });
    }

    return formatOutput(method.type, result);
  }

  private formatStorageOutput (key: SectionItem<Storages>, result?: any): any {
    return decodeParams(key.type, result, 'latest', true).value;
  }
}
