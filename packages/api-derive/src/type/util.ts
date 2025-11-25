// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Digest } from '@polkadot/types/interfaces';

export function extractAuthor (digest: Digest, sessionValidators: AccountId[]): AccountId | undefined {
  const [citem] = digest.logs.filter((e) => e.isConsensus);
  const preRuntimeItems = digest.logs.filter((e) => e.isPreRuntime);
  const [sitem] = digest.logs.filter((e) => e.isSeal);
  let accountId: AccountId | undefined;

  try {
    // This is critical to be first for BABE (before Consensus)
    // If not first, we end up dropping the author at session-end
    // Iterate through ALL preRuntime logs to find a recognized engine
    // (parachains may have multiple preRuntime logs, e.g., CMLS + aura)
    for (const pitem of preRuntimeItems) {
      const [engine, data] = pitem.asPreRuntime;

      accountId = engine.extractAuthor(data, sessionValidators);

      // Stop at first recognized engine that returns an author
      if (accountId) {
        return accountId;
      }
    }

    if (!accountId && citem) {
      const [engine, data] = citem.asConsensus;

      accountId = engine.extractAuthor(data, sessionValidators);
    }

    // SEAL, still used in e.g. Kulupu for pow
    if (!accountId && sitem) {
      const [engine, data] = sitem.asSeal;

      accountId = engine.extractAuthor(data, sessionValidators);
    }
  } catch {
    // ignore
  }

  return accountId;
}
