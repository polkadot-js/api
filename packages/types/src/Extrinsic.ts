// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/util-keyring/types';
import { AnyNumber, AnyU8a } from './types';

import blake2Asu8a from '@polkadot/util-crypto/blake2/asU8a';
import hexToU8a from '@polkadot/util/hex/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';

import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
import Struct from './codec/Struct';
import ExtrinsicSignature from './ExtrinsicSignature';
import Hash from './Hash';
import { FunctionMetadata } from './Metadata';
import Method from './Method';

type ExtrinsicValue = {
  method?: Method
  signature?: ExtrinsicSignature
};

/**
 * Representation of an Extrinsic in the system. It contains the actual call,
 * (optional) signature and encodes with an actual length prefix
 *
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 *
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class Extrinsic extends Struct {
  constructor (value?: ExtrinsicValue) {
    super({
      signature: ExtrinsicSignature,
      method: Method
    }, value);
  }

  // the actual [sectionIndex, methodIndex] as used
  get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  get data (): Uint8Array {
    return this.method.data;
  }

  // convernience, encodes the extrinsic and returns the actual hash
  get hash (): Hash {
    return new Hash(
      blake2Asu8a(this.toU8a(), 256)
    );
  }

  get isSigned (): boolean {
    return this.signature.isSigned;
  }

  get length (): number {
    return this.toU8a(true).length;
  }

  get meta (): FunctionMetadata {
    return this.method.meta;
  }

  get method (): Method {
    return this.raw.method as Method;
  }

  get signature (): ExtrinsicSignature {
    return this.raw.signature as ExtrinsicSignature;
  }

  byteLength (): number {
    const length = this.length;

    return length + Compact.encodeU8a(length, DEFAULT_LENGTH_BITS).length;
  }

  fromJSON (input: any): Extrinsic {
    super.fromU8a(hexToU8a(input));

    return this;
  }

  fromU8a (input: Uint8Array): Extrinsic {
    const [offset, length] = Compact.decodeU8a(input, DEFAULT_LENGTH_BITS);

    super.fromU8a(input.subarray(offset, offset + length.toNumber()));

    return this;
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash: AnyU8a): Extrinsic {
    this.signature.addSignature(this.method, signerPair, nonce, blockHash);

    return this;
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = super.toU8a();

    return isBare
      ? encoded
      : u8aConcat(
        Compact.encodeU8a(encoded.length, DEFAULT_LENGTH_BITS),
        encoded
      );
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.toHex();
  }
}
