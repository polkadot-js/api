// Copyright 2017-2020 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InterfaceTypes } from '@polkadot/types/types';
import { RpcParam } from '../types';

interface RpcParamOptions {
  isOptional?: boolean;
}

/** @internal */
export default function createParam (name: string, type: keyof InterfaceTypes, { isOptional = false }: RpcParamOptions = { isOptional: false }): RpcParam {
  return {
    isOptional,
    name,
    type
  };
}
