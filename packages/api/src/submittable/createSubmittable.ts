// Copyright 2017-2024 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Call, Extrinsic } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types-codec/types';
import type { ApiBase } from '../base/index.js';
import type { ApiInterfaceRx, ApiTypes } from '../types/index.js';
import type { SubmittableExtrinsic } from './types.js';

import { createClass } from './createClass.js';

type Creator<ApiType extends ApiTypes> = (extrinsic: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

export function createSubmittable<ApiType extends ApiTypes> (apiType: ApiTypes, api: ApiInterfaceRx, decorateMethod: ApiBase<ApiType>['_decorateMethod'], registry?: Registry, blockHash?: Uint8Array): Creator<ApiType> {
  const Submittable = createClass<ApiType>({ api, apiType, blockHash, decorateMethod });

  return (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType> =>
    new Submittable(registry || api.registry, extrinsic);
}
