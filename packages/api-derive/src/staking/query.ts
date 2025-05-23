// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, StorageKey, u32, Vec } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingNominations, PalletStakingRewardDestination, PalletStakingStakingLedger, PalletStakingValidatorPrefs, SpStakingExposure, SpStakingExposurePage, SpStakingPagedExposureMetadata } from '@polkadot/types/lookup';
import type { AnyNumber } from '@polkadot/types-codec/types';
import type { DeriveApi, DeriveStakingQuery, StakingQueryFlags } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { firstMemo, memo } from '../util/index.js';

// handle compatibility between generations of structures
function rewardDestinationCompat (rewardDestination: PalletStakingRewardDestination | Option<PalletStakingRewardDestination>): PalletStakingRewardDestination | null {
  // We ensure the type is an Option by checking if isSome is a boolean. When isSome doesn't exist it will always return undefined.
  return typeof (rewardDestination as Option<PalletStakingRewardDestination>).isSome === 'boolean'
    ? (rewardDestination as Option<PalletStakingRewardDestination>).unwrapOr(null)
    : (rewardDestination as PalletStakingRewardDestination);
}

function filterClaimedRewards (api: DeriveApi, cl: number[]): Vec<u32> {
  return api.registry.createType('Vec<u32>', cl.filter((c) => c !== -1));
}

function filterRewards (stashIds: AccountId[], eras: number[], claimedRewards: [StorageKey<[u32, AccountId]>, Vec<u32>][], stakersOverview: [StorageKey<[u32, AccountId]>, Option<SpStakingPagedExposureMetadata>][]): number[][] {
  const claimedData: Record<string, Map<number, u32[]>> = {};
  const overviewData: Record<string, Map<number, u32>> = {};
  const ids = stashIds.map((i) => i.toString());

  claimedRewards.forEach(([keys, rewards]) => {
    const id = keys.args[1].toString();
    const era = keys.args[0].toNumber();

    if (ids.includes(id)) {
      if (claimedData[id]) {
        claimedData[id].set(era, rewards.toArray());
      } else {
        claimedData[id] = new Map();
        claimedData[id].set(era, rewards.toArray());
      }
    }
  });

  stakersOverview.forEach(([keys, overview]) => {
    const id = keys.args[1].toString();
    const era = keys.args[0].toNumber();

    if (ids.includes(id) && overview.isSome) {
      if (overviewData[id]) {
        overviewData[id].set(era, overview.unwrap().pageCount);
      } else {
        overviewData[id] = new Map();
        overviewData[id].set(era, overview.unwrap().pageCount);
      }
    }
  });

  return stashIds.map((id) => {
    const rewardsPerEra = claimedData[id.toString()];
    const overviewPerEra = overviewData[id.toString()];

    return eras.map((era) => {
      if (rewardsPerEra && rewardsPerEra.has(era) && overviewPerEra && overviewPerEra.has(era)) {
        const rewards = rewardsPerEra.get(era) as unknown as u32[];
        const pageCount = overviewPerEra.get(era) as unknown as u32;

        return rewards.length === pageCount.toNumber()
          ? era
          : -1;
      }

      return -1;
    });
  });
}

function parseDetails (api: DeriveApi, stashId: AccountId, controllerIdOpt: Option<AccountId> | null, nominatorsOpt: Option<PalletStakingNominations>, rewardDestinationOpts: Option<PalletStakingRewardDestination> | PalletStakingRewardDestination, validatorPrefs: PalletStakingValidatorPrefs, exposure: Option<SpStakingExposurePage>, stakingLedgerOpt: Option<PalletStakingStakingLedger>, exposureMeta: Option<SpStakingPagedExposureMetadata>, claimedRewards: number[], exposureEraStakers: SpStakingExposure): DeriveStakingQuery {
  return {
    accountId: stashId,
    claimedRewardsEras: filterClaimedRewards(api, claimedRewards),
    controllerId: controllerIdOpt?.unwrapOr(null) || null,
    exposureEraStakers,
    exposureMeta,
    exposurePaged: exposure,
    nominators: nominatorsOpt.isSome
      ? nominatorsOpt.unwrap().targets
      : [],
    rewardDestination: rewardDestinationCompat(rewardDestinationOpts),
    stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
    stashId,
    validatorPrefs
  };
}

function getLedgers (api: DeriveApi, optIds: (Option<AccountId> | null)[], { withLedger = false }: StakingQueryFlags): Observable<Option<PalletStakingStakingLedger>[]> {
  const ids = optIds
    .filter((o): o is Option<AccountId> => withLedger && !!o && o.isSome)
    .map((o) => o.unwrap());
  const emptyLed = api.registry.createType<Option<PalletStakingStakingLedger>>('Option<StakingLedger>');

  return (
    ids.length
      ? combineLatest(ids.map((s) => api.query.staking.ledger(s)))
      : of([])
  ).pipe(
    map((optLedgers): Option<PalletStakingStakingLedger>[] => {
      let offset = -1;

      return optIds.map((o): Option<PalletStakingStakingLedger> =>
        o && o.isSome
          ? optLedgers[++offset] || emptyLed
          : emptyLed
      );
    })
  );
}

function getStashInfo (api: DeriveApi, stashIds: AccountId[], activeEra: EraIndex, { withClaimedRewardsEras, withController, withDestination, withExposure, withExposureErasStakersLegacy, withExposureMeta, withLedger, withNominations, withPrefs }: StakingQueryFlags, page: u32 | AnyNumber): Observable<[(Option<AccountId> | null)[], Option<PalletStakingNominations>[], Option<PalletStakingRewardDestination>[], PalletStakingValidatorPrefs[], Option<SpStakingExposurePage>[], Option<SpStakingPagedExposureMetadata>[], number[][], SpStakingExposure[]]> {
  const emptyNoms = api.registry.createType<Option<PalletStakingNominations>>('Option<Nominations>');
  const emptyRewa = api.registry.createType<Option<PalletStakingRewardDestination>>('RewardDestination');
  const emptyExpoEraStakers = api.registry.createType<SpStakingExposure>('Exposure');
  const emptyPrefs = api.registry.createType<PalletStakingValidatorPrefs>('ValidatorPrefs');
  // The reason we don't explicitly make the actual types is for compatibility. If the chain doesn't have the noted type it will fail
  // on construction. Therefore we just make an empty option.
  const emptyExpo = api.registry.createType<Option<SpStakingExposurePage>>('Option<Null>');
  const emptyExpoMeta = api.registry.createType<Option<SpStakingPagedExposureMetadata>>('Option<Null>');
  const emptyClaimedRewards = [-1];

  const depth = Number(api.consts.staking.historyDepth.toNumber());
  const eras = new Array(depth).fill(0).map((_, idx) => {
    if (idx === 0) {
      return activeEra.toNumber() - 1;
    }

    return activeEra.toNumber() - idx - 1;
  });

  return combineLatest([
    withController || withLedger
      ? combineLatest(stashIds.map((s) => api.query.staking.bonded(s)))
      : of(stashIds.map(() => null)),
    withNominations
      ? combineLatest(stashIds.map((s) => api.query.staking.nominators(s)))
      : of(stashIds.map(() => emptyNoms)),
    withDestination
      ? combineLatest(stashIds.map((s) => api.query.staking.payee(s)))
      : of(stashIds.map(() => emptyRewa)),
    withPrefs
      ? combineLatest(stashIds.map((s) => api.query.staking.validators(s)))
      : of(stashIds.map(() => emptyPrefs)),
    withExposure && api.query.staking.erasStakersPaged
      ? combineLatest(stashIds.map((s) => api.query.staking.erasStakersPaged<Option<SpStakingExposurePage>>(activeEra, s, page)))
      : of(stashIds.map(() => emptyExpo)),
    withExposureMeta && api.query.staking.erasStakersOverview
      ? combineLatest(stashIds.map((s) => api.query.staking.erasStakersOverview(activeEra, s)))
      : of(stashIds.map(() => emptyExpoMeta)),
    withClaimedRewardsEras && api.query.staking.claimedRewards
      ? combineLatest([
        api.query.staking.claimedRewards.entries<Vec<u32>>(),
        api.query.staking.erasStakersOverview.entries<Option<SpStakingPagedExposureMetadata>>()
      ]).pipe(
        map(([rewardsStorageVec, overviewStorageVec]) => filterRewards(stashIds, eras, rewardsStorageVec, overviewStorageVec))
      )
      : of(stashIds.map(() => emptyClaimedRewards)),
    withExposureErasStakersLegacy && api.query.staking.erasStakers
      ? combineLatest(stashIds.map((s) => api.query.staking.erasStakers(activeEra, s)))
      : of(stashIds.map(() => emptyExpoEraStakers))
  ]);
}

function getBatch (api: DeriveApi, activeEra: EraIndex, stashIds: AccountId[], flags: StakingQueryFlags, page: u32 | AnyNumber): Observable<DeriveStakingQuery[]> {
  return getStashInfo(api, stashIds, activeEra, flags, page).pipe(
    switchMap(([controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure, exposureMeta, claimedRewardsEras, exposureEraStakers]): Observable<DeriveStakingQuery[]> =>
      getLedgers(api, controllerIdOpt, flags).pipe(
        map((stakingLedgerOpts) =>
          stashIds.map((stashId, index) =>
            parseDetails(api, stashId, controllerIdOpt[index], nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index], stakingLedgerOpts[index], exposureMeta[index], claimedRewardsEras[index], exposureEraStakers[index])
          )
        )
      )
    )
  );
}

/**
 * @name query
 * @param { Uint8Array | string } accountId The stash account to query.
 * @param { StakingQueryFlags } flags Flags to customize the query.
 * @param { u32 } page (Optional) pagination parameter.
 * @description Retrieves staking details for a given stash account.
 * @example
 * ```javascript
 * const stakingInfo = await api.derive.staking.query(
 *   ALICE,
 *   {}
 * );
 * ```
 */
export const query = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, flags: StakingQueryFlags, page?: u32) =>
    api.derive.staking.queryMulti([accountId], flags, page)
);

/**
 * @name queryMulti
 * @param { (Uint8Array | string)[] } accountIds List of stash accounts to query.
 * @param { StakingQueryFlags } flags Flags to customize the query.
 * @param { u32 } page (Optional) pagination parameter.
 * @description Retrieves staking details for multiple stash accounts.
 * @example
 * ```javascript
 * const stakingInfos = await api.derive.staking.queryMulti([stashId1, stashId2], {});
 * ```
 */
export function queryMulti (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags, page?: u32 | AnyNumber) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags, page?: u32 | AnyNumber): Observable<DeriveStakingQuery[]> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
        const stashIds = accountIds.map((a) => api.registry.createType('AccountId', a));
        const p = page || 0;

        return stashIds.length
          ? getBatch(api, activeEra, stashIds, flags, p)
          : of([]);
      })
    )
  );
}
