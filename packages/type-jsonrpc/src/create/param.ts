// Copyright 2017-2019 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CodecTypes } from '@polkadot/types/classes';
import { RpcParam } from '../types';

type RpcParamOptions = {
  isOptional?: boolean
};

export default function createParam (name: string, type: CodecTypes, { isOptional = false }: RpcParamOptions = { isOptional: false }): RpcParam {
  return {
    isOptional,
    name,
    type
  };
}
