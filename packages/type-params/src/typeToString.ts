// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Param$Types } from './types';

export default function typeToString (type: Param$Types): string {
  if (!Array.isArray(type)) {
    return type;
  }

  const text = type.map(typeToString).join(', ');

  return type.length !== 1
    ? `(${text})`
    : `Array<${text}>`;
}
