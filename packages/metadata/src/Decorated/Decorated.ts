// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModulesWithCalls, Registry } from '@polkadot/types/types';
import { Constants, Storage } from './types';

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

  public readonly metadata: Metadata;

  public readonly registry: Registry;

  public readonly query: Storage;

  public readonly tx: ModulesWithCalls;

  constructor (registry: Registry, value?: Uint8Array | string | Metadata) {
    this.registry = registry;
    this.metadata = value instanceof Metadata ? value : new Metadata(registry, value);

    // decoration
    this.tx = extrinsicsFromMeta(registry, this.metadata);
    this.query = storageFromMeta(registry, this.metadata);
    this.consts = constantsFromMeta(registry, this.metadata);
  }
}
