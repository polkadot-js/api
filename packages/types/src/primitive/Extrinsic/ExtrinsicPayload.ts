// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Balance, ExtrinsicPayloadV1, ExtrinsicPayloadV2, ExtrinsicPayloadV3, Hash, Index } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IKeyringPair, InterfaceTypes } from '../../types';

import { u8aToHex } from '@polkadot/util';

import { createType } from '../../codec/create';
import Base from '../../codec/Base';
import Compact from '../../codec/Compact';
import U8a from '../../codec/U8a';
import u32 from '../../primitive/U32';
import ExtrinsicEra from './ExtrinsicEra';
import { DEFAULT_VERSION } from './constants';

interface ExtrinsicPayloadOptions {
  version?: number;
}

// all our known types that can be returned
type ExtrinsicPayloadVx = ExtrinsicPayloadV1 | ExtrinsicPayloadV2 | ExtrinsicPayloadV3;

const VERSIONS: InterfaceTypes[] = [
  'ExtrinsicPayloadUnknown', // v0 is unknown
  'ExtrinsicPayloadV1',
  'ExtrinsicPayloadV2',
  'ExtrinsicPayloadV3'
];

/**
 * @name ExtrinsicPayload
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class ExtrinsicPayload extends Base<ExtrinsicPayloadVx> {
  public constructor (value: Partial<ExtrinsicPayloadValue> | Uint8Array | string | undefined, { version }: ExtrinsicPayloadOptions = {}) {
    super(
      ExtrinsicPayload.decodeExtrinsicPayload(value as ExtrinsicPayloadValue, version)
    );
  }

  public static decodeExtrinsicPayload (value: ExtrinsicPayload | ExtrinsicPayloadValue | Uint8Array | string | undefined, version: number = DEFAULT_VERSION): ExtrinsicPayloadVx {
    if (value instanceof ExtrinsicPayload) {
      return value.raw;
    }

    return createType(VERSIONS[version] || VERSIONS[0], value, { version }) as ExtrinsicPayloadVx;
  }

  /**
   * @description The block [[Hash]] the signature applies to (mortal/immortal)
   */
  public get blockHash (): Hash {
    return this.raw.blockHash;
  }

  /**
   * @description The [[ExtrinsicEra]]
   */
  public get era (): ExtrinsicEra {
    return this.raw.era;
  }

  /**
   * @description The genesis block [[Hash]] the signature applies to
   */
  public get genesisHash (): Hash {
    // NOTE only v3
    return (this.raw as ExtrinsicPayloadV3).genesisHash || createType('Hash');
  }

  /**
   * @description The [[U8a]] contained in the payload
   */
  public get method (): U8a {
    return this.raw.method;
  }

  /**
   * @description The [[Index]]
   */
  public get nonce (): Compact<Index> {
    return this.raw.nonce;
  }

  /**
   * @description The specVersion as a [[u32]] for this payload
   */
  public get specVersion (): u32 {
    // NOTE only v3
    return (this.raw as ExtrinsicPayloadV3).specVersion || createType('u32');
  }

  /**
   * @description The [[Balance]]
   */
  public get tip (): Compact<Balance> {
    // NOTE from v2
    return (this.raw as ExtrinsicPayloadV2).tip || createType('Compact<Balance>');
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    return this.raw.eq(other);
  }

  /**
   * @description Sign the payload with the keypair
   */
  public sign (signerPair: IKeyringPair): { signature: string } {
    const signature = this.raw.sign(signerPair);

    // This is extensible, so we could quite readily extend to send back extra
    // information, such as for instance the payload, i.e. `payload: this.toHex()`
    // For the case here we sign via the extrinsic, we ignore the return, so generally
    // this is applicable for external signing
    return {
      signature: u8aToHex(signature)
    };
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
}
