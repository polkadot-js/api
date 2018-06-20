// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { RpcCoderState } from './types';

import encodeObject from './encodeObject';

export default function encodeJson (self: RpcCoderState, method: string, params: Array<mixed>): string {
  return JSON.stringify(
    encodeObject(self, method, params)
  );
}
