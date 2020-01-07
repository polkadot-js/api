// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, ExtrinsicEra, Hash, Index } from '../../../interfaces/runtime';
import { ExtrinsicPayloadValue, IKeyringPair, InterfaceTypes, Registry } from '../../../types';

import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import Bytes from '../../../primitive/Bytes';
import { sign } from '../util';

// SignedExtra adds the following fields to the payload
const SignedExtraV2: Record<string, InterfaceTypes> = {
  // system::CheckEra<Runtime>
  blockHash: 'Hash'
  // system::CheckNonce<Runtime>
  // system::CheckWeight<Runtime>
  // balances::TakeFees<Runtime>
};

// the base definition (excluding extras)
export const SignedPayloadBaseV2: Record<string, InterfaceTypes> = {
  method: 'Bytes',
  era: 'ExtrinsicEra',
  nonce: 'Compact<Index>',
  tip: 'Compact<Balance>'
};

// the full definition for the payload
const SignedPayloadDefV2: Record<string, InterfaceTypes> = {
  ...SignedPayloadBaseV2,
  ...SignedExtraV2
};

/**
 * @name ExtrinsicPayloadV2
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class ExtrinsicPayloadV2 extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(registry, SignedPayloadDefV2, value);
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Bytes]] contained in the payload
   */
  public get method (): Bytes {
    return this.get('method') as Bytes;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): Uint8Array {
    return sign(signerPair, this.toU8a({ method: true }));
  }
}
