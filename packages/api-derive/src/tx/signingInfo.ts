// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Header, Index } from '@polkadot/types/interfaces';
import { AnyNumber, Codec, IExtrinsicEra } from '@polkadot/types/types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { isNumber, isUndefined } from '@polkadot/util';

import { FALLBACK_PERIOD, MAX_FINALITY_LAG, MORTAL_PERIOD } from './constants';

interface Result {
  header: Header | null;
  mortalLength: number;
  nonce: Index;
}

function latestNonce (api: ApiInterfaceRx, address: string): Observable<Index> {
  return api.derive.balances.account(address).pipe(
    map(({ accountNonce }) => accountNonce)
  );
}

function signingHeader (api: ApiInterfaceRx): Observable<Header> {
  return combineLatest([
    api.rpc.chain.getHeader(),
    api.rpc.chain.getFinalizedHead().pipe(
      switchMap((hash) => api.rpc.chain.getHeader(hash))
    )
  ]).pipe(
    map(([current, finalized]) =>
      // determine the hash to use, current when lag > max, else finalized
      current.number.unwrap().sub(finalized.number.unwrap()).gt(MAX_FINALITY_LAG)
        ? current
        : finalized
    )
  );
}

export function signingInfo (_instanceId: string, api: ApiInterfaceRx): (address: string, nonce?: AnyNumber | Codec, era?: IExtrinsicEra | number) => Observable<Result> {
  // no memo, we want to do this fresh on each run
  return (address: string, nonce?: AnyNumber | Codec, era?: IExtrinsicEra | number): Observable<Result> =>
    combineLatest([
      // retrieve nonce if none was specified
      isUndefined(nonce)
        ? latestNonce(api, address)
        : of(api.registry.createType('Index', nonce)),
      // if no era (create) or era > 0 (mortal), do block retrieval
      (isUndefined(era) || (isNumber(era) && era > 0))
        ? signingHeader(api)
        : of(null)
    ]).pipe(
      map(([nonce, header]) => ({
        header,
        mortalLength: MORTAL_PERIOD
          .div(api.consts.babe?.expectedBlockTime || api.consts.timestamp?.minimumPeriod.muln(2) || FALLBACK_PERIOD)
          .iadd(MAX_FINALITY_LAG)
          .toNumber(),
        nonce
      }))
    );
}
