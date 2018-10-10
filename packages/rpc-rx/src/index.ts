// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcInterface, RpcInterface$Section } from '@polkadot/rpc-core/types';
import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RxRpcInterface, RxRpcInterface$Section } from './types';

import E3 from 'eventemitter3';
import { BehaviorSubject, Observable, Subscriber, from } from 'rxjs';
import Rpc from '@polkadot/rpc-core/index';
import Ws from '@polkadot/rpc-provider/ws';
import isFunction from '@polkadot/util/is/function';
import isUndefined from '@polkadot/util/is/undefined';

import defaults from './defaults';
import RuntimeMetadata from '@polkadot/types/Metadata';

type CachedMap = {
  [index: string]: {
    [index: string]: BehaviorSubject<any>
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
 * import Rpc from '@polkadot/rpc-rx';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const api = new Rpc(provider);
 * ```
 */
export default class RpcRx extends E3.EventEmitter implements RxRpcInterface {
  private _api: RpcInterface;
  private _cacheMap: CachedMap;
  private _isConnected: BehaviorSubject<boolean>;
  readonly author: RxRpcInterface$Section;
  readonly chain: RxRpcInterface$Section;
  readonly state: RxRpcInterface$Section;
  readonly system: RxRpcInterface$Section;

  /**
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (provider: ProviderInterface = new Ws(defaults.WS_URL)) {
    super();

    this._api = new Rpc(provider);
    this._cacheMap = {};
    this._isConnected = new BehaviorSubject(provider.isConnected());

    this.initEmitters(provider);

    this.author = this.createInterface('author', this._api.author);
    this.chain = this.createInterface('chain', this._api.chain);
    this.state = this.createInterface('state', this._api.state);
    this.system = this.createInterface('system', this._api.system);
  }

  isConnected (): BehaviorSubject<boolean> {
    return this._isConnected;
  }

  private initEmitters (provider: ProviderInterface): void {
    this._api.on('metadata', (metadata: RuntimeMetadata): void => {
      this.emit('metadata', metadata);
    });

    provider.on('connected', () => {
      this._isConnected.next(true);

      this.emit('connected');
    });

    provider.on('disconnected', () => {
      this._isConnected.next(false);

      this.emit('disconnected');
    });
  }

  private createInterface (sectionName: string, section: RpcInterface$Section): RxRpcInterface$Section {
    return Object
      .keys(section)
      .filter((name) => !['subscribe', 'unsubscribe'].includes(name))
      .reduce((observables, name) => {
        observables[name] = this.createObservable(`${sectionName}_${name}`, name, section);

        return observables;
      }, ({} as RxRpcInterface$Section));
  }

  private createObservable (subName: string, name: string, section: RpcInterface$Section): (...params: Array<any>) => Observable<any> | BehaviorSubject<any> {
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

  private createCachedObservable (subName: string, name: string, section: RpcInterface$Section): (...params: Array<any>) => BehaviorSubject<any> {
    if (!this._cacheMap[subName]) {
      this._cacheMap[subName] = {};
    }

    return (...params: Array<any>): BehaviorSubject<any> => {
      const paramStr = JSON.stringify(params);

      if (!this._cacheMap[subName][paramStr]) {
        this._cacheMap[subName][paramStr] = this.createSubject(name, params, section);
      }

      return this._cacheMap[subName][paramStr];
    };
  }

  private createSubject (name: string, params: Array<any>, section: RpcInterface$Section, unsubCallback?: () => void): BehaviorSubject<any> {
    const subject = new BehaviorSubject(undefined);

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

    return (error: Error | null, result: any) => {
      if (error) {
        console.error(error);
        observer.next();
        return;
      }

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
