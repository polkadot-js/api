// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcSection, RpcMethod } from '@polkadot/jsonrpc/types';
import { RpcInterface, RpcInterface$Method, RpcInterface$Section } from './types';

import memoize from 'memoizee';
import { combineLatest, from, Observable, Observer, of, throwError } from 'rxjs';
import { catchError, map, publishReplay, refCount, switchMap } from 'rxjs/operators';
import interfaces from '@polkadot/jsonrpc';
import { Codec } from '@polkadot/types/types';
import { Option, StorageChangeSet, StorageKey, Vector, createClass, createType } from '@polkadot/types';
import { ExtError, assert, isFunction, isNull, logger } from '@polkadot/util';

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
 * @description It allows for querying a Polkadot Client Node.
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
 * import Rpc from '@polkadot/rpc-core';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const rpc = new Rpc(provider);
 * ```
 */
export default class Rpc implements RpcInterface {
  readonly provider: ProviderInterface;
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
    assert(provider && isFunction(provider.send), 'Expected Provider to API create');

    this.provider = provider;

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

  /**
   * @description Manually disconnect from the attached provider
   */
  disconnect (): void {
    this.provider.disconnect();
  }

  private createErrorMessage (method: RpcMethod, error: Error) {
    return `${Rpc.signature(method)}:: ${error.message}`;
  }

  private createInterface ({ methods }: RpcSection): RpcInterface$Section {
    return Object
      .keys(methods)
      .reduce((exposed, methodName) => {

        const def = methods[methodName];

        exposed[methodName] = def.isSubscription
          ? this.createMethodSubscribe(def)
          : this.createMethodSend(def);

        return exposed;
      }, {} as RpcInterface$Section);
  }

  private createMethodSend (method: RpcMethod): RpcInterface$Method {
    const rpcName = `${method.section}_${method.method}`;

    const call = (...values: Array<any>): Observable<any> => {
      // TODO Warn on deprecated methods

      // Here, logically, it should be `of(this.formatInputs(method, values))`.
      // However, formatInputs can throw, and when it does, the above way
      // doesn't throw in the "Observable loop" (which is internally wrapped in
      // a try/catch block). So we:
      // - first do `of(1)` - won't throw
      // - then do `map(()=>this.formatInputs)` - might throw, but inside Observable.
      return of(1)
        .pipe(
          map(() => this.formatInputs(method, values)),
          switchMap((params) =>
            combineLatest([
              of(params),
              from(this.provider.send(rpcName, params.map((param) => param.toJSON())))
            ])
          ),
          map(([params, result]) => this.formatOutput(method, params, result)),
          catchError((error) => {
            const message = this.createErrorMessage(method, error);

            l.error(message);

            return throwError(new ExtError(message, (error as ExtError).code, undefined));
          }),
          publishReplay(1), // create a Replay(1)
          refCount() // Unsubcribe WS when there are no more subscribers
        );
    };

    // We voluntarily don't cache the "one-shot" RPC calls. For example,
    // `getStorage('123')` returns the current value, but this value can change
    // over time, so we wouldn't want to cache the Observable.
    return call as RpcInterface$Method;
  }

  private createMethodSubscribe (method: RpcMethod): RpcInterface$Method {
    const [updateType, subMethod, unsubMethod] = method.pubsub;
    const subName = `${method.section}_${subMethod}`;
    const unsubName = `${method.section}_${unsubMethod}`;
    const subType = `${method.section}_${updateType}`;

    const call = (...values: Array<any>): Observable<any> => {
      return new Observable((observer: Observer<any>) => {
        let subscriptionPromise: Promise<number>;

        try {
          const params = this.formatInputs(method, values);
          const paramsJson = params.map((param) => param.toJSON());
          const update = (error?: Error, result?: any) => {
            if (error) {
              l.error(this.createErrorMessage(method, error));
              return;
            }

            observer.next(this.formatOutput(method, params, result));
          };

          subscriptionPromise = this.provider.subscribe(subType, subName, paramsJson, update);
        } catch (error) {
          const message = this.createErrorMessage(method, error);

          l.error(message);

          observer.error(new ExtError(message, (error as ExtError).code, undefined));
        }

        // Teardown logic
        return () => {
          // Delete from cache
          // Reason:
          // ```
          //    const s = api.query.system.accountNonce(addr1).subscribe(); // let's say it's 6
          //    s.unsubscribe();
          //    // wait a bit, for the nonce to increase to 7
          //    api.query.system.accountNonce(addr1).subscribe(); // will output 6 instead of 7 if we don't clear cache
          //    // that's because all our observables are replay(1)
          // ```
          memoized.delete(...values);
          // Unsubscribe from provider
          subscriptionPromise
            .then((subscriptionId) => this.provider.unsubscribe(subType, unsubName, subscriptionId))
            .catch((error: Error) => {
              const message = this.createErrorMessage(method, error);

              l.error(message);
            });
        };
      }).pipe(
        publishReplay(1),
        refCount()
      );
    };

    const memoized = memoize(call, {
      // Dynamic length for argument
      length: false,
      // Normalize args so that different args that should be cached
      // together are cached together.
      // E.g.: `query.my.method('abc') === query.my.method(new AccountId('abc'));`
      normalizer: JSON.stringify
    });

    return memoized;
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
      const key = params[0] as StorageKey;

      try {
        return this.formatStorageData(key, base, isNull(result));
      } catch (error) {
        console.error(`Unable to decode storage ${key.section}.${key.method}:`, error.message);

        throw error;
      }
    } else if (method.type === 'StorageChangeSet') {
      // multiple return values (via state.storage subscription), decode the values
      // one at a time, all based on the query types. Three values can be returned -
      //   - Base - There is a valid value, non-empty
      //   - null - The storage key is empty (but in the resultset)
      //   - undefined - The storage value is not in the resultset
      return (params[0] as Vector<StorageKey>).reduce((results, key: StorageKey) => {
        try {
          results.push(this.formatStorageSet(key, base as StorageChangeSet));
        } catch (error) {
          console.error(`Unable to decode storage ${key.section}.${key.method}:`, error.message);

          throw error;
        }

        return results;
      }, [] as Array<Codec | undefined>);
    }

    return base;
  }

  private formatStorageData (key: StorageKey, base: Codec, isNull: boolean): Codec {
    // single return value (via state.getStorage), decode the value based on the
    // outputType that we have specified. Fallback to Data on nothing
    const type = key.outputType || 'Data';
    const meta = key.meta || EMPTY_META;

    if (meta.type.isMap && meta.type.asMap.isLinked) {
      return createType(type, base, true);
    } else if (meta.modifier.isOptional) {
      return new Option(
        createClass(type),
        isNull ? null : createType(type, base, true)
      );
    }

    return createType(type, isNull ? meta.fallback : base, true);
  }

  private formatStorageSet (key: StorageKey, base: StorageChangeSet): Codec | undefined {
    // Fallback to Data (i.e. just the encoding) if we don't have a specific type
    const type = key.outputType || 'Data';

    // see if we have a result value for this specific key
    const hexKey = key.toHex();
    const { value } = base.changes.find((item) =>
      item.key.toHex() === hexKey
    ) || { value: null };
    const meta = key.meta || EMPTY_META;

    if (!value) {
      return;
    } else if (meta.type.isMap && meta.type.asMap.isLinked) {
      return createType(type, value.unwrapOr(null), true);
    } else if (meta.modifier.isOptional) {
      return new Option(
        createClass(type),
        value.isNone ? null : createType(type, value.unwrap(), true)
      );
    }

    return createType(type, value.unwrapOr(meta.fallback), true);
  }
}
