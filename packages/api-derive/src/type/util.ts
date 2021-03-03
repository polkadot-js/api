// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Digest } from '@polkadot/types/interfaces';

export function extractAuthor (digest: Digest, sessionValidators: AccountId[] = []): AccountId | undefined {
  const [citem] = digest.logs.filter(({ type }) => type === 'Consensus');

  if (citem) {
    const [engine, data] = citem.asConsensus;

    return engine.extractAuthor(data, sessionValidators);
  } else {
    const [pitem] = digest.logs.filter(({ type }) => type === 'PreRuntime');

    if (pitem) {
      const [engine, data] = pitem.asPreRuntime;

      return engine.extractAuthor(data, sessionValidators);
    }
  }

  return undefined;
}
