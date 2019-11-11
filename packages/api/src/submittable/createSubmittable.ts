// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Call } from '@polkadot/types/interfaces';
import { Constructor } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes } from '../types';
import { SubmittableExtrinsic } from './types';

import ApiBase from '../base';

type Creator<ApiType extends ApiTypes> = (extrinsic: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

let Submittable: Constructor<SubmittableExtrinsic<any>>;

export default function createSubmittable<ApiType extends ApiTypes> (type: ApiTypes, api: ApiInterfaceRx, decorateMethod: ApiBase<ApiType>['decorateMethod']): Creator<ApiType> {
  return (extrinsic: Call | Uint8Array | string): SubmittableExtrinsic<ApiType> => {
    // HACK This is not great, but basically what we do here is to lazily only require the class
    // right at the point it is actually needed - delaying initialization
    if (!Submittable) {
      Submittable = require('./Submittable').default;
    }

    return new Submittable(extrinsic, { api, decorateMethod, type });
  };
}
