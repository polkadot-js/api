// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import createType from '@polkadot/types/codec/createType';
import { Extrinsic, ExtrinsicIndex } from '@polkadot/types/index';
import { FunctionMetadata } from '@polkadot/types/Metadata';
import { KeyringPair } from '@polkadot/util-keyring/types';
import u8aConcat from '@polkadot/util/u8a/concat';

import Descriptor from './Descriptor';

/**
 * Unchecked mortal extrinsic, as defined here:
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class UncheckedMortalExtrinsic extends Extrinsic {
  protected _descriptor: Descriptor;
  protected _isSigned = false;
  protected _keyring: KeyringPair | null = null;

  constructor (descriptor: Descriptor) {
    super();
    this._descriptor = descriptor;
  }

  static encode () {
    return new Uint8Array();
  }

  get isSigned () {
    return this._isSigned;
  }

  encodeWith (keyring: KeyringPair) {
    this._keyring = keyring;
    this._isSigned = false;
    return this;
  }

  signWith (keyring: KeyringPair) {
    this._keyring = keyring;
    this._isSigned = true;
    return this;
  }

  toU8a () {
    if (!this._keyring) {
      throw new Error('Cannot encode before a keyring pair has been set, please call `signWith` or `encodeWith` first.');
    }
    return u8aConcat(
      this._length.toU8a(),
      this.version()
    );
  }

  version () {
    // 1 byte: version information:
    // - 7 low bits: version identifier (should be 0b0000001).
    // - 1 high bit: signed flag: 1 if this is a transaction (e.g. contains a signature).
    const highBit = this._isSigned ? 0b10000000 : 0;
    const version = 0b01000000;
    console.log('version=', [highBit | version]);
    return new Uint8Array([highBit | version]);
  }
}
