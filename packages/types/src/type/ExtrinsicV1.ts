// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, ArgsDef, Codec, IExtrinsic, IKeyringPair, SignatureOptions } from '../types';

import { u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import { FunctionMetadata } from '../Metadata/v6/Calls';
import Method from '../primitive/Method';
import Address from '../primitive/Address';
import Hash from '../primitive/Hash';
import ExtrinsicSignature from './ExtrinsicSignature';

export type ExtrinsicValueV1 = {
  method?: Method
  signature?: ExtrinsicSignature
};

/**
 * @name ExtrinsicV1
 * @description
 * The first generation of compact extrinsics
 */
export default class ExtrinsicV1 extends Struct implements IExtrinsic {
  public constructor (value?: Uint8Array | ExtrinsicValueV1) {
    super({
      signature: ExtrinsicSignature,
      method: Method
    }, value);
  }

  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Method]]
   */
  public get args (): Array<Codec> {
    return this.method.args;
  }

  /**
   * @description Thge argument defintions, compatible with [[Method]]
   */
  public get argsDef (): ArgsDef {
    return this.method.argsDef;
  }

  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Method
   */
  public get callIndex (): Uint8Array {
    return this.method.callIndex;
  }

  /**
   * @description The actual data for the Method
   */
  public get data (): Uint8Array {
    return this.method.data;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    const length = this.length;

    return length + Compact.encodeU8a(length).length;
  }

  /**
   * @description Convernience function, encodes the extrinsic and returns the actual hash
   */
  public get hash (): Hash {
    return new Hash(
      blake2AsU8a(this.toU8a(), 256)
    );
  }

  /**
   * @description `true` is method has `Origin` argument (compatibility with [[Method]])
   */
  public get hasOrigin (): boolean {
    return this.method.hasOrigin;
  }

  /**
   * @description `true` id the extrinsic is signed
   */
  public get isSigned (): boolean {
    return this.signature.isSigned;
  }

  /**
   * @description The length of the encoded value
   */
  public get length (): number {
    return this.toU8a(true).length;
  }

  /**
   * @description The [[FunctionMetadata]] that describes the extrinsic
   */
  public get meta (): FunctionMetadata {
    return this.method.meta;
  }

  /**
   * @description The [[Method]] this extrinsic wraps
   */
  public get method (): Method {
    return this.get('method') as Method;
  }

  /**
   * @description The [[ExtrinsicSignature]]
   */
  public get signature (): ExtrinsicSignature {
    return this.get('signature') as ExtrinsicSignature;
  }

  /**
   * @description Add an [[ExtrinsicSignature]] to the extrinsic (already generated)
   */
  addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, nonce: AnyNumber, era?: Uint8Array): ExtrinsicV1 {
    this.signature.addSignature(signer, signature, nonce, era);

    return this;
  }

  /**
   * @description Sign the extrinsic with a specific keypair
   */
  sign (account: IKeyringPair, options: SignatureOptions): ExtrinsicV1 {
    this.signature.sign(this.method, account, options);

    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    return this.toHex();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    // We are treating this in the same way we do a primitive, this is known
    return 'Extrinsic';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const encoded = super.toU8a();

    return isBare
      ? encoded
      : Compact.addLengthPrefix(encoded);
  }
}
