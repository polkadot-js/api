// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import AbstractInt, { DEFAULT_UINT_BITS, UIntBitLength } from './utils/AbstractInt';

/**
 * @name Int
 * @description
 * A generic signed integer codec. For Substrate all numbers are LE encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */
export default class Int extends AbstractInt {
  constructor (
    value: AnyNumber = 0,
    bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson: boolean = true) {
    super(
      true,
      value,
      bitLength,
      isHexJson
    );
  }
}
