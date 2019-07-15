// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EventRecord, SignedBlock, U8a } from '@polkadot/types';

import l from './logging';

export default function filterEvents (extHash: U8a, { block: { extrinsics, header } }: SignedBlock, allEvents: EventRecord[]): EventRecord[] | undefined {
  // extrinsics to hashes
  const myHash = extHash.toHex();
  const allHashes = extrinsics.map((ext): string => ext.hash.toHex());

  // find the index of our extrinsic in the block
  const index = allHashes.indexOf(myHash);

  // if we do get the block after finalized, it _should_ be there
  if (index === -1) {
    l.warn(`block ${header.hash}: Unable to find extrinsic ${myHash} inside ${allHashes}`);
    return;
  }

  return allEvents.filter(({ phase }): boolean =>
    // only ApplyExtrinsic has the extrinsic index
    phase.isApplyExtrinsic && phase.asApplyExtrinsic.eqn(index)
  );
}
