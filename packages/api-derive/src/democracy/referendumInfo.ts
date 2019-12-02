// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { DeriveReferendum } from '../types';
import { PreImage } from './proposals';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, createType } from '@polkadot/types';

import { memo } from '../util';

function constructInfo (api: ApiInterfaceRx, index: BN | number, _info: Option<ReferendumInfo>, _preimage?: PreImage): DeriveReferendum | null {
  const preImage = _preimage?.isSome
    ? _preimage.unwrap()
    : null;
  const info = (_preimage && _info.unwrapOr(null)) || null;

  if (!info || !preImage) {
    return null;
  }

  return {
    index: createType(api.registry, 'PropIndex', index),
    info,
    hash: info.proposalHash,
    proposal: createType(api.registry, 'Proposal', preImage[0].toU8a(true)),
    preimage: {
      at: preImage[3],
      balance: preImage[2],
      proposer: preImage[1]
    }
  };
}

export function retrieveInfo (api: ApiInterfaceRx, index: BN | number, info: Option<ReferendumInfo>): Observable<DeriveReferendum | null> {
  return ((
    info?.isSome
      ? api.query.democracy.preimages<PreImage>(info.unwrap().proposalHash)
      : of(undefined)
  ) as Observable<PreImage | undefined>).pipe(
    map((preimage?: PreImage): DeriveReferendum | null =>
      constructInfo(api, index, info, preimage)
    )
  );
}

export function referendumInfo (api: ApiInterfaceRx): (index: BN | number) => Observable<DeriveReferendum | null> {
  return memo((index: BN | number): Observable<DeriveReferendum | null> =>
    api.query.democracy.referendumInfoOf<Option<ReferendumInfo>>(index).pipe(
      switchMap((info): Observable<DeriveReferendum | null> =>
        retrieveInfo(api, index, info)
      )
    )
  );
}
