// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types/types';
import type { DecoratedMeta } from './types';

import { assert } from '@polkadot/util';

import { Metadata } from '../Metadata';
import { constantsFromMeta } from './consts/fromMetadata';
import { extrinsicsFromMeta } from './extrinsics/fromMetadata';
import { storageFromMeta } from './storage/fromMetadata';

/**
 * Expands the metadata by decoration into consts, query and tx sections
 */
export function expandMetadata (registry: Registry, value: Metadata): DecoratedMeta {
  assert(value instanceof Metadata, 'You need to pass a valid Metadata instance to expandMetadata');

  return {
    consts: constantsFromMeta(registry, value),
    query: storageFromMeta(registry, value),
    tx: extrinsicsFromMeta(registry, value)
  };
}

export { constantsFromMeta, extrinsicsFromMeta, storageFromMeta };
