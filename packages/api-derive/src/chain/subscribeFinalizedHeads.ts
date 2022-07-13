// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Hash, Header } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types';

import { from, of, switchMap } from 'rxjs';

import { memo } from '../util';

export function _getHeaderRange (instanceId: string, api: DeriveApi): (startHash: Hash, endHash: Hash, prev?: Header[]) => Observable<Header[]> {
  return memo(instanceId, (startHash: Hash, endHash: Hash, prev: Header[] = []): Observable<Header[]> =>
    api.rpc.chain.getHeader(startHash).pipe(
      switchMap((header) =>
        header.parentHash.eq(endHash)
          ? of([header, ...prev])
          : api.derive.chain._getHeaderRange(header.parentHash, endHash, [header, ...prev])
      )
    )
  );
}

/**
 * @name subscribeFinalizedHeads
 * @description An observable of the finalized block headers. Unlike the base
 * chain.subscribeFinalizedHeads this does not skip any headers. Since finalization
 * may skip specific blocks (finalization happens in terms of chains), this version
 * of the derive tracks missing headers (since last  retrieved) and provides them
 * to the caller
 */
export function subscribeFinalizedHeads (instanceId: string, api: DeriveApi): () => Observable<Header> {
  return memo(instanceId, (): Observable<Header> => {
    let prevHash: Hash | null = null;

    return api.rpc.chain.subscribeFinalizedHeads().pipe(
      switchMap((header) => {
        const endHash = prevHash;
        const startHash = header.parentHash;

        prevHash = header.hash;

        return endHash === null || startHash.eq(endHash)
          ? of(header)
          : api.derive.chain._getHeaderRange(startHash, endHash, [header]).pipe(
            switchMap((headers) =>
              from(headers)
            )
          );
      })
    );
  });
}
