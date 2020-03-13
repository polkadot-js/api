// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { DerivedReferendum } from '../types';
import { PreImage } from './proposals';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { memo } from '../util';

function constructInfo (api: ApiInterfaceRx, index: BN | number, _info: Option<ReferendumInfo>, _preimage?: PreImage): DerivedReferendum | null {
  const preImage = _preimage?.isSome
    ? _preimage.unwrap()
    : null;
  const info = _info.unwrapOr(null);

  if (!info) {
    return null;
  }

  return {
    index: api.registry.createType('PropIndex', index),
    info,
    hash: info.proposalHash,
    proposal: preImage
      ? api.registry.createType('Proposal', preImage[0].toU8a(true))
      : undefined,
    preimage: preImage
      ? {
        at: preImage[3],
        balance: preImage[2],
        proposer: preImage[1]
      }
      : undefined
  };
}

export function retrieveInfo (api: ApiInterfaceRx, index: BN | number, info: Option<ReferendumInfo>): Observable<DerivedReferendum | null> {
  return ((
    info?.isSome
      ? api.query.democracy.preimages(info.unwrap().proposalHash)
      : of(undefined)
  ) as Observable<PreImage | undefined>).pipe(
    map((preimage?: PreImage): DerivedReferendum | null =>
      constructInfo(api, index, info, preimage)
    )
  );
}

export function referendumInfo (api: ApiInterfaceRx): (index: BN | number) => Observable<DerivedReferendum | null> {
  return memo((index: BN | number): Observable<DerivedReferendum | null> =>
    api.query.democracy.referendumInfoOf<Option<ReferendumInfo>>(index).pipe(
      switchMap((info): Observable<DerivedReferendum | null> =>
        retrieveInfo(api, index, info)
      )
    )
  );
}
