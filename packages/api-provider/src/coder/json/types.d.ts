// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { JsonRpcRequest, JsonRpcResponse } from '../../types';

export type RpcCoder = {
  decodeResponse: (response: JsonRpcResponse) => any,
  encodeObject: (method: string, params: Array<any>) => JsonRpcRequest,
  encodeJson: (method: string, params: Array<any>) => string,
  getId: () => number
};

export type RpcCoderState = {
  id: number
};
