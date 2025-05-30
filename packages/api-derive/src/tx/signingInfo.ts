// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AugmentedConsts } from '@polkadot/api-base/types';
import type { u64 } from '@polkadot/types';
import type { Header, Index } from '@polkadot/types/interfaces';
import type { AnyNumber, Codec, IExtrinsicEra } from '@polkadot/types/types';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types.js';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { isNumber, isUndefined } from '@polkadot/util';

import { unwrapBlockNumber } from '../util/index.js';
import { FALLBACK_MAX_HASH_COUNT, FALLBACK_PERIOD, MAX_FINALITY_LAG, MORTAL_PERIOD } from './constants.js';

interface Result {
  header: Header | null;
  mortalLength: number;
  nonce: Index;
}

function latestNonce (api: DeriveApi, address: string): Observable<Index> {
  return api.derive.balances.account(address).pipe(
    map(({ accountNonce }) => accountNonce)
  );
}

function nextNonce (api: DeriveApi, address: string): Observable<Index> {
  if (api.call.accountNonceApi) {
    return api.call.accountNonceApi.accountNonce(address);
  } else {
    return api.rpc.system?.accountNextIndex
      ? api.rpc.system.accountNextIndex(address)
      : latestNonce(api, address);
  }
}

function signingHeader (api: DeriveApi): Observable<Header> {
  return combineLatest([
    api.rpc.chain.getHeader().pipe(
      switchMap((header) =>
        // check for chains at genesis (until block 1 is produced, e.g. 6s), since
        // we do need to allow transactions at chain start (also dev/seal chains)
        header.parentHash.isEmpty
          ? of(header)
          // in the case of the current block, we use the parent to minimize the
          // impact of forks on the system, but not completely remove it
          : api.rpc.chain.getHeader(header.parentHash).pipe(
            catchError(() => of(header))
          )
      )
    ),
    api.rpc.chain.getFinalizedHead().pipe(
      switchMap((hash) =>
        api.rpc.chain.getHeader(hash).pipe(
          catchError(() => of(null))
        )
      )
    )
  ]).pipe(
    map(([current, finalized]) =>
      // determine the hash to use, current when lag > max, else finalized
      !finalized || unwrapBlockNumber(current).sub(unwrapBlockNumber(finalized)).gt(MAX_FINALITY_LAG)
        ? current
        : finalized
    )
  );
}

interface Aura {
  slotDuration: u64 & AugmentedConsts<'rxjs'>;
}

function babeOrAuraPeriod (api: DeriveApi): BN | undefined {
  const period = api.consts.babe?.expectedBlockTime ||
  // this will be present ones https://github.com/paritytech/polkadot-sdk/pull/3732 is merged

    // eslint-disable-next-line
    (api.consts['aura'] as unknown as Aura)?.['slotDuration'] ||
    api.consts.timestamp?.minimumPeriod.muln(2);

  return period && period.isZero && !period.isZero() ? period : undefined;
}

/**
 * @name signingInfo
 * @description Retrieves signing-related information for an account, including the nonce, block header, and mortal length.
 * @param {string} address The account address for which signing information is needed.
 * @param { BN | bigint | Uint8Array | number | string } nonce? (Optional) The nonce to use. If `undefined`, the latest nonce is retrieved.
 * @param { IExtrinsicEra | number } era? (Optional) The transaction era.
 * @example
 * ```javascript
 * const info = await api.derive.tx.signingInfo(
 *   "14mM9FRDDtwSYicjNxSvMfQkap8o4m9zHq7hNW4JpbSL4PPU"
 * );
 * console.log(info);
 * ```
 */
export function signingInfo (_instanceId: string, api: DeriveApi): (address: string, nonce?: AnyNumber | Codec, era?: IExtrinsicEra | number) => Observable<Result> {
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
            .div(babeOrAuraPeriod(api) || FALLBACK_PERIOD)
            .iadd(MAX_FINALITY_LAG)
            .toNumber()
        ),
        nonce
      }))
    );
}
