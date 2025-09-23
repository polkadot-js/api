// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Hash, MultiLocation } from '@polkadot/types/interfaces';
import type { Bytes } from '@polkadot/types-codec';
import type { Inspect, Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { BlockHash } from '../../interfaces/chain/index.js';
import type { ExtrinsicEra } from '../../interfaces/extrinsics/index.js';
import type { ExtrinsicPayloadValue, ICompact, IKeyringPair, INumber, IOption } from '../../types/index.js';

import { Struct } from '@polkadot/types-codec';
import { objectSpread } from '@polkadot/util';

import { signV5 } from '../util.js';

/**
 * @name GenericExtrinsicPayloadV5
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is
 * variable length based on the contents included
 */
export class GenericExtrinsicPayloadV5 extends Struct {
  constructor (registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | HexString) {
    super(registry, objectSpread(
      { method: 'Bytes' },
      registry.getTransactionExtensionTypes(),
      registry.getTransactionExtensionExtra()
    ), value);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return super.inspect({ method: true });
  }

  /**
   * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): BlockHash {
    return this.getT('blockHash');
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  /**
   * @description The genesis [[BlockHash]] the signature applies to (mortal/immortal)
   */
  public get genesisHash (): BlockHash {
    return this.getT('genesisHash');
  }

  /**
   * @description The [[Bytes]] contained in the payload
   */
  public get method (): Bytes {
    return this.getT('method');
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  /**
   * @description The specVersion for this signature
   */
  public get specVersion (): INumber {
    return this.getT('specVersion');
  }

  /**
   * @description The tip [[Balance]]
   */
  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  /**
   * @description The transactionVersion for this signature
   */
  public get transactionVersion (): INumber {
    return this.getT('transactionVersion');
  }

  /**
   * @description The (optional) asset id for this signature for chains that support transaction fees in assets
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  /**
   * @description The (optional) metadataHash proof for the CheckMetadataHash TransactionExtension
   */
  public get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  /**
   * @description Sign the payload with the keypair
   *
   * [Disabled for ExtrinsicV5]
   */
  public sign (signerPair: IKeyringPair): Uint8Array {
    // NOTE The `toU8a({ method: true })` argument is absolutely critical, we
    // don't want the method (Bytes) to have the length prefix included. This
    // means that the data-as-signed is un-decodable, but is also doesn't need
    // the extra information, only the pure data (and is not decoded) ...
    // The same applies to V1..V5, if we have a V6, carry this comment
    return signV5(this.registry, signerPair, this.toU8a({ method: true }));
  }
}
