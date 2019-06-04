// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a, IKeyringPair } from '../types';

import { blake2AsU8a } from '@polkadot/util-crypto';

import Struct from '../codec/Struct';
import U8a from '../codec/U8a';
import Hash from '../primitive/Hash';
import Method from '../primitive/Method';
import RuntimeVersion from '../rpc/RuntimeVersion';
import ExtrinsicEra from './ExtrinsicEra';
import Nonce from './NonceCompact';

type SignaturePayloadValue = {
  nonce?: AnyNumber,
  method?: Method,
  era?: AnyU8a | ExtrinsicEra
  blockHash?: AnyU8a
};

// a helper function for both types of payloads, Raw and metadata-known
function sign (signerPair: IKeyringPair, u8a: Uint8Array): Uint8Array {
  const encoded = u8a.length > 256
    ? blake2AsU8a(u8a)
    : u8a;

  return signerPair.sign(encoded);
}

/**
 * @name SignaturePayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 *
 *   8 bytes: The Transaction Index/Nonce as provided in the transaction itself.
 *   2+ bytes: The Function Descriptor as provided in the transaction itself.
 *   2 bytes: The Transaction Era as provided in the transaction itself.
 *   32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
 */
export default class SignaturePayload extends Struct {
  protected _signature?: Uint8Array;

  constructor (value?: SignaturePayloadValue | Uint8Array) {
    super({
      nonce: Nonce,
      method: Method,
      era: ExtrinsicEra,
      blockHash: Hash
    }, value);
  }

  /**
   * @description `true` if the payload refers to a valid signature
   */
  get isSigned (): boolean {
    return !!(this._signature && this._signature.length === 64);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[Method]] contained in the payload
   */
  get method (): Method {
    return this.get('method') as Method;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Nonce]]
   */
  get nonce (): Nonce {
    return this.get('nonce') as Nonce;
  }

  /**
   * @description The raw signature as a `Uint8Array`
   */
  get signature (): Uint8Array {
    if (!this.isSigned) {
      throw new Error('Transaction is not signed');
    }

    return this._signature as Uint8Array;
  }

  /**
   * @description Sign the payload with the keypair
   */
  sign (signerPair: IKeyringPair, version?: RuntimeVersion): Uint8Array {
    this._signature = sign(signerPair, this.toU8a());

    return this._signature;
  }
}

/**
 * @name SignaturePayloadRaw
 * @description
 * A version of [[SignaturePayload]] where it does not rely on [[Method]] being initalized with metadata. When constructing, it treats the [[Method]] as a raw stream of bytes, so will always apply the signature over this without any additional checking. Unlike the [[SignaturePayload]], it assumed that you will only construct and sign, thereby providing no insigt into constructed values
 */
export class SignaturePayloadRaw extends Struct {
  constructor (value?: any) {
    super({
      nonce: Nonce,
      method: U8a,
      era: ExtrinsicEra,
      blockHash: Hash
    }, value);
  }

  /**
   * @description Sign the payload with the keypair
   */
  sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a());
  }
}
