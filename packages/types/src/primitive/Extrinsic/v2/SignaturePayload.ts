// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, AnyU8a, IExtrinsicEra, IKeyringPair, IMethod } from '../../../types';

import Struct from '../../../codec/Struct';
import U8a from '../../../codec/U8a';
import Balance from '../../Balance';
import Hash from '../../Hash';
import Nonce from '../../../type/NonceCompact';
import ExtrinsicEra from '../ExtrinsicEra';
import { extraDefinition } from './ExtrinsicExtra';
import { sign } from '../util';

export interface SignaturePayloadValueV2 {
  blockHash: AnyU8a;
  era: IExtrinsicEra;
  method: AnyU8a | IMethod;
  nonce: AnyNumber;
  tip: AnyNumber;
}

const basePayload = {
  ...extraDefinition,
  blockHash: Hash
};

/**
 * @name SignaturePayloadV2
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 *
 *   1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
 *   2+ bytes: The Function Descriptor as provided in the transaction itself.
 *   1/2 bytes: The Transaction Era as provided in the transaction itself.
 *   32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
 */
export default class SignaturePayloadV2 extends Struct {
  public constructor (value?: SignaturePayloadValueV2 | Uint8Array | string) {
    super({
      method: U8a,
      ...basePayload
    }, value);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[U8a]] contained in the payload
   */
  public get method (): U8a {
    return this.get('method') as U8a;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Nonce]]
   */
  public get nonce (): Nonce {
    return this.get('nonce') as Nonce;
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): Balance {
    return this.get('tip') as Balance;
  }

  /**
   * @description Sign the payload with the keypair
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a());
  }
}
