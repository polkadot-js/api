// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, Balance, BlockNumber, Hash, PreimageStatus, Proposal } from '@polkadot/types/interfaces';
import type { Bytes, Option } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { DeriveApi, DeriveProposalImage } from '../types';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { firstMemo, memo } from '../util';

type PreimageInfo = [Bytes, AccountId, Balance, BlockNumber];
type OldPreimage = ITuple<PreimageInfo>;

function isDemocracyPreimage (api: DeriveApi, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): imageOpt is Option<PreimageStatus> {
  return !!imageOpt && !api.query.democracy.dispatchQueue;
}

function constructProposal (api: DeriveApi, [bytes, proposer, balance, at]: PreimageInfo): DeriveProposalImage {
  let proposal: Proposal | undefined;

  try {
    proposal = api.registry.createType('Proposal', bytes.toU8a(true));
  } catch (error) {
    console.error(error);
  }

  return { at, balance, proposal, proposer };
}

function parseDemocracy (api: DeriveApi, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): DeriveProposalImage | undefined {
  if (imageOpt.isNone) {
    return;
  }

  if (isDemocracyPreimage(api, imageOpt)) {
    const status = imageOpt.unwrap();

    if (status.isMissing) {
      return;
    }

    const { data, deposit, provider, since } = status.asAvailable;

    return constructProposal(api, [data, provider, deposit, since]);
  }

  return constructProposal(api, imageOpt.unwrap());
}

function getDemocracyImages (api: DeriveApi, hashes: (Hash | Uint8Array | string)[]): Observable<(DeriveProposalImage | undefined)[]> {
  return api.query.democracy.preimages.multi(hashes).pipe(
    map((images): (DeriveProposalImage | undefined)[] =>
      images.map((imageOpt) => parseDemocracy(api, imageOpt))
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
