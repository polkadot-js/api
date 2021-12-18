// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, Vec } from '@polkadot/types';
import type { BlockNumber, Hash, ReferendumIndex } from '@polkadot/types/interfaces';
import type { PalletSchedulerScheduledV2 } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveDispatch, DeriveProposalImage } from '../types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction, stringToHex } from '@polkadot/util';

import { memo } from '../util';

const DEMOCRACY_ID = stringToHex('democrac');

interface SchedulerInfo {
  at: BlockNumber;
  imageHash: Hash;
  index: ReferendumIndex;
}

function queryQueue (api: DeriveApi): Observable<DeriveDispatch[]> {
  return api.query.democracy.dispatchQueue<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>().pipe(
    switchMap((dispatches) =>
      combineLatest([
        of(dispatches),
        api.derive.democracy.preimages(
          dispatches.map(([, hash]) => hash))
      ])
    ),
    map(([dispatches, images]) =>
      dispatches.map(([at, imageHash, index], dispatchIndex): DeriveDispatch => ({
        at,
        image: images[dispatchIndex],
        imageHash,
        index
      }))
    )
  );
}

function schedulerEntries (api: DeriveApi): Observable<[BlockNumber[], (Option<PalletSchedulerScheduledV2>[] | null)[]]> {
  // We don't get entries, but rather we get the keys (triggered via finished referendums) and
  // the subscribe to those keys - this means we pickup when the schedulers actually executes
  // at a block, the entry for that block will become empty
  return api.derive.democracy.referendumsFinished().pipe(
    switchMap(() =>
      api.query.scheduler.agenda.keys<[BlockNumber]>()
    ),
    switchMap((keys) => {
      const blockNumbers = keys.map(({ args: [blockNumber] }) => blockNumber);

      return blockNumbers.length
        ? combineLatest([
          of(blockNumbers),
          // this should simply be api.query.scheduler.agenda.multi,
          // however we have had cases on Darwinia where the indices have moved around after an
          // upgrade, which results in invalid on-chain data
          combineLatest(blockNumbers.map((blockNumber) =>
            // this does create an issue since it discards all at that block
            api.query.scheduler.agenda(blockNumber).pipe(catchError(() => of(null)))
          ))
        ])
        : of<[BlockNumber[], null[]]>([[], []]);
    })
  );
}

function queryScheduler (api: DeriveApi): Observable<DeriveDispatch[]> {
  return schedulerEntries(api).pipe(
    switchMap(([blockNumbers, agendas]): Observable<[SchedulerInfo[], (DeriveProposalImage | undefined)[]]> => {
      const result: SchedulerInfo[] = [];

      blockNumbers.forEach((at, index): void => {
        (agendas[index] || []).filter((o) => o.isSome).forEach((o): void => {
          const scheduled = o.unwrap();

          if (scheduled.maybeId.isSome) {
            const id = scheduled.maybeId.unwrap().toHex();

            id.startsWith(DEMOCRACY_ID) && result.push({ at, imageHash: scheduled.call.args[0] as Hash, index: api.registry.createType('(u64, ReferendumIndex)', id)[1] });
          }
        });
      });

      return combineLatest([
        of(result),
        result.length
          ? api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash))
          : of([])
      ]);
    }),
    map(([infos, images]): DeriveDispatch[] =>
      infos.map((info, index) => ({ ...info, image: images[index] }))
    )
  );
}

export function dispatchQueue (instanceId: string, api: DeriveApi): () => Observable<DeriveDispatch[]> {
  return memo(instanceId, (): Observable<DeriveDispatch[]> =>
    isFunction(api.query.scheduler?.agenda)
      ? queryScheduler(api)
      : api.query.democracy.dispatchQueue
        ? queryQueue(api)
        : of([])
  );
}
