// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param, Param$Options, Param$Types } from './types';

export default function createParam (name: string, type: Param$Types, { isOptional = false }: Param$Options = { isOptional: false }): Param {
  return {
    isOptional,
    name,
    type
  };
}
