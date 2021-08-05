// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, u64, Vec } from '@polkadot/types';
import type { BlockNumber, Hash, ReferendumIndex, Scheduled } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveDispatch, DeriveProposalImage } from '../types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction, stringToHex } from '@polkadot/util';

import { memo } from '../util';

const DEMOCRACY_ID = stringToHex('democrac');

interface SchedulerInfo {
  at: BlockNumber;
  imageHash: Hash;
  index: ReferendumIndex;
}

function queryQueue (api: ApiInterfaceRx): Observable<DeriveDispatch[]> {
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

function schedulerEntries (api: ApiInterfaceRx): Observable<[BlockNumber[], (Option<Scheduled>[] | null)[]]> {
  // We don't get entries, but rather we get the keys (triggered via finished referendums) and
  // the subscribe to those keys - this means we pickup when the schedulers actually executes
  // at a block, the entry for that block will become empty
  return api.derive.democracy.referendumsFinished().pipe(
    switchMap(() =>
      api.query.scheduler.agenda.keys()
    ),
    switchMap((keys) => {
      const blockNumbers = keys.map(({ args: [blockNumber] }) => blockNumber);

      return blockNumbers.length
        ? combineLatest([
          of(blockNumbers),
          // this should simply be api.query.scheduler.agenda.multi<Vec<Option<Scheduled>>>,
          // however we have had cases on Darwinia where the indices have moved around after an
          // upgrade, which results in invalid on-chain data
          combineLatest(blockNumbers.map((blockNumber) =>
            api.query.scheduler.agenda<Vec<Option<Scheduled>>>(blockNumber).pipe(
              // this does create an issue since it discards all at that block
              catchError(() => of(null))
            )
          ))
        ])
        : of<[BlockNumber[], null[]]>([[], []]);
    })
  );
}

function queryScheduler (api: ApiInterfaceRx): Observable<DeriveDispatch[]> {
  return schedulerEntries(api).pipe(
    switchMap(([blockNumbers, agendas]): Observable<[SchedulerInfo[], (DeriveProposalImage | undefined)[]]> => {
      const result: SchedulerInfo[] = [];

      blockNumbers.forEach((at, index): void => {
        (agendas[index] || [])
          .filter((opt) => opt.isSome)
          .forEach((optScheduled): void => {
            const scheduled = optScheduled.unwrap();

            if (scheduled.maybeId.isSome) {
              const id = scheduled.maybeId.unwrap().toHex();

              if (id.startsWith(DEMOCRACY_ID)) {
                const [, index] = api.registry.createType<ITuple<[u64, ReferendumIndex]>>('(u64, ReferendumIndex)', id);
                const imageHash = scheduled.call.args[0] as Hash;

                result.push({ at, imageHash, index });
              }
            }
          });
      });

      return result.length
        ? combineLatest([
          of(result),
          api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash))
        ])
        : of([[], []]);
    }),
    map(([infos, images]): DeriveDispatch[] =>
      infos.map((info, index) => ({ ...info, image: images[index] }))
    )
  );
}

export function dispatchQueue (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveDispatch[]> {
  return memo(instanceId, (): Observable<DeriveDispatch[]> =>
    isFunction(api.query.scheduler?.agenda)
      ? queryScheduler(api)
      : api.query.democracy.dispatchQueue
        ? queryQueue(api)
        : of([])
  );
}
