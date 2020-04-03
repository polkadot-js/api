// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, Hash, ReferendumIndex, Scheduled } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveDispatch, DeriveProposalImage } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec, u64 } from '@polkadot/types';
import { stringToHex } from '@polkadot/util';

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

function schedulerEntries (api: ApiInterfaceRx): Observable<[BlockNumber[], Option<Scheduled>[][]]> {
  // We don't get entries, but rather we get the keys (triggered via finished referendums) and
  // the subscribe to those keys - this means we pickup when the schedulers actually executes
  // at a block, the entry for that block will become empty
  return api.derive.democracy.referendumsFinished().pipe(
    switchMap(() =>
      api.query.scheduler.agenda.keys()
    ),
    switchMap((keys) => {
      const blockNumbers = keys.map((key) => key.args[0] as BlockNumber);

      return combineLatest([
        of(blockNumbers),
        api.query.scheduler.agenda.multi<Vec<Option<Scheduled>>>(blockNumbers)
      ]);
    })
  );
}

function queryScheduler (api: ApiInterfaceRx): Observable<DeriveDispatch[]> {
  return schedulerEntries(api).pipe(
    switchMap(([blockNumbers, agendas]): Observable<[SchedulerInfo[], (DeriveProposalImage | undefined)[]]> => {
      const result: SchedulerInfo[] = [];

      blockNumbers.forEach((at, index): void => {
        agendas[index].filter((optScheduled) => optScheduled.isSome).forEach((optScheduled): void => {
          const scheduled = optScheduled.unwrap();

          if (scheduled.maybeId.isSome) {
            const id = scheduled.maybeId.unwrap().toHex();

            if (id.startsWith(DEMOCRACY_ID)) {
              const [, index] = api.registry.createType('(u64, ReferendumIndex)' as any, id) as ITuple<[u64, ReferendumIndex]>;
              const imageHash = scheduled.call.args[0] as Hash;

              result.push({ at, imageHash, index });
            }
          }
        });
      });

      return combineLatest([
        of(result),
        api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash))
      ]);
    }),
    map(([infos, images]): DeriveDispatch[] =>
      infos.map((info, index) => ({ ...info, image: images[index] }))
    )
  );
}

export function dispatchQueue (api: ApiInterfaceRx): () => Observable<DeriveDispatch[]> {
  return memo((): Observable<DeriveDispatch[]> =>
    api.query.scheduler?.agenda
      ? queryScheduler(api)
      : api.query.democracy.dispatchQueue
        ? queryQueue(api)
        : of([])
  );
}
