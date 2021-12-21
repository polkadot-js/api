// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Hash } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveProposalImage } from '../types';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { firstMemo, memo } from '../util';
import { parseImage } from './util';

function getDemocracyImages (api: DeriveApi, hashes: (Hash | Uint8Array | string)[]): Observable<(DeriveProposalImage | undefined)[]> {
  return api.query.democracy.preimages.multi(hashes).pipe(
    map((images): (DeriveProposalImage | undefined)[] =>
      images.map((imageOpt) => parseImage(api, imageOpt))
    )
  );
}

export function preimages (instanceId: string, api: DeriveApi): (hashes: (Hash | Uint8Array | string)[]) => Observable<(DeriveProposalImage | undefined)[]> {
  return memo(instanceId, (hashes: (Hash | Uint8Array | string)[]): Observable<(DeriveProposalImage | undefined)[]> =>
    hashes.length
      ? isFunction(api.query.democracy.preimages)
        ? getDemocracyImages(api, hashes)
        : of([])
      : of([])
  );
}

export const preimage = firstMemo(
  (api: DeriveApi, hash: Hash | Uint8Array | string) =>
    api.derive.democracy.preimages([hash])
);
