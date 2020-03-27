// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Header, Index } from '@polkadot/types/interfaces';
import { AnyNumber, Codec, IExtrinsicEra } from '@polkadot/types/types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { isNumber, isUndefined } from '@polkadot/util';

interface Result {
  header: Header | null;
  mortalLength: number;
  nonce: Index;
}

// default here to 5 min eras, adjusted based on the actual blocktime
const FALLBACK_PERIOD = new BN(6 * 1000);
const MAX_FINALITY_LAG = new BN(5);
const MORTAL_PERIOD = new BN(5 * 60 * 1000);

function mortalLength (api: ApiInterfaceRx): number {
  const blockTime = api.consts.babe?.expectedBlockTime || api.consts.timestamp?.minimumPeriod.muln(2) || FALLBACK_PERIOD;

  return MORTAL_PERIOD
    .div(blockTime)
    .add(MAX_FINALITY_LAG)
    .toNumber();
}

function signingHeader (api: ApiInterfaceRx): Observable<Header> {
  return combineLatest([
    api.rpc.chain.getHeader(),
    api.rpc.chain.getFinalizedHead().pipe(
      switchMap((hash) => api.rpc.chain.getHeader(hash))
    )
  ]).pipe(
    map(([current, finalized]): Header =>
      // determine the hash to use, current when lag > max, else finalized
      current.number.unwrap().sub(finalized.number.unwrap()).gt(MAX_FINALITY_LAG)
        ? current
        : finalized
    )
  );
}

export function signingInfo (api: ApiInterfaceRx): (address: string, nonce?: AnyNumber | Codec, era?: IExtrinsicEra | number) => Observable<Result> {
  // no memo, no params with once-off queries
  return (address: string, nonce?: AnyNumber | Codec, era?: IExtrinsicEra | number): Observable<Result> =>
    combineLatest([
      // if we have a nonce already, don't retrieve the latest, use what is there
      isUndefined(nonce)
        ? api.derive.balances.account(address).pipe(
          map(({ accountNonce }): Index => accountNonce)
        )
        : of(api.registry.createType('Index', nonce)),
      // if we have an era provided already or eraLength is <= 0 (immortal)
      // don't get the latest block, just pass null, handle in mergeMap
      (isUndefined(era) || (isNumber(era) && era > 0))
        ? signingHeader(api)
        : of(null)
    ]).pipe(
      map(([nonce, header]) => ({ header, mortalLength: mortalLength(api), nonce }))
    );
}
