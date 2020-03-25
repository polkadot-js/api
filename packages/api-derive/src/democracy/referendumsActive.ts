// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ReferendumIndex, ReferendumInfo, ReferendumInfoTo239, ReferendumStatus } from '@polkadot/types/interfaces';
import { DerivedReferendum } from '../types';

import BN from 'bn.js';
import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';
import { PreImage } from './proposals';
import { getStatus } from './util';

function constructInfo (api: ApiInterfaceRx, index: BN | number, status: ReferendumStatus | ReferendumInfoTo239, _preimage?: PreImage): DerivedReferendum | null {
  const preImage = _preimage?.isSome
    ? _preimage.unwrap()
    : null;

  return {
    index: api.registry.createType('PropIndex', index),
    hash: status.proposalHash,
    proposal: preImage
      ? api.registry.createType('Proposal', preImage[0].toU8a(true))
      : undefined,
    preimage: preImage
      ? {
        at: preImage[3],
        balance: preImage[2],
        proposer: preImage[1]
      }
      : undefined,
    status
  };
}

function retrieveInfo (api: ApiInterfaceRx, index: BN | number, info: Option<ReferendumInfo | ReferendumInfoTo239>): Observable<DerivedReferendum | null> {
  const status = getStatus(info);

  return status
    ? api.query.democracy.preimages(status.proposalHash).pipe(
      map((preimage?: PreImage): DerivedReferendum | null =>
        constructInfo(api, index, status, preimage)
      )
    )
    : of(null);
}

function referendumInfos (api: ApiInterfaceRx, ids: BN[]): Observable<DerivedReferendum[]> {
  return api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids).pipe(
    switchMap((infos): Observable<(DerivedReferendum | null)[]> =>
      combineLatest(
        ids.map((id, index): Observable<DerivedReferendum | null> =>
          retrieveInfo(api, id, infos[index])
        )
      )
    ),
    map((infos) =>
      infos.filter((referendum): referendum is DerivedReferendum => !!referendum)
    )
  );
}

function retrieveDerived (api: ApiInterfaceRx, earliest: ReferendumIndex, referendumCount: ReferendumIndex): Observable<DerivedReferendum[]> {
  const indexes = [...Array(referendumCount.sub(earliest).toNumber())].map((_, i): BN => earliest.addn(i));

  return referendumInfos(api, indexes);
}

export function referendumsActive (api: ApiInterfaceRx): () => Observable<DerivedReferendum[]> {
  return memo((): Observable<DerivedReferendum[]> =>
    api.query.democracy?.lowestUnbaked
      ? api.queryMulti<[ReferendumIndex, ReferendumIndex]>([
        api.query.democracy.lowestUnbaked,
        api.query.democracy.referendumCount
      ]).pipe(
        switchMap(([earliest, referendumCount]) =>
          referendumCount.gt(earliest)
            ? retrieveDerived(api, earliest, referendumCount)
            : of([])
        )
      )
      : of([])
  );
}
