// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types-codec/types';
import type { DecoratedMeta } from './types';

import { Metadata } from '../Metadata';
import { decorateConstants } from './constants';
import { decorateErrors } from './errors';
import { decorateEvents, filterEventsSome } from './events';
import { decorateExtrinsics, filterCallsSome } from './extrinsics';
import { decorateStorage } from './storage';

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
    consts: decorateConstants(registry, latest, version),
    errors: decorateErrors(registry, latest, version),
    events: decorateEvents(registry, latest, version),
    query: decorateStorage(registry, latest, version),
    registry,
    tx: decorateExtrinsics(registry, latest, version)
  };
}

export { decorateConstants, decorateErrors, decorateEvents, decorateExtrinsics, decorateStorage, filterCallsSome, filterEventsSome };
