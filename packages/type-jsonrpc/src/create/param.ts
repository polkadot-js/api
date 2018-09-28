// Copyright 2017-2018 @polkadot/jsonrpc authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CodecTypes } from '@polkadot/api-codec/types';
import { Param } from '../types';

type ParamOptions = {
  isOptional?: boolean
};

export default function createParam (name: string, type: CodecTypes, { isOptional = false }: ParamOptions = { isOptional: false }): Param {
  return {
    isOptional,
    name,
    type
  };
}
