// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo, ReferendumInfoTo239, ReferendumStatus } from '@polkadot/types/interfaces';
import { DerivedReferendum } from '../types';
import { PreImage } from './proposals';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { memo } from '../util';

function isOld (info: ReferendumInfo | ReferendumInfoTo239): info is ReferendumInfoTo239 {
  return !!(info as ReferendumInfoTo239).proposalHash;
}

function getStatus (info: Option<ReferendumInfo | ReferendumInfoTo239>): ReferendumStatus | ReferendumInfoTo239 | null {
  if (info.isNone) {
    return null;
  }

  const unwrapped = info.unwrap();

  if (isOld(unwrapped)) {
    return unwrapped;
  } else if (unwrapped.isOngoing) {
    return unwrapped.asOngoing;
  }

  // done, we don't include it here... only currently active
  return null;
}

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

export function retrieveInfo (api: ApiInterfaceRx, index: BN | number, info: Option<ReferendumInfo | ReferendumInfoTo239>): Observable<DerivedReferendum | null> {
  const status = getStatus(info);

  return status
    ? api.query.democracy.preimages(status.proposalHash).pipe(
      map((preimage?: PreImage): DerivedReferendum | null =>
        constructInfo(api, index, status, preimage)
      )
    )
    : of(null);
}

export function referendumInfo (api: ApiInterfaceRx): (index: BN | number) => Observable<DerivedReferendum | null> {
  return memo((index: BN | number): Observable<DerivedReferendum | null> =>
    api.query.democracy.referendumInfoOf<Option<ReferendumInfo | ReferendumInfoTo239>>(index).pipe(
      switchMap((info): Observable<DerivedReferendum | null> =>
        retrieveInfo(api, index, info)
      )
    )
  );
}
