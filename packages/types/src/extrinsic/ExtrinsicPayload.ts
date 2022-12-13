// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyJson, BareOpts, Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { BlockHash } from '../interfaces/chain';
import type { ExtrinsicPayloadV4 } from '../interfaces/extrinsics';
import type { ExtrinsicPayloadValue, ICompact, IKeyringPair, INumber } from '../types';

import { AbstractBase, Bytes } from '@polkadot/types-codec';
import { u8aToHex } from '@polkadot/util';

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

/** @internal */
function decodeExtrinsicPayload (registry: Registry, value?: GenericExtrinsicPayload | ExtrinsicPayloadValue | Uint8Array | string, version: number = DEFAULT_VERSION): ExtrinsicPayloadVx {
  if (value instanceof GenericExtrinsicPayload) {
    return value.unwrap();
  }

  return registry.createTypeUnsafe(VERSIONS[version] || VERSIONS[0], [value, { version }]);
}

/**
 * @name GenericExtrinsicPayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export class GenericExtrinsicPayload extends AbstractBase<ExtrinsicPayloadVx> {
  constructor (registry: Registry, value?: Partial<ExtrinsicPayloadValue> | Uint8Array | string, { version }: ExtrinsicPayloadOptions = {}) {
    super(registry, decodeExtrinsicPayload(registry, value as ExtrinsicPayloadValue, version));
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
    return this.inner.genesisHash || this.$registry.createTypeUnsafe('Hash', []);
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
    return this.inner.specVersion || this.$registry.createTypeUnsafe('u32', []);
  }

  /**
   * @description The [[Balance]]
   */
  public get tip (): ICompact<INumber> {
    // NOTE from v2+
    return this.inner.tip || this.$registry.createTypeUnsafe('Compact<Balance>', []);
  }

  /**
   * @description The transaction version as a [[u32]] for this payload
   */
  public get transactionVersion (): INumber {
    // NOTE only v4+
    return this.inner.transactionVersion || this.$registry.createTypeUnsafe('u32', []);
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
  public override toHuman (isExtended?: boolean): AnyJson {
    return this.inner.toHuman(isExtended);
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
