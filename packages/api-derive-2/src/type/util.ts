// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Digest, DigestItem } from '@polkadot/types/interfaces';

function filterType (check: string): (e: DigestItem) => boolean {
  return ({ type }) => type === check;
}

export function extractAuthor (digest: Digest, sessionValidators: AccountId[] = []): AccountId | undefined {
  const [citem] = digest.logs.filter(filterType('Consensus'));
  const [pitem] = digest.logs.filter(filterType('PreRuntime'));
  const [sitem] = digest.logs.filter(filterType('Seal'));

  let accountId: AccountId | undefined;

  // This is critical to be first for BABE (before Consensus)
  // If not first, we end up dropping the author at session-end
  if (pitem) {
    try {
      const [engine, data] = pitem.asPreRuntime;

      accountId = engine.extractAuthor(data, sessionValidators);
    } catch {
      // ignore
    }
  }

  if (!accountId && citem) {
    try {
      const [engine, data] = citem.asConsensus;

      accountId = engine.extractAuthor(data, sessionValidators);
    } catch {
      // ignore
    }
  }

  // SEAL, still used in e.g. Kulupu for pow
  if (!accountId && sitem) {
    try {
      const [engine, data] = sitem.asSeal;

      accountId = engine.extractAuthor(data, sessionValidators);
    } catch {
      // ignore
    }
  }

  return accountId;
}
