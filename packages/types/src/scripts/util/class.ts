// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Constructor } from '../../types';

import UInt from '../../codec/UInt';

// See if a class is child of another class
// FIMXE This could go in util some day
/** @internal */
export function isChildClass (Parent: Constructor<any>, Child: Constructor<any>): boolean {
  // https://stackoverflow.com/questions/30993434/check-if-a-constructor-inherits-another-in-es6/30993664
  // eslint-disable-next-line no-prototype-builtins
  return Parent === Child || Parent.isPrototypeOf(Child);
}

/** @internal */
export function isCompactEncodable (Child: Constructor<any>): boolean {
  return isChildClass(UInt, Child);
}
