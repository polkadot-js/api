// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec } from '@polkadot/types/types';
import { ModuleConstantMetadata as MetaV6 } from '@polkadot/types/Metadata/v6/Constants';

export interface ConstantCodec extends Codec {
  meta: MetaV6;
}

export type ModuleConstants = Record<string, Codec>;

export type Constants = Record<string, ModuleConstants>;
