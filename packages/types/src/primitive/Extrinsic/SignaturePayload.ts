// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { IKeyringPair } from '../../types';

import Base from '../../codec/Base';
import U8a from '../../codec/U8a';
import Hash from '../Hash';
import NonceCompact from '../../type/NonceCompact';
import SignaturePayloadV1, { SignaturePayloadValueV1 } from './v1/SignaturePayload';
import SignaturePayloadV2, { SignaturePayloadValueV2 } from './v2/SignaturePayload';
import ExtrinsicEra from './ExtrinsicEra';
import { DEFAULT_VERSION } from './constants';

/**
 * @name SignaturePayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class SignaturePayload extends Base<SignaturePayloadV1 | SignaturePayloadV2> {
  public constructor (value: SignaturePayloadValueV1 | SignaturePayloadValueV2 | Uint8Array | string | undefined, extrinsicVersion: number) {
    super(
      SignaturePayload.decodeSignaturePayload(value, extrinsicVersion)
    );
  }

  public static decodeSignaturePayload (value: SignaturePayload | SignaturePayloadValueV1 | SignaturePayloadValueV2 | Uint8Array | string | undefined, extrinsicVersion: number = DEFAULT_VERSION): SignaturePayloadV1 | SignaturePayloadV2 {
    if (value instanceof SignaturePayload) {
      return value.raw;
    }

    switch (extrinsicVersion) {
      case 1: return new SignaturePayloadV1(value as Uint8Array);
      case 2: return new SignaturePayloadV2(value as Uint8Array);
      default: throw new Error(`Unsupported extrinsic version ${extrinsicVersion}`);
    }
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.raw.blockHash;
  }

  /**
   * @description The [[U8a]] contained in the payload
   */
  public get method (): U8a {
    return this.raw.method;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.raw.era;
  }

  /**
   * @description The [[NonceCompact]]
   */
  public get nonce (): NonceCompact {
    return this.raw.nonce;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return this.raw.eq(other);
  }

  /**
   * @description Sign the payload with the keypair
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sign (signerPair: IKeyringPair): Uint8Array {
    return this.raw.sign(signerPair);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): any {
    return this.toHex();
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.toHex();
  }
}
