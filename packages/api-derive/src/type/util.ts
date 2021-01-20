// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Digest } from '@polkadot/types/interfaces';

export function extractAuthor (digest: Digest, sessionValidators: AccountId[] = []): AccountId | undefined {
  let author;
  const citems = digest.logs.filter(({ type }) => type === 'Consensus');

  if (citems.length > 0) {
    citems.forEach((citem) => {
      // extract author from the consensus (substrate 1.0, digest)
      const [, data] = citem.asConsensus;

      if (data.length === 20) {
        // This is used by Moonbeam with an h160 address for the author
        author = data.toString();
      }
    });
  } else {
    // Aura and Babe use PreRuntime digest now
    const [pitem] = digest.logs.filter(({ type }) => type === 'PreRuntime');

    if (pitem) {
      const [engine, data] = pitem.asPreRuntime;

      author = engine.extractAuthor(data, sessionValidators);
    }
  }

  return author;
}
