// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ModulesWithCalls } from '@polkadot/types/types';
import { Constants, Storage } from './types';

import { assert } from '@polkadot/util';

import Metadata from '../Metadata';
import constantsFromMeta from './consts/fromMetadata';
import extrinsicsFromMeta from './extrinsics/fromMetadata';
import storageFromMeta from './storage/fromMetadata';

/**
 * This class represents a decorated wrapper over the [[Metadata]]. The
 * [[Metadata]] type is a Codec type returned by the node, and `Decorated`
 * composes it and populates the `.query`, `.tx` and `.consts` sections.
 */
export default class Decorated {
  public readonly consts: Constants;

  public readonly query: Storage;

  public readonly tx: ModulesWithCalls;

  constructor (value: Metadata) {
    assert(value instanceof Metadata, 'You need to pass a valid Metadata instance to Decorated');

    const latest = value.asLatest;

    // decoration
    this.tx = extrinsicsFromMeta(value.registry, latest);
    this.query = storageFromMeta(value.registry, latest);
    this.consts = constantsFromMeta(value.registry, latest);
  }
}
