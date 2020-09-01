// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ConstantCodec } from '@polkadot/metadata/Decorated/types';
// import { Hash } from '@polkadot/types/interfaces';

import { Codec } from '@polkadot/types/types';

import { ApiTypes } from './base';
// import { ApiTypes, PromiseOrObs } from './base';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AugmentedConsts<ApiType extends ApiTypes> { }

export type AugmentedConst<ApiType extends ApiTypes, T extends Codec> = T & ConstEntryBase<ApiType, T>

export interface ConstEntryBase<ApiType extends ApiTypes, T extends Codec> extends ConstantCodec {
  // at: (hash: Hash | Uint8Array | string) => PromiseOrObs<ApiType, T>;
}

export type QueryableConstsEntry<ApiType extends ApiTypes> =
  ApiType extends 'rxjs'
    ? AugmentedConst<'rxjs', Codec>
    : AugmentedConst<'promise', Codec>;

export interface QueryableModuleConsts<ApiType extends ApiTypes> {
  [index: string]: QueryableConstsEntry<ApiType>;
}
