// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SignOptions } from '@polkadot/keyring/types';
import type { ExtrinsicEra } from '../../interfaces/extrinsics';
import type { Balance, Hash, Index } from '../../interfaces/runtime';
import type { ExtrinsicPayloadValue, IKeyringPair, Registry } from '../../types';

import { Compact } from '../../codec/Compact';
import { Enum } from '../../codec/Enum';
import { Struct } from '../../codec/Struct';
import { Bytes } from '../../primitive/Bytes';
import { u32 } from '../../primitive/U32';
import { sign } from '../util';

/**
 * @name GenericExtrinsicPayloadV4
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export class GenericExtrinsicPayloadV4 extends Struct {
  #signOptions: SignOptions;

  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string) {
    super(registry, {
      method: 'Bytes',
      ...registry.getSignedExtensionTypes(),
      ...registry.getSignedExtensionExtra()
    }, value);

    // Do detection for the type of extrinsic, in the case of MultiSignature this is an
    // enum, in the case of AnySignature, this is a Hash only (may be 64 or 65 bytes)
    this.#signOptions = {
      withType: registry.createType('ExtrinsicSignature') instanceof Enum
    };
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
   * @description The genesis [[Hash]] the signature applies to (mortal/immortal)
   */
  public get genesisHash (): Hash {
    return this.get('genesisHash') as Hash;
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
   * @description The specVersion for this signature
   */
  public get specVersion (): u32 {
    return this.get('specVersion') as u32;
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }

  /**
   * @description The transactionVersion for this signature
   */
  public get transactionVersion (): u32 {
    return this.get('transactionVersion') as u32;
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): Uint8Array {
    // NOTE The `toU8a({ method: true })` argument is absolutely critical - we don't want the method (Bytes)
    // to have the length prefix included. This means that the data-as-signed is un-decodable,
    // but is also doesn't need the extra information, only the pure data (and is not decoded)
    // ... The same applies to V1..V3, if we have a V5, carry move this comment to latest
    return sign(this.registry, signerPair, this.toU8a({ method: true }), this.#signOptions);
  }
}
