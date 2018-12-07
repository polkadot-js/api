// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcInterface$Section, RpcInterface$Section$Method } from '@polkadot/rpc-core/types';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface, RpcRxInterface$Events, RpcRxInterface$Section } from './types';

import EventEmitter from 'eventemitter3';
import { BehaviorSubject, Observable, Subscriber, from } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';
import Rpc from '@polkadot/rpc-core/index';
import { isFunction, isUndefined } from '@polkadot/util';

type CachedMap = {
  [index: string]: {
    [index: string]: Observable<any>
  }
};

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
  private _cacheMap: CachedMap;
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
    this._cacheMap = {};
    this._eventemitter = new EventEmitter();
    this._isConnected = new BehaviorSubject(this._api._provider.isConnected());

    this.initEmitters(this._api._provider);

    this.author = this.createInterface('author', this._api.author);
    this.chain = this.createInterface('chain', this._api.chain);
    this.state = this.createInterface('state', this._api.state);
    this.system = this.createInterface('system', this._api.system);
  }

  isConnected (): BehaviorSubject<boolean> {
    return this._isConnected;
  }

  on (type: RpcRxInterface$Events, handler: (...args: Array<any>) => any): void {
    this._eventemitter.on(type, handler);
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

  private createInterface (sectionName: string, section: RpcInterface$Section): RpcRxInterface$Section {
    return Object
      .keys(section)
      .filter((name) => !['subscribe', 'unsubscribe'].includes(name))
      .reduce((observables, name) => {
        observables[name] = this.createObservable(`${sectionName}_${name}`, name, section);

        return observables;
      }, ({} as RpcRxInterface$Section));
  }

  private createObservable (subName: string, name: string, section: RpcInterface$Section): (...params: Array<any>) => Observable<any> {
    if (isFunction(section[name].unsubscribe)) {
      return this.createCachedObservable(subName, name, section);
    }

    return (...params: Array<any>): Observable<any> =>
      from(
        section[name]
          .apply(null, params)
          .catch((error: Error) => {
            console.error(error);
          })
      );
  }

  private createCachedObservable (subName: string, name: string, section: RpcInterface$Section): (...params: Array<any>) => Observable<any> {
    if (!this._cacheMap[subName]) {
      this._cacheMap[subName] = {};
    }

    return (...params: Array<any>): Observable<any> => {
      const paramStr = JSON.stringify(params);

      if (!this._cacheMap[subName][paramStr]) {
        this._cacheMap[subName][paramStr] = this.createReplay(name, params, section, subName, paramStr);
      }

      return this._cacheMap[subName][paramStr];
    };
  }

  private createReplay (name: string, params: Array<any>, section: RpcInterface$Section, subName: string, paramStr: string): Observable<any> {
    return Observable
      .create((observer: Subscriber<any>): Function => {
        const fn = section[name];
        const callback = this.createReplayCallback(observer);
        const subscribe = fn(...params, callback).catch((error) =>
          observer.next(error)
        );

        return this.createReplayUnsub(fn, subscribe, subName, paramStr);
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

  private createReplayCallback (observer: Subscriber<any>) {
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

  private createReplayUnsub (fn: RpcInterface$Section$Method, subscribe: Promise<number>, subName: string, paramStr: string): () => void {
    return (): void => {
      subscribe
        .then((subscriptionId: number) =>
          fn.unsubscribe(subscriptionId)
        )
        .then(() => {
          delete this._cacheMap[subName][paramStr];
        })
        .catch((error) => {
          console.error('Unsubscribe failed', error);
        });
    };
  }
}
