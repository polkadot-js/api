// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { IKeyringPair } from '../../types';

import { u8aToHex } from '@polkadot/util';

import Base from '../../codec/Base';
import U8a from '../../codec/U8a';
import NonceCompact from '../../type/NonceCompact';
import BalanceCompact from '../BalanceCompact';
import Hash from '../Hash';
import SignaturePayloadV1, { SignaturePayloadValueV1 } from './v1/SignaturePayload';
import SignaturePayloadV2, { SignaturePayloadValueV2 } from './v2/SignaturePayload';
import ExtrinsicEra from './ExtrinsicEra';
import { DEFAULT_VERSION } from './constants';

interface SignaturePayloadOptions {
  version?: number;
}

/**
 * @name SignaturePayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class SignaturePayload extends Base<SignaturePayloadV1 | SignaturePayloadV2> {
  public constructor (value: SignaturePayloadValueV1 | SignaturePayloadValueV2 | Uint8Array | string | undefined, { version }: SignaturePayloadOptions = {}) {
    super(
      SignaturePayload.decodeSignaturePayload(value, version)
    );
  }

  public static decodeSignaturePayload (value: SignaturePayload | SignaturePayloadValueV1 | SignaturePayloadValueV2 | Uint8Array | string | undefined, version: number = DEFAULT_VERSION): SignaturePayloadV1 | SignaturePayloadV2 {
    if (value instanceof SignaturePayload) {
      return value.raw;
    }

    switch (version) {
      case 1: return new SignaturePayloadV1(value as Uint8Array);
      case 2: return new SignaturePayloadV2(value as Uint8Array);
      default: throw new Error(`Unsupported extrinsic version ${version}`);
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
   * @description The [[BalanceCompact]]
   */
  public get tip (): BalanceCompact {
    return (this.raw as SignaturePayloadV2).tip || new BalanceCompact(0);
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
  public sign (signerPair: IKeyringPair): { signature: string } {
    const signature = this.raw.sign(signerPair);

    // This is extensible, so we could quite readily extend to send back extra
    // information, such as for instance the payload, i.e. `payload: this.toHex()`
    // For the case here we sign via the extrinsic, we ignore the return, so generally
    // thisis applicable for external signing
    return {
      signature: u8aToHex(signature)
    };
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
