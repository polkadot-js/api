// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Codec } from '../types';

export interface StorageEntryIterator {
  (...args: unknown[]): Uint8Array & Codec;
  meta: StorageEntryMetadataLatest;
}

export interface StorageEntry {
  (...args: unknown[]): Uint8Array;
  iterKey?: StorageEntryIterator;
  keyPrefix: (...args: unknown[]) => Uint8Array;
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
  toJSON: () => any;
}
