// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@polkadot/types-codec';
import type { Codec } from '../types';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  pallets: Vec<Modules>;
}
