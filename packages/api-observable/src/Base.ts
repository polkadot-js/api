// Copyright 2017-2018 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcRxInterface, RpcRxInterface$Method, RpcRxInterface$Section } from '@polkadot/rpc-rx/types';
import { RpcMethod } from '@polkadot/jsonrpc/types';

import { EMPTY, Observable, combineLatest, from } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import extrinsicsFromMeta from '@polkadot/extrinsics/fromMetadata';
import extrinsicsStatic from '@polkadot/extrinsics/static';
import storageFromMeta from '@polkadot/storage/fromMetadata';
import storageStatic from '@polkadot/storage/static';
import { Vector } from '@polkadot/types/codec';
import { Hash, Method } from '@polkadot/types/index';
import { StorageFunction } from '@polkadot/types/StorageKey';
import { assert, isUndefined } from '@polkadot/util';

type MapFn<R, T> = (combined: R) => T;

const defaultMapFn = (result: any): any =>
  result;

// Raw base implementation for the observable API. It simply provides access to raw calls, allowing
// decendants to make direct queries to either API methods or actual storage
export default class ApiBase {
  protected _api: RpcRxInterface;
  protected _genesisHash: Hash;

  // Observable that returns the first time we are connected and loaded
  whenReady: Observable<boolean>;

  constructor (api: RpcRxInterface) {
    this._api = api;
    this._genesisHash = new Hash();
    this.whenReady = from(this.init());
  }

  static extrinsics = extrinsicsStatic;
  static storage = storageStatic;

  // FIXME This logic is duplicated in api-rx, since that should derive
  // from that base, it should be removed when the actual extend is done
  private init (): Promise<boolean> {
    let isReady: boolean = false;

    return new Promise((resolveReady) => {
      // On connection, load data from chain
      this.isConnected().subscribe(async (isConnected) => {
        if (!isConnected) {
          return;
        }

        try {
          // FIXME This now gets done in api-core/rpc-core as well, cleanup as soon as we
          // have apis based on api-rx & api-promise (For now a bit of inefficiency)
          const meta = await this._api.state.getMetadata().toPromise();

          this._genesisHash = await this._api.chain.getBlockHash(0).toPromise();

          ApiBase.extrinsics = extrinsicsFromMeta(meta);
          ApiBase.storage = storageFromMeta(meta);

          Method.injectExtrinsics(ApiBase.extrinsics);

          if (!isReady) {
            isReady = true;
            resolveReady(true);
          }
        } catch (error) {
          // swallow
        }
      });
    });
  }

  protected combine = <T, R> (observables: Array<Observable<any>>, mapfn: MapFn<R, T> = defaultMapFn): Observable<T> => {
    return combineLatest(...observables).pipe(
      defaultIfEmpty([] as any),
      map(mapfn)
    );
  }

  get genesisHash (): Hash {
    return this._genesisHash;
  }

  isConnected = (): Observable<boolean> => {
    return this._api.isConnected();
  }

  rawCall = <T> ({ method, section }: RpcMethod, ...params: Array<any>): Observable<T> => {
    const apiSection = this._api[section as keyof RpcRxInterface] as RpcRxInterface$Section;

    assert(apiSection, `Unable to find 'api.${section}'`);

    const fn: RpcRxInterface$Method = apiSection[method];

    assert(fn, `Unable to find 'api.${section}.${method}'`);

    return fn.apply(null, params);
  }

  // FIXME Remove when extending from api-rx
  rawStorage = <T> (key: StorageFunction, ...params: Array<any>): Observable<T | undefined> => {
    return this
      .rawStorageMulti([key, ...params] as [StorageFunction, any])
      .pipe(
        map((result: Array<T>): T | undefined =>
          result
            ? result[0]
            : undefined
        )
      );
  }

  // FIXME Remove when extending from api-rx
  rawStorageMulti = <T extends []> (...keys: Array<[StorageFunction] | [StorageFunction, any]>): Observable<T> => {
    let observable;

    try {
      observable = this._api.state.subscribeStorage(keys);
    } catch (error) {
      observable = EMPTY;
    }

    return observable.pipe(
      defaultIfEmpty(),
      map((result?: Vector<any>): T =>
        isUndefined(result)
          ? [] as T
          // FIXME When Vector extends Array, this mapping can be removed
          : result.map((item: any) => item) as T
      )
    );
  }
}
