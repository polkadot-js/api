// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import { Hash } from '@polkadot/types/interfaces';
import { ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

import { ApiTypes } from './base';
// import { ApiTypes, PromiseOrObs } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
export interface AugmentedConsts<ApiType extends ApiTypes> { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface AugmentedConst<ApiType extends ApiTypes> {
  // at: (hash: Hash | Uint8Array | string) => PromiseOrObs<ApiType, T>;
  meta: ModuleConstantMetadataLatest;
}

export interface QueryableModuleConsts {
  [key: string]: Codec;
}
