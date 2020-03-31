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

import { memo } from '../util';

export function dispatchQueue (api: ApiInterfaceRx): () => Observable<DeriveDispatch[]> {
  return memo((): Observable<DeriveDispatch[]> =>
    api.query.democracy?.dispatchQueue
      ? api.query.democracy.dispatchQueue<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>().pipe(
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
            index,
            image: images[dispatchIndex],
            imageHash
          }))
        )
      )
      : of([])
  );
}
