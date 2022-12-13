// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EventRecord, ExtrinsicStatus, H256, SignedBlock } from '@polkadot/types/interfaces';

import { l } from './logging';

export function filterEvents (txHash: H256, { block: { extrinsics, header } }: SignedBlock, allEvents: EventRecord[], status: ExtrinsicStatus): { events?: EventRecord[], txIndex?: number } {
  // extrinsics to hashes
  for (const [txIndex, x] of extrinsics.entries()) {
    if (x.$hash.eq(txHash)) {
      return {
        events: allEvents.filter(({ phase }) =>
          phase.isApplyExtrinsic &&
          phase.asApplyExtrinsic.eqn(txIndex)
        ),
        txIndex
      };
    }
  }

  // if we do get the block after finalized, it _should_ be there
  // only warn on filtering with isInBlock (finalization finalizes after)
  if (status.isInBlock) {
    const allHashes = extrinsics.map((x) => x.$hash.toHex());

    l.warn(`block ${header.$hash.toHex()}: Unable to find extrinsic ${txHash.toHex()} inside ${allHashes.join(', ')}`);
  }

  return {};
}
