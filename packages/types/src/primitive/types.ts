// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { StorageEntryMetadataLatest } from '../interfaces/metadata';
import type { Codec } from '../types';

export interface StorageEntry {
  (arg?: any): Uint8Array;
  iterKey?: (arg?: any) => Uint8Array & Codec;
  keyPrefix: (arg?: any) => Uint8Array;
  meta: StorageEntryMetadataLatest;
  method: string;
  prefix: string;
  section: string;
  toJSON: () => any;
}
