// Copyright 2017-2019 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcInterface$Method, RpcInterface$Section } from '@polkadot/rpc-core/types';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface, RpcRxInterface$Events, RpcRxInterface$Method, RpcRxInterface$Section } from './types';

import EventEmitter from 'eventemitter3';
import memoize, { Memoized } from 'memoizee';
import { BehaviorSubject, Observable, from, Observer } from 'rxjs';
import Rpc from '@polkadot/rpc-core';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { isFunction, isUndefined } from '@polkadot/util';

/**
 * @name RpcRx
 * @summary The RxJS API is a wrapper around the API.
 * @description It allows wrapping API components with observables using RxJS.
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import RpcRx from '@polkadot/rpc-rx';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const api = new RpcRx(provider);
 * ```
 */
export default class RpcRx implements RpcRxInterface {
  private _api: Rpc;
  private _eventemitter: EventEmitter;
  private _isConnected: BehaviorSubject<boolean>;
  readonly author: RpcRxInterface$Section;
  readonly chain: RpcRxInterface$Section;
  readonly state: RpcRxInterface$Section;
  readonly system: RpcRxInterface$Section;

  /**
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (providerOrRpc?: Rpc | ProviderInterface) {
    this._api = providerOrRpc instanceof Rpc
      ? providerOrRpc
      : new Rpc(providerOrRpc);
    this._eventemitter = new EventEmitter();
    this._isConnected = new BehaviorSubject(this._api._provider.isConnected());

    this.initEmitters(this._api._provider);

    this.author = this.createInterface(this._api.author);
    this.chain = this.createInterface(this._api.chain);
    this.state = this.createInterface(this._api.state);
    this.system = this.createInterface(this._api.system);
  }

  isConnected (): BehaviorSubject<boolean> {
    return this._isConnected;
  }

  on (type: RpcRxInterface$Events, handler: (...args: Array<any>) => any): void {
    this._eventemitter.on(type, handler);
  }

  /**
   * @description Manually disconnect from the attached provider of api
   */
  disconnect (): void {
    this._api.disconnect();
  }

  protected emit (type: RpcRxInterface$Events, ...args: Array<any>): void {
    this._eventemitter.emit(type, ...args);
  }

  private initEmitters (provider: ProviderInterface): void {
    provider.on('connected', () => {
      this._isConnected.next(true);

      this.emit('connected');
    });

    provider.on('disconnected', () => {
      this._isConnected.next(false);

      this.emit('disconnected');
    });
  }

  private createInterface (section: RpcInterface$Section): RpcRxInterface$Section {
    return Object
      .keys(section)
      .filter((name) => !['subscribe', 'unsubscribe'].includes(name))
      .reduce((observables, name) => {
        observables[name] = this.createObservable(name, section);

        return observables;
      }, ({} as RpcRxInterface$Section));
  }

  private createObservable (name: string, section: RpcInterface$Section): RpcRxInterface$Method {
    if (isFunction(section[name].unsubscribe)) {
      const memoized: Memoized<RpcRxInterface$Method> = memoize(
        (...params: Array<any>) => this.createReplay(name, params, section, memoized),
        {
          length: false,
          // Normalize args so that different args that should be cached
          // together are cached together.
          // E.g.: `query.my.method('abc') === query.my.method(new AccountId('abc'));`
          normalizer: (args) => {
            // `args` is arguments object as accessible in memoized function
            return JSON.stringify(args);
          }
        }
      );

      return memoized as unknown as RpcRxInterface$Method;
    }

    // We voluntarily don't cache the "one-shot" RPC calls. For example,
    // `getStorage('123')` returns the current value, but this value can change
    // over time, so we wouldn't want to cache the Observable.
    return (...params: Array<any>): Observable<any> =>
      from(
        section[name]
          .apply(null, params)
          .catch((error: Error) => {
            console.error(error);
          })
      );
  }

  private createReplay (name: string, params: Array<any>, section: RpcInterface$Section, memoized: Memoized<RpcRxInterface$Method>): Observable<any> {
    return new Observable((observer: Observer<any>): Function => {
      const fn = section[name];
      const callback = this.createReplayCallback(observer);
      const subscribe = fn(...params, callback).catch((error) =>
        observer.next(error)
      );

      return this.createReplayUnsub(fn, subscribe, params, memoized);
    })
      .pipe(
        map((value) => {
          if (value instanceof Error) {
            throw value;
          }

          return value;
        }),
        publishReplay(1),
        refCount()
      );
  }

  private createReplayCallback (observer: Observer<any>) {
    let cachedResult: any;

    return (result: any) => {
      if (isUndefined(cachedResult) || !Array.isArray(cachedResult) || !Array.isArray(result)
        || result.length !== cachedResult.length) {
        cachedResult = result;
      } else {
        cachedResult = cachedResult.map((cachedValue, index) =>
          isUndefined(result[index])
            ? cachedValue
            : result[index]
        );
      }

      observer.next(cachedResult);
    };
  }

  private createReplayUnsub (fn: RpcInterface$Method, subscribe: Promise<number>, params: Array<any>, memoized: Memoized<RpcRxInterface$Method>): () => void {
    return (): void => {
      subscribe
        .then((subscriptionId: number) =>
          fn.unsubscribe(subscriptionId)
        )
        .then(() => {
          memoized.delete(...params);
        })
        .catch((error) => {
          console.error('Unsubscribe failed', error);
        });
    };
  }
}
