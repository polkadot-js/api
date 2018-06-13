// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcRequest, JsonRpcResponse } from '../../types';

export type RpcCoder = {
  decodeResponse: (response: JsonRpcResponse) => mixed,
  encodeObject: (method: string, params: Array<mixed>) => JsonRpcRequest,
  encodeJson: (method: string, params: Array<mixed>) => string,
  getId: () => number
};

export type RpcCoderState = {
  id: number
};
