// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcInterface$Section } from '@polkadot/rpc-core/types';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcRxInterface, RpcRxInterface$Events, RpcRxInterface$Section } from './types';

import EventEmitter from 'eventemitter3';
import { BehaviorSubject, ReplaySubject, Observable, Subscriber, from } from 'rxjs';
import Rpc from '@polkadot/rpc-core/index';
import { isFunction, isUndefined } from '@polkadot/util';

type CachedMap = {
  [index: string]: {
    [index: string]: ReplaySubject<any>
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
 * const wsProvider = new WsProvider('http://127.0.0.1:9944');
 * const api = new RpcRx(wsProvider);
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

  private createObservable (subName: string, name: string, section: RpcInterface$Section): (...params: Array<any>) => Observable<any> | ReplaySubject<any> {
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

  private createCachedObservable (subName: string, name: string, section: RpcInterface$Section): (...params: Array<any>) => ReplaySubject<any> {
    if (!this._cacheMap[subName]) {
      this._cacheMap[subName] = {};
    }

    return (...params: Array<any>): ReplaySubject<any> => {
      const paramStr = JSON.stringify(params);

      if (!this._cacheMap[subName][paramStr]) {
        this._cacheMap[subName][paramStr] = this.createSubject(name, params, section);
      }

      return this._cacheMap[subName][paramStr];
    };
  }

  private createSubject (name: string, params: Array<any>, section: RpcInterface$Section, unsubCallback?: () => void): ReplaySubject<any> {
    const subject = new ReplaySubject(1);

    Observable
      .create((observer: Subscriber<any>): Function => {
        try {
          const fn = section[name];
          const subscribe = fn(...params, this.createSubjectCallback(observer));

          return (): void => {
            subscribe
              .then((subscriptionId: number) =>
                fn.unsubscribe(subscriptionId)
              )
              .then(() =>
                isFunction(unsubCallback) && unsubCallback()
              )
              .catch((error) => {
                console.error('Unsubscribe failed', error);
              });
          };
        } catch (error) {
          console.error(error);

          return (): void => {
            console.error('Unsubscribe called on previously failed subscription', error);
          };
        }
      })
      .subscribe(subject);

    return subject;
  }

  private createSubjectCallback (observer: Subscriber<any>) {
    let cachedResult: any;

    return (result: any) => {
      if (isUndefined(cachedResult) || !Array.isArray(cachedResult)) {
        cachedResult = result;
      } else {
        const resultArray = (result as Array<any>) || [];

        cachedResult = cachedResult.map((cachedValue, index) =>
          isUndefined(resultArray[index])
            ? cachedValue
            : resultArray[index]
        );
      }

      observer.next(cachedResult);
    };
  }
}
