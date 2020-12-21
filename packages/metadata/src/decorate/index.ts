// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@polkadot/types/types';
import type { DecoratedMeta } from './types';

import { assert } from '@polkadot/util';

import { Metadata } from '../Metadata';
import { decorateConstants } from './constants';
import { decorateExtrinsics } from './extrinsics';
import { decorateStorage } from './storage';

/**
 * Expands the metadata by decoration int consts, query and tx sections
 */
export function expandMetadata (registry: Registry, value: Metadata): DecoratedMeta {
  assert(value instanceof Metadata, 'You need to pass a valid Metadata instance to Decorated');

  return {
    consts: decorateConstants(registry, value),
    query: decorateStorage(registry, value),
    tx: decorateExtrinsics(registry, value)
  };
}

export { decorateConstants, decorateExtrinsics, decorateStorage };
