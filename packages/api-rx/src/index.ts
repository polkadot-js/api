// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface, ApiInterface$Section } from '@polkadot/api/types';
import { ProviderInterface } from '@polkadot/api-provider/types';
import { RxApiInterface, RxApiInterface$Section } from './types';

import { BehaviorSubject, Observable, Subscriber, from } from 'rxjs';
import Api from '@polkadot/api/index';
import Ws from '@polkadot/api-provider/ws';
import isFunction from '@polkadot/util/is/function';
import isUndefined from '@polkadot/util/is/undefined';

import defaults from './defaults';

type CachedMap = {
  [index: string]: {
    [index: string]: BehaviorSubject<any>
  }
};

/**
 * @name RxApi
 * @summary The RxJS API is a wrapper around the API.
 * @description It allows wrapping API components with observables using RxJS.
 *
 * @example
 * <BR><PRE><CODE>
 * import RxApi from '@polkadot/api';
 * import WsProvider from '@polkadot/api-provider/ws';
 * <BR>
 * const provider = new WsProvider('http://127.0.0.1:9944');
 * const rxapi = new RxApi(provider);
 * </CODE></PRE>
 */
export default class RxApi implements RxApiInterface {
  private _api: ApiInterface;
  private _cacheMap: CachedMap;
  private _isConnected: BehaviorSubject<boolean>;
  readonly author: RxApiInterface$Section;
  readonly chain: RxApiInterface$Section;
  readonly state: RxApiInterface$Section;
  readonly system: RxApiInterface$Section;

  /**
   * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
   */
  constructor (provider: ProviderInterface = new Ws(defaults.WS_URL)) {
    this._api = new Api(provider);
    this._cacheMap = {};
    this._isConnected = new BehaviorSubject(provider.isConnected());

    provider.on('connected', () => this._isConnected.next(true));
    provider.on('disconnected', () => this._isConnected.next(false));

    this.author = this.createInterface('author', this._api.author);
    this.chain = this.createInterface('chain', this._api.chain);
    this.state = this.createInterface('state', this._api.state);
    this.system = this.createInterface('system', this._api.system);
  }

  isConnected (): BehaviorSubject<boolean> {
    return this._isConnected;
  }

  private createInterface (sectionName: string, section: ApiInterface$Section): RxApiInterface$Section {
    return Object
      .keys(section)
      .filter((name) => !['subscribe', 'unsubscribe'].includes(name))
      .reduce((observables, name) => {
        observables[name] = this.createObservable(`${sectionName}_${name}`, name, section);

        return observables;
      }, ({} as RxApiInterface$Section));
  }

  private createObservable (subName: string, name: string, section: ApiInterface$Section): (...params: Array<any>) => Observable<any> | BehaviorSubject<any> {
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

  private createCachedObservable (subName: string, name: string, section: ApiInterface$Section): (...params: Array<any>) => BehaviorSubject<any> {
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

  private createSubject (name: string, params: Array<any>, section: ApiInterface$Section, unsubCallback?: () => void): BehaviorSubject<any> {
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
