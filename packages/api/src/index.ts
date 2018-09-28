// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface, ProviderInterface$Callback } from '@polkadot/api-provider/types';
import { Interfaces, Interface$Sections } from '@polkadot/jsonrpc/types';
import { SectionItem } from '@polkadot/params/types';
import { ApiInterface, ApiInterface$Section, ApiInterface$Section$Method } from './types';

import { Base, Vector, createType } from '@polkadot/api-codec/codec';
import { StorageChangeSet, StorageKey } from '@polkadot/api-codec/index';
import interfaces from '@polkadot/jsonrpc/index';
import signature from '@polkadot/params/signature';
import assert from '@polkadot/util/assert';
import ExtError from '@polkadot/util/ext/error';
import isFunction from '@polkadot/util/is/function';
import isUndefined from '@polkadot/util/is/undefined';

/**
 * @example
 * import Api from '@polkadot/api';
 * import WsProvider from '@polkadot/api-provider/ws';
 *
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const api = new Api(provider);
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
        const params = this.formatInputs(method, values);
        const paramsJson = params.map((param) => param.toJSON());
        const result = await this._provider.send(rpcName, paramsJson);

        return this.formatOutput(method, params, result);
      } catch (error) {
        const message = `${signature(method)}:: ${error.message}`;

        console.error(message, error);

        throw new ExtError(message, (error as ExtError).code, undefined);
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
        const paramsJson = params.map((param) => param.toJSON());
        const update = (error: Error | null, result?: any) => {
          cb(error, this.formatOutput(method, params, result));
        };

        return this._provider.subscribe(rpcName, method.subscribe[0], paramsJson, update);
      } catch (error) {
        const message = `${signature(method)}:: ${error.message}`;

        console.error(message, error);

        throw new ExtError(message, (error as ExtError).code, undefined);
      }
    };

    const call = _call as ApiInterface$Section$Method;

    call.unsubscribe = unsubscribe;

    return call;
  }

  private formatInputs (method: SectionItem<Interfaces>, inputs: Array<any>): Array<Base> {
    assert(method.params.length === inputs.length, `Expected ${method.params.length} parameters, ${inputs.length} found instead`);

    return method.params.map(({ type }, index) =>
      createType(type as string, inputs[index])
    );
  }

  private formatOutput (method: SectionItem<Interfaces>, params: Array<Base>, result?: any): Base {
    const base = createType(method.type as string, result);

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
