// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import * as Types from '../index';
import Base from './Base';

// TODO Here we just cater for single values. We need to add Vectors, Tuples and the
// whole shebang to be compliant... it is a start
export default function createTypeInstance (type: string, value?: any): Base {
  console.error('createTypeInstance', type, value);

  const Type = (Types as any)[type];

  return new Type(value);
}
