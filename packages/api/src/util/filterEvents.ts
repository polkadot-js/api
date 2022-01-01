// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord, ExtrinsicStatus, H256, SignedBlock } from '@polkadot/types/interfaces';

import { l } from './logging';

export function filterEvents (txHash: H256, { block: { extrinsics, header } }: SignedBlock, allEvents: EventRecord[], status: ExtrinsicStatus): EventRecord[] | undefined {
  // extrinsics to hashes
  for (const [index, x] of extrinsics.entries()) {
    if (x.hash.eq(txHash)) {
      return allEvents.filter(({ phase }) =>
        // only ApplyExtrinsic has the extrinsic index
        phase.isApplyExtrinsic && phase.asApplyExtrinsic.eqn(index)
      );
    }
  }

  // if we do get the block after finalized, it _should_ be there
  // only warn on filtering with isInBlock (finalization finalizes after)
  if (status.isInBlock) {
    const allHashes = extrinsics.map((x) => x.hash.toHex());

    l.warn(`block ${header.hash.toHex()}: Unable to find extrinsic ${txHash.toHex()} inside ${allHashes.join(', ')}`);
  }

  return undefined;
}
