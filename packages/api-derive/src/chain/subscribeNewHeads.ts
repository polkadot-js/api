// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Observable } from '@polkadot/x-rxjs';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { HeaderExtended } from '../type';
import { memo } from '../util';

/**
 * @name subscribeNewHeads
 * @returns A header with the current header (including extracted author)
 * @description An observable of the current block header and it's author
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.subscribeNewHeads((header) => {
 *   console.log(`block #${header.number} was authored by ${header.author}`);
 * });
 * ```
 */
export function subscribeNewHeads (instanceId: string, api: ApiInterfaceRx): () => Observable<HeaderExtended> {
  return memo(instanceId, (): Observable<HeaderExtended> =>
    combineLatest([
      api.rpc.chain.subscribeNewHeads(),
      api.query.session
        ? api.query.session.validators()
        : of([])
    ]).pipe(
      map(([header, validators]): HeaderExtended =>
        new HeaderExtended(api.registry, header, validators)
      )
    ));
}
