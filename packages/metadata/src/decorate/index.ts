// Copyright 2017-2021 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types/types';
import type { DecoratedMeta } from './types';

import { assert } from '@polkadot/util';

import { Metadata } from '../Metadata';
import { decorateConstants } from './constants';
import { decorateErrors } from './errors';
import { decorateEvents } from './events';
import { decorateExtrinsics } from './extrinsics';
import { decorateStorage } from './storage';

/**
 * Expands the metadata by decoration into consts, query and tx sections
 */
export function expandMetadata (registry: Registry, metadata: Metadata): DecoratedMeta {
  assert(metadata instanceof Metadata, 'You need to pass a valid Metadata instance to Decorated');

  const latest = metadata.asLatest;

  return {
    consts: decorateConstants(registry, latest),
    errors: decorateErrors(registry, latest, metadata.version),
    events: decorateEvents(registry, latest, metadata.version),
    query: decorateStorage(registry, latest, metadata.version),
    tx: decorateExtrinsics(registry, latest, metadata.version)
  };
}

export { decorateConstants, decorateErrors, decorateEvents, decorateExtrinsics, decorateStorage };
