// Copyright 2017-2018 @polkadot/ui-observable authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RxApiInterface, RxApiInterface$Method } from '@polkadot/api-rx/types';
import { Method } from '@polkadot/jsonrpc/types';

import { Observable, combineLatest } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { StorageFunction } from '@polkadot/api-codec/StorageKey';
import assert from '@polkadot/util/assert';
import isUndefined from '@polkadot/util/is/undefined';

type MapFn<R, T> = (combined: R) => T;

const defaultMapFn = (result: any): any =>
  result;

export default class ApiBase {
  protected api: RxApiInterface;

  constructor (api: RxApiInterface) {
    this.api = api;
  }

  protected combine = <T, R> (observables: Array<Observable<any>>, mapfn: MapFn<R, T> = defaultMapFn): Observable<T> => {
    return combineLatest(...observables).pipe(
      // FIXME There are a couple of places now where this casting happens after rxjs 6.3.2
      defaultIfEmpty([] as any),
      map(mapfn)
    );
  }

  rawCall = <T> ({ name, section }: Method, ...params: Array<any>): Observable<T> => {
    // @ts-ignore
    const apiSection = this.api[section];

    assert(section && apiSection, `Unable to find 'api.${section}'`);

    const fn: RxApiInterface$Method = apiSection
      ? apiSection[name]
      // @ts-ignore This one is done for 'isConnected'
      : this.api[name];

    assert(fn, `Unable to find 'api${section ? '.' : ''}${section || ''}.${name}'`);

    return fn.apply(null, params);
  }

  rawStorage = <T> (key: StorageFunction, ...params: Array<any>): Observable<T> => {
    return this
      .rawStorageMulti([key, ...params] as [StorageFunction, any])
      .pipe(
        // @ts-ignore After upgrade to 6.3.2
        map(([result]: Array<T>): T =>
          result
        )
      );
  }

  rawStorageMulti = <T> (...keys: Array<[StorageFunction] | [StorageFunction, any]>): Observable<T> => {
    return this.api.state
      .storage(keys)
      .pipe(
        map((result?: any) =>
          isUndefined(result)
            ? []
            : result
        )
      );
  }
}
