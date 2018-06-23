// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RpcCoderState } from './types';

import encodeObject from './encodeObject';

export default function encodeJson (self: RpcCoderState, method: string, params: Array<any>): string {
  return JSON.stringify(
    encodeObject(self, method, params)
  );
}
