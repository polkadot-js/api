// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Constructor } from '@polkadot/types/types';

import UInt from '@polkadot/types/codec/UInt';
import { isChildClass } from '@polkadot/util';

/** @internal */
export function isCompactEncodable (Child: Constructor<any>): boolean {
  return isChildClass(UInt, Child);
}
