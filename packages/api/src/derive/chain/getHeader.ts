// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { ApiInterfaceRx } from '../../types';
import type { HeaderExtended } from '../type/types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { createHeaderExtended } from '../type';
import { memo } from '../util';

/**
 * @name getHeader
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @returns An array containing the block header and the block author
 * @description Get a specific block header and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, number } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${number} was authored by ${author}`);
 * ```
 */
export function getHeader (instanceId: string, api: ApiInterfaceRx): (blockHash: Uint8Array | string) => Observable<HeaderExtended | undefined> {
  return memo(instanceId, (blockHash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    combineLatest([
      api.rpc.chain.getHeader(blockHash),
      api.queryAt(blockHash).pipe(
        switchMap((queryAt) =>
          queryAt.session
            ? queryAt.session.validators()
            : of([] as AccountId[])
        )
      )
    ]).pipe(
      map(([header, validators]) =>
        createHeaderExtended(header.registry, header, validators)
      ),
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        of()
      )
    ));
}
