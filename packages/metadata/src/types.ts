// Copyright 2017-2020 @polkadot/metadata authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '@polkadot/types/types';
import type { Vec } from '@polkadot/types/codec';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  modules: Vec<Modules>;
}
