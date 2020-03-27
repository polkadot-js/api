// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Header } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

const MAX_LAG = new BN(5);

export function signingHeader (api: ApiInterfaceRx): () => Observable<Header> {
  // no memo, no params with once-off queries
  return (): Observable<Header> =>
    combineLatest([
      api.rpc.chain.getHeader(),
      api.rpc.chain.getFinalizedHead().pipe(
        switchMap((hash) => api.rpc.chain.getHeader(hash))
      )
    ]).pipe(
      map(([current, finalized]): Header =>
        // determine the hash to use, current when lag > max, else finalized
        current.number.unwrap().sub(finalized.number.unwrap()).gt(MAX_LAG)
          ? current
          : finalized
      )
    );
}
