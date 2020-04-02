// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, Hash, ReferendumIndex } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveDispatch } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Vec } from '@polkadot/types';
// import { stringToU8a } from '@polkadot/util';

import { memo } from '../util';

// const DEMOCRACY_ID = stringToU8a('democrac');

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

function queryScheduler (api: ApiInterfaceRx): Observable<DeriveDispatch[]> {
  return api.query.scheduler.agenda.entries().pipe(
    map((all): DeriveDispatch[] =>
      all.reduce((result: DeriveDispatch[], [key, allScheduled]): DeriveDispatch[] => {
        const at = key.args[0] as BlockNumber;

        allScheduled.forEach((optScheduled): void => {
          if (optScheduled.isSome) {
            const scheduled = optScheduled.unwrap();

            if (scheduled.maybeId.isSome) {
              // TODO check for democracy specifically
              console.error(scheduled.maybeId.unwrap().toHex());

              result.push({
                at,
                imageHash: scheduled.call.hash,
                index: api.registry.createType('ReferendumIndex')
              });
            }
          }
        });

        return result;
      }, [])
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
