// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventRecord, Hash, SignedBlock, u32 } from '@polkadot/types/index';

export default function filterEvents (extHash: Hash, { block: { extrinsics } }: SignedBlock, allEvents: Array<EventRecord>): Array<EventRecord> | undefined {
  // find the index of our extrinsic in the block
  const index = extrinsics
    .map((ext) => ext.hash.toHex())
    .indexOf(extHash.toHex());

  // if we do get the block after Finalised, it _should_ be there
  if (index === -1) {
    return;
  }

  return allEvents.filter(({ phase }) =>
    // only ApplyExtrinsic has the extrinsic index
    phase.type === 'ApplyExtrinsic' && (phase.value as u32).eqn(index)
  );
}
