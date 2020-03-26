// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '@polkadot/types/types';

import UInt from '@polkadot/types/codec/UInt';
import { isChildClass } from '@polkadot/util';

/** @internal */
export function isCompactEncodable (Child: Constructor<any>): boolean {
  return isChildClass(UInt, Child);
}
