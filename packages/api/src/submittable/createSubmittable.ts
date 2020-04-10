// Copyright 2017-2020 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Call, Extrinsic } from '@polkadot/types/interfaces';
import { Constructor } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes } from '../types';
import { SubmittableExtrinsic } from './types';

import ApiBase from '../base';
import createClass from './createClass';

type Creator<ApiType extends ApiTypes> = (extrinsic: Call | Uint8Array | string) => SubmittableExtrinsic<ApiType>;

let Submittable: Constructor<SubmittableExtrinsic<any>>;

export default function createSubmittable<ApiType extends ApiTypes> (apiType: ApiTypes, api: ApiInterfaceRx, decorateMethod: ApiBase<ApiType>['_decorateMethod']): Creator<ApiType> {
  return (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType> => {
    // This is not great, but basically what we do here is to only require the
    // class right at the point it is actually needed - delaying initialization
    if (!Submittable) {
      Submittable = createClass<ApiType>({ api, apiType, decorateMethod });
    }

    return new Submittable(api.registry, extrinsic);
  };
}
