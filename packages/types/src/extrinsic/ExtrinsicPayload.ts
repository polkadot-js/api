// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { ExtrinsicPayloadV4 } from '../interfaces/extrinsics';
import type { Balance, Hash, Index } from '../interfaces/runtime';
import type { AnyJson, BareOpts, ExtrinsicPayloadValue, IKeyringPair } from '../types';

import { Base, Compact, Raw } from '@polkadot/types-codec';
import { u8aToHex } from '@polkadot/util';

import { u32 } from '../primitive/U32';
import { DEFAULT_VERSION } from './constants';
import { GenericExtrinsicEra } from './ExtrinsicEra';

interface ExtrinsicPayloadOptions {
  version?: number;
}

// all our known types that can be returned
type ExtrinsicPayloadVx = ExtrinsicPayloadV4;

const VERSIONS = [
  'ExtrinsicPayloadUnknown', // v0 is unknown
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadUnknown',
  'ExtrinsicPayloadV4'
];

/**
 * @name GenericExtrinsicPayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export class GenericExtrinsicPayload extends Base<ExtrinsicPayloadVx> {
  constructor (registry: CodecRegistry, value?: Partial<ExtrinsicPayloadValue> | Uint8Array | string, { version }: ExtrinsicPayloadOptions = {}) {
    super(registry, GenericExtrinsicPayload.decodeExtrinsicPayload(registry, value as ExtrinsicPayloadValue, version));
  }

  /** @internal */
  public static decodeExtrinsicPayload (registry: CodecRegistry, value?: GenericExtrinsicPayload | ExtrinsicPayloadValue | Uint8Array | string, version: number = DEFAULT_VERSION): ExtrinsicPayloadVx {
    if (value instanceof GenericExtrinsicPayload) {
      return value._raw;
    }

    return registry.createType(VERSIONS[version] || VERSIONS[0], value, { version });
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this._raw.blockHash;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): GenericExtrinsicEra {
    return this._raw.era;
  }

  /**
   * @description The genesis block [[Hash]] the signature applies to
   */
  public get genesisHash (): Hash {
    // NOTE only v3+
    return this._raw.genesisHash || this.registry.createType('Hash');
  }

  /**
   * @description The [[Raw]] contained in the payload
   */
  public get method (): Raw {
    return this._raw.method;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): Compact<Index> {
    return this._raw.nonce;
  }

  /**
   * @description The specVersion as a [[u32]] for this payload
   */
  public get specVersion (): u32 {
    // NOTE only v3+
    return this._raw.specVersion || this.registry.createType('u32');
  }

  /**
   * @description The [[Balance]]
   */
  public get tip (): Compact<Balance> {
    // NOTE from v2+
    return this._raw.tip || this.registry.createType('Compact<Balance>');
  }

  /**
   * @description The transaction version as a [[u32]] for this payload
   */
  public get transactionVersion (): u32 {
    // NOTE only v4+
    return this._raw.transactionVersion || this.registry.createType('u32');
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public override eq (other?: unknown): boolean {
    return this._raw.eq(other);
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): { signature: HexString } {
    const signature = this._raw.sign(signerPair);

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
  public override toHuman (isExtended?: boolean): AnyJson {
    return this._raw.toHuman(isExtended);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): any {
    return this.toHex();
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
