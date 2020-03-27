// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ReferendumInfo, ReferendumInfoTo239, ReferendumStatus } from '@polkadot/types/interfaces';
import { DeriveReferendum } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';
import { PreImage } from './proposals';
import { getStatus } from './util';

function constructInfo (api: ApiInterfaceRx, index: BN | number, status: ReferendumStatus | ReferendumInfoTo239, _preimage?: PreImage): DeriveReferendum | null {
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
export function _referendumInfo (api: ApiInterfaceRx): (id: BN, info: Option<ReferendumInfo | ReferendumInfoTo239>) => Observable<DeriveReferendum | null> {
  return memo((id: BN, info: Option<ReferendumInfo | ReferendumInfoTo239>): Observable<DeriveReferendum | null> => {
    const status = getStatus(info);

    return status
      ? api.query.democracy.preimages(status.proposalHash).pipe(
        map((preimage?: PreImage): DeriveReferendum | null =>
          constructInfo(api, id, status, preimage)
        )
      )
      : of(null);
  });
}
