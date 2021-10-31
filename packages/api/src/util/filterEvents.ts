// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord, ExtrinsicStatus, H256, SignedBlock } from '@polkadot/types/interfaces';

import { l } from './logging';

export function filterEvents (extHash: H256, { block: { extrinsics, header } }: SignedBlock, allEvents: EventRecord[], status: ExtrinsicStatus): EventRecord[] | undefined {
  // extrinsics to hashes
  const myHash = extHash.toHex();
  const allHashes = extrinsics.map((s) => s.hash.toHex());

  // find the index of our extrinsic in the block
  const index = allHashes.indexOf(myHash);

  // if we do get the block after finalized, it _should_ be there
  if (index === -1) {
    // only warn on filtering with isInBlock (finalization finalizes after)
    if (status.isInBlock) {
      l.warn(`block ${header.hash.toHex()}: Unable to find extrinsic ${myHash} inside ${allHashes.join(', ')}`);
    }

    return;
  }

  // only ApplyExtrinsic has the extrinsic index
  const filterApplied = ({ phase }: EventRecord) =>
    phase.isApplyExtrinsic && phase.asApplyExtrinsic.eqn(index);

  return allEvents.filter(filterApplied);
}
