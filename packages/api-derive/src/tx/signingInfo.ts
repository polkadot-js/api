// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Header, Index } from '@polkadot/types/interfaces';
import type { AnyNumber, Codec, IExtrinsicEra } from '@polkadot/types/types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isNumber, isUndefined } from '@polkadot/util';

import { FALLBACK_MAX_HASH_COUNT, FALLBACK_PERIOD, MAX_FINALITY_LAG, MORTAL_PERIOD } from './constants';

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

function nextNonce (api: ApiInterfaceRx, address: string): Observable<Index> {
  return api.rpc.system?.accountNextIndex
    ? api.rpc.system.accountNextIndex(address)
    : latestNonce(api, address);
}

function signingHeader (api: ApiInterfaceRx): Observable<Header> {
  return combineLatest([
    api.rpc.chain.getHeader(),
    api.rpc.chain.getFinalizedHead()
  ]).pipe(
    switchMap(([bestHeader, finHash]) =>
      // retrieve the headers - in the case of the current block, we use the parent
      // to minimize (not completely remove) the impact that forks do have on the system
      // (when at genesis, just return the current header as the last known)
      bestHeader.parentHash.isEmpty
        ? of([bestHeader, bestHeader])
        : combineLatest([
          api.rpc.chain.getHeader(bestHeader.parentHash),
          api.rpc.chain.getHeader(finHash)
        ])
    ),
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
        : nonce === -1
          ? nextNonce(api, address)
          : of(api.registry.createType('Index', nonce)),
      // if no era (create) or era > 0 (mortal), do block retrieval
      (isUndefined(era) || (isNumber(era) && era > 0))
        ? signingHeader(api)
        : of(null)
    ]).pipe(
      map(([nonce, header]) => ({
        header,
        mortalLength: Math.min(
          api.consts.system?.blockHashCount?.toNumber() || FALLBACK_MAX_HASH_COUNT,
          MORTAL_PERIOD
            .div(api.consts.babe?.expectedBlockTime || api.consts.timestamp?.minimumPeriod.muln(2) || FALLBACK_PERIOD)
            .iadd(MAX_FINALITY_LAG)
            .toNumber()
        ),
        nonce
      }))
    );
}
