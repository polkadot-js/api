// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@polkadot/types-codec';
import type { AnyJson, BareOpts, Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { BlockHash } from '../interfaces/chain/index.js';
import type { ExtrinsicPayloadV5 } from '../interfaces/extrinsics/index.js';
import type { Hash, MultiLocation } from '../interfaces/types.js';
import type { ExtrinsicPayloadValue, ICompact, IKeyringPair, INumber, IOption } from '../types/index.js';
import type { GenericExtrinsicEra } from './ExtrinsicEra.js';
import type { Preamble } from './types.js';

import { AbstractBase } from '@polkadot/types-codec';
import { hexToU8a, isHex, u8aToHex } from '@polkadot/util';

import { DEFAULT_PREAMBLE, LATEST_EXTRINSIC_VERSION } from './constants.js';

interface ExtrinsicPayloadOptions {
  version?: number;
  pramble?: Preamble;
}

// all our known types that can be returned
type ExtrinsicPayloadVx = ExtrinsicPayloadV5;

const VERSIONS = [
  'ExtrinsicPayloadUnknown', // v0 is unknown
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadV4',
  'ExtrinsicPayloadV5'
];

const PREAMBLES = {
  bare: 'ExtrinsicPayloadV5',
  // Not supported yet
  general: 'ExtrinsicPayloadV5',
  signed: 'ExtrinsicPayloadV5'
};

/** @internal */
function decodeExtrinsicPayload (registry: Registry, value?: GenericExtrinsicPayload | ExtrinsicPayloadValue | Uint8Array | string, version = LATEST_EXTRINSIC_VERSION, preamble: Preamble = DEFAULT_PREAMBLE): ExtrinsicPayloadVx {
  if (value instanceof GenericExtrinsicPayload) {
    return value.unwrap();
  }

  const extVersion = version === 5 ? PREAMBLES[preamble] : VERSIONS[version] || VERSIONS[0];

  /**
   * HACK: In order to change the assetId from `number | object` to HexString (While maintaining the true type ie Option<TAssetConversion>),
   * to allow for easier generalization of the SignerPayloadJSON interface the below check is necessary. The ExtrinsicPayloadV4 class does not like
   * a value passed in as an Option, and can't decode it properly. Therefore, we ensure to convert the following below, and then pass the option as a unwrapped
   * JSON value.
   *
   * ref: https://github.com/polkadot-js/api/pull/5968
   * ref: https://github.com/polkadot-js/api/pull/5967
   */
  if (value && (value as ExtrinsicPayloadValue).assetId && isHex((value as ExtrinsicPayloadValue).assetId)) {
    const adjustedPayload = {
      ...(value as ExtrinsicPayloadValue),
      assetId: registry.createType('TAssetConversion', hexToU8a((value as ExtrinsicPayloadValue).assetId)).toJSON()
    };

    return registry.createTypeUnsafe(extVersion, [adjustedPayload, { version }]);
  }

  return registry.createTypeUnsafe(extVersion, [value, { version }]);
}

/**
 * @name GenericExtrinsicPayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export class GenericExtrinsicPayload extends AbstractBase<ExtrinsicPayloadVx> {
  constructor (registry: Registry, value?: Partial<ExtrinsicPayloadValue> | Uint8Array | string, { pramble, version }: ExtrinsicPayloadOptions = {}) {
    super(registry, decodeExtrinsicPayload(registry, value as ExtrinsicPayloadValue, version, pramble));
  }

  /**
   * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): BlockHash {
    return this.inner.blockHash;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): GenericExtrinsicEra {
    return this.inner.era;
  }

  /**
   * @description The genesis block [[BlockHash]] the signature applies to
   */
  public get genesisHash (): BlockHash {
    // NOTE only v3+
    return this.inner.genesisHash || this.registry.createTypeUnsafe('Hash', []);
  }

  /**
   * @description The [[Bytes]] contained in the payload
   */
  public get method (): Bytes {
    return this.inner.method;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): ICompact<INumber> {
    return this.inner.nonce;
  }

  /**
   * @description The specVersion as a [[u32]] for this payload
   */
  public get specVersion (): INumber {
    // NOTE only v3+
    return this.inner.specVersion || this.registry.createTypeUnsafe('u32', []);
  }

  /**
   * @description The [[Balance]]
   */
  public get tip (): ICompact<INumber> {
    // NOTE from v2+
    return this.inner.tip || this.registry.createTypeUnsafe('Compact<Balance>', []);
  }

  /**
   * @description The transaction version as a [[u32]] for this payload
   */
  public get transactionVersion (): INumber {
    // NOTE only v4+
    return this.inner.transactionVersion || this.registry.createTypeUnsafe('u32', []);
  }

  /**
   * @description The (optional) asset id as a [[u32]] or [[MultiLocation]] for this payload
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.inner.assetId;
  }

  /**
   * @description The (optional) [[Hash]] of the genesis metadata for this payload
   */
  public get metadataHash (): IOption<Hash> {
    return this.inner.metadataHash;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public override eq (other?: unknown): boolean {
    return this.inner.eq(other);
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): { signature: HexString } {
    const signature = this.inner.sign(signerPair);

    // This is extensible, so we could quite readily extend to send back extra
    // information, such as for instance the payload, i.e. `payload: this.toHex()`
    // For the case here we sign via the extrinsic, we ignore the return, so generally
    // this is applicable for external signing
    return {
      signature: u8aToHex(signature)
    };
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (isExtended?: boolean, disableAscii?: boolean): AnyJson {
    return this.inner.toHuman(isExtended, disableAscii);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): any {
    return this.toHex();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'ExtrinsicPayload';
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return this.toHex();
  }

  /**
   * @description Returns a serialized u8a form
   */
  public override toU8a (isBare?: BareOpts): Uint8Array {
    // call our parent, with only the method stripped
    return super.toU8a(isBare ? { method: true } : false);
  }
}
