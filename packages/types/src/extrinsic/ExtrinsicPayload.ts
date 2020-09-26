// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ExtrinsicPayloadV4 } from '../interfaces/extrinsics';
import { Balance, Hash, Index } from '../interfaces/runtime';
import { AnyJson, BareOpts, ExtrinsicPayloadValue, IKeyringPair, InterfaceTypes, Registry } from '../types';

import { u8aToHex } from '@polkadot/util';

import Base from '../codec/Base';
import Compact from '../codec/Compact';
import Raw from '../codec/Raw';
import u32 from '../primitive/U32';
import ExtrinsicEra from './ExtrinsicEra';
import { DEFAULT_VERSION } from './constants';

interface ExtrinsicPayloadOptions {
  version?: number;
}

// all our known types that can be returned
type ExtrinsicPayloadVx = ExtrinsicPayloadV4;

const VERSIONS: (keyof InterfaceTypes)[] = [
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
export default class ExtrinsicPayload extends Base<ExtrinsicPayloadVx> {
  constructor (registry: Registry, value: Partial<ExtrinsicPayloadValue> | Uint8Array | string | undefined, { version }: ExtrinsicPayloadOptions = {}) {
    super(registry, ExtrinsicPayload.decodeExtrinsicPayload(registry, value as ExtrinsicPayloadValue, version));
  }

  /** @internal */
  public static decodeExtrinsicPayload (registry: Registry, value: ExtrinsicPayload | ExtrinsicPayloadValue | Uint8Array | string | undefined, version: number = DEFAULT_VERSION): ExtrinsicPayloadVx {
    if (value instanceof ExtrinsicPayload) {
      return value._raw;
    }

    return registry.createType(VERSIONS[version] || VERSIONS[0], value, { version }) as ExtrinsicPayloadVx;
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
  public get era (): ExtrinsicEra {
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
  public eq (other?: unknown): boolean {
    return this._raw.eq(other);
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): { signature: string } {
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
  public toHuman (isExtended?: boolean): AnyJson {
    return this._raw.toHuman(isExtended);
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

  /**
   * @description Returns a serialized u8a form
   */
  public toU8a (isBare?: BareOpts): Uint8Array {
    // call our parent, with only the method stripped
    return super.toU8a(isBare ? { method: true } : false);
  }
}
