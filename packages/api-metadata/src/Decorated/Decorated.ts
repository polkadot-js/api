// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ModulesWithCalls } from '@polkadot/types/types';
import { Constants, Storage } from './types';

import Metadata from '../Metadata';
import constantsFromMeta from './consts/fromMetadata';
import extrinsicsFromMeta from './extrinsics/fromMetadata';
import storageFromMeta from './storage/fromMetadata';

export default class Decorated {
  public readonly consts: Constants;
  public readonly metadata: Metadata;
  public readonly query: Storage;
  public readonly tx: ModulesWithCalls;

  public constructor (value?: Uint8Array | string | Metadata) {
    this.metadata = value instanceof Metadata ? value : new Metadata(value);
    this.tx = extrinsicsFromMeta(this.metadata);
    this.query = storageFromMeta(this.metadata);
    this.consts = constantsFromMeta(this.metadata);
  }
}
