// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, Balance, BlockNumber, Call, Hash, PreimageStatus } from '@polkadot/types/interfaces';
import type { FrameSupportPreimagesBounded, PalletPreimageRequestStatus } from '@polkadot/types/lookup';
import type { Bytes, Option } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { DeriveApi, DeriveProposalImage } from '../types';

import { map, of, switchMap } from 'rxjs';

import { BN_ZERO, isFunction } from '@polkadot/util';

import { firstMemo, memo } from '../util';
import { getImageHashBounded } from './util';

type PreimageInfo = [Bytes, AccountId, Balance, BlockNumber];
type OldPreimage = ITuple<PreimageInfo>;

function isDemocracyPreimage (api: DeriveApi, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): imageOpt is Option<PreimageStatus> {
  return !!imageOpt && !api.query.democracy.dispatchQueue;
}

function constructProposal (api: DeriveApi, [bytes, proposer, balance, at]: PreimageInfo): DeriveProposalImage {
  let proposal: Call | undefined;

  try {
    proposal = api.registry.createType('Call', bytes.toU8a(true));
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

function parseImage (api: DeriveApi, [proposalHash, status, bytes]: [HexString, PalletPreimageRequestStatus | null, Bytes | null]): DeriveProposalImage | undefined {
  if (!status) {
    return undefined;
  }

  const [proposer, balance] = status.isUnrequested
    ? status.asUnrequested.deposit
    : status.asRequested.deposit.unwrapOrDefault();
  let proposal: Call | undefined;

  if (bytes) {
    try {
      proposal = api.registry.createType('Call', bytes.toU8a(true));
    } catch (error) {
      console.error(error);
    }
  }

  return { at: BN_ZERO, balance, proposal, proposalHash, proposer };
}

function getDemocracyImages (api: DeriveApi, bounded: (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]): Observable<(DeriveProposalImage | undefined)[]> {
  const hashes = bounded.map((b) => getImageHashBounded(b));

  return api.query.democracy.preimages.multi<Option<PreimageStatus>>(hashes).pipe(
    map((images): (DeriveProposalImage | undefined)[] =>
      images.map((imageOpt) => parseDemocracy(api, imageOpt))
    )
  );
}

function getImages (api: DeriveApi, bounded: (FrameSupportPreimagesBounded | Uint8Array | string)[]): Observable<(DeriveProposalImage | undefined)[]> {
  const hashes = bounded.map((b) => getImageHashBounded(b));
  const bytesType = api.registry.lookup.getTypeDef(api.query.preimage.preimageFor.creator.meta.type.asMap.key).type;

  return api.query.preimage.statusFor.multi(hashes).pipe(
    switchMap((optStatus) => {
      const statuses = optStatus.map((o) => o.unwrapOr(null));
      const keys = statuses
        .map((s, i) =>
          s
            ? bytesType === 'H256'
              // first generation
              ? hashes[i]
              // current generation (H256,u32)
              : s.isRequested
                ? [hashes[i], s.asRequested.len.unwrapOr(0)]
                : [hashes[i], s.asUnrequested.len]
            : null
        )
        .filter((p) => !!p);

      return api.query.preimage.preimageFor.multi(keys).pipe(
        map((optBytes) => {
          let ptr = -1;

          return statuses
            .map((s, i): [HexString, PalletPreimageRequestStatus | null, Bytes | null] =>
              s
                ? [hashes[i], s, optBytes[++ptr].unwrapOr(null)]
                : [hashes[i], null, null]
            )
            .map((v) => parseImage(api, v));
        })
      );
    })
  );
}

export function preimages (instanceId: string, api: DeriveApi): (hashes: (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]) => Observable<(DeriveProposalImage | undefined)[]> {
  return memo(instanceId, (hashes: (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]): Observable<(DeriveProposalImage | undefined)[]> =>
    hashes.length
      ? isFunction(api.query.democracy.preimages)
        ? getDemocracyImages(api, hashes)
        : isFunction(api.query.preimage.preimageFor)
          ? getImages(api, hashes)
          : of([])
      : of([])
  );
}

export const preimage = firstMemo(
  (api: DeriveApi, hash: Hash | Uint8Array | string | FrameSupportPreimagesBounded) =>
    api.derive.democracy.preimages([hash])
);
