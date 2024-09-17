// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { DecoratedMeta } from './types.js';

import { Metadata } from '../Metadata.js';
import { decorateCalls } from './calls/index.js';
import { decorateConstants } from './constants/index.js';
import { decorateErrors } from './errors/index.js';
import { decorateEvents, filterEventsSome } from './events/index.js';
import { decorateExtrinsics, filterCallsSome } from './extrinsics/index.js';
import { decorateStorage } from './storage/index.js';

/**
 * Expands the metadata by decoration into consts, query and tx sections
 */
export function expandMetadata (registry: Registry, metadata: Metadata): DecoratedMeta {
  if (!(metadata instanceof Metadata)) {
    throw new Error('You need to pass a valid Metadata instance to Decorated');
  }

  const latest = metadata.asLatest;
  const version = metadata.version;

  return {
    calls: decorateCalls(registry, latest, version),
    consts: decorateConstants(registry, latest, version),
    errors: decorateErrors(registry, latest, version),
    events: decorateEvents(registry, latest, version),
    query: decorateStorage(registry, latest, version),
    registry,
    tx: decorateExtrinsics(registry, latest, version)
  };
}

export { decorateConstants, decorateErrors, decorateEvents, decorateExtrinsics, decorateStorage, filterCallsSome, filterEventsSome };
