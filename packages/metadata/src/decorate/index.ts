// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Registry } from '@polkadot/types/types';
import { DecoratedMeta } from './types';

import { assert } from '@polkadot/util';

import Metadata from '..';
import constantsFromMeta from './consts/fromMetadata';
import extrinsicsFromMeta from './extrinsics/fromMetadata';
import storageFromMeta from './storage/fromMetadata';

/**
 * Expands the metadata by decoration int consts, query and tx sections
 */
export default function expandMetadata (registry: Registry, value: Metadata): DecoratedMeta {
  assert(value instanceof Metadata, 'You need to pass a valid Metadata instance to Decorated');

  return {
    consts: constantsFromMeta(registry, value),
    query: storageFromMeta(registry, value),
    tx: extrinsicsFromMeta(registry, value)
  };
}

export { constantsFromMeta, extrinsicsFromMeta, storageFromMeta };
