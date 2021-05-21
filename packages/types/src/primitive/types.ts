// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Codec } from '../types';

export interface StorageEntry {
  (arg?: unknown): Uint8Array;
  iterKey?: (...args: unknown[]) => Uint8Array & Codec;
  keyPrefix: (...args: unknown[]) => Uint8Array;
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
  toJSON: () => any;
}
