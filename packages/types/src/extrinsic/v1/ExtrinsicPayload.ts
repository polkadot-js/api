// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicEra } from '../../interfaces/extrinsics';
import { Hash, Index } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IKeyringPair, Registry } from '../../types';

import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import Bytes from '../../primitive/Bytes';
import { sign } from '../util';

/**
 * @name GenericExtrinsicPayloadV1
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 *
 *   1-8 bytes: The Transaction Compact<Index/Nonce> as provided in the transaction itself.
 *   2+ bytes: The Function Descriptor as provided in the transaction itself.
 *   1/2 bytes: The Transaction Era as provided in the transaction itself.
 *   32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
 */
export default class ExtrinsicPayloadV1 extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(registry, {
      nonce: 'Compact<Index>',
      // eslint-disable-next-line sort-keys
      method: 'Bytes',
      // eslint-disable-next-line sort-keys
      era: 'ExtrinsicEra',
      // eslint-disable-next-line sort-keys
      blockHash: 'Hash'
    }, value);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[Bytes]] contained in the payload
   */
  public get method (): Bytes {
    return this.get('method') as Bytes;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a({ method: true }));
  }
}
