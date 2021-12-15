// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Address, Balance, BlockNumber, Call, ExtrinsicEra, Hash, Index, RuntimeVersion } from '../interfaces';
import type { Codec, ISignerPayload, Registry, SignerPayloadJSON, SignerPayloadRaw } from '../types';

import { Compact, Option, Struct, Text, Vec } from '@polkadot/types-codec';
import { objectProperty, objectSpread, u8aToHex } from '@polkadot/util';

import { u8 } from '../primitive/U8';

export interface SignerPayloadType extends Codec {
  address: Address;
  blockHash: Hash;
  blockNumber: BlockNumber;
  era: ExtrinsicEra;
  genesisHash: Hash;
  method: Call;
  nonce: Compact<Index>;
  runtimeVersion: RuntimeVersion;
  signedExtensions: Vec<Text>;
  tip: Compact<Balance>;
  version: u8;
}

const knownTypes: Record<string, string> = {
  address: 'Address',
  blockHash: 'Hash',
  blockNumber: 'BlockNumber',
  era: 'ExtrinsicEra',
  genesisHash: 'Hash',
  method: 'Call',
  nonce: 'Compact<Index>',
  runtimeVersion: 'RuntimeVersion',
  signedExtensions: 'Vec<Text>',
  tip: 'Compact<Balance>',
  version: 'u8'
};

/**
 * @name GenericSignerPayload
 * @description
 * A generic signer payload that can be used for serialization between API and signer
 */
export class GenericSignerPayload extends Struct implements ISignerPayload, SignerPayloadType {
  readonly #extraTypes: Record<string, string>;

  constructor (registry: CodecRegistry, value?: HexString | { [x: string]: unknown; } | Map<unknown, unknown> | unknown[]) {
    const extensionTypes = objectSpread<Record<string, string>>({}, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra());

    super(registry, objectSpread<Record<string, string>>({}, extensionTypes, knownTypes), value);

    this.#extraTypes = {};
    const getter = (key: string) => this.get(key);

    // add all extras that are not in the base types
    for (const [key, type] of Object.entries(extensionTypes)) {
      if (!knownTypes[key]) {
        this.#extraTypes[key] = type;
      }

      objectProperty(this, key, getter);
    }
  }

  get address (): Address {
    return this.get('address') as Address;
  }

  get blockHash (): Hash {
    return this.get('blockHash') as Hash;
  }

  get blockNumber (): BlockNumber {
    return this.get('blockNumber') as BlockNumber;
  }

  get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  get genesisHash (): Hash {
    return this.get('genesisHash') as Hash;
  }

  get method (): Call {
    return this.get('method') as Call;
  }

  get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
  }

  get runtimeVersion (): RuntimeVersion {
    return this.get('runtimeVersion') as RuntimeVersion;
  }

  get signedExtensions (): Vec<Text> {
    return this.get('signedExtensions') as Vec<Text>;
  }

  get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }

  get version (): u8 {
    return this.get('version') as u8;
  }

  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  public toPayload (): SignerPayloadJSON {
    const result: Record<string, string> = {};
    const keys = Object.keys(this.#extraTypes);

    // add any explicit overrides we may have
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = this.get(key) as Codec;
      const isOption = value instanceof Option;

      // Don't include Option.isNone
      if (!isOption || value.isSome) {
        result[key] = value.toHex();
      }
    }

    return objectSpread(result, {
      // the known defaults as managed explicitly and has different
      // formatting in cases, e.g. we mostly expose a hex format here
      address: this.address.toString(),
      blockHash: this.blockHash.toHex(),
      blockNumber: this.blockNumber.toHex(),
      era: this.era.toHex(),
      genesisHash: this.genesisHash.toHex(),
      method: this.method.toHex(),
      nonce: this.nonce.toHex(),
      signedExtensions: this.signedExtensions.map((e) => e.toString()),
      specVersion: this.runtimeVersion.specVersion.toHex(),
      tip: this.tip.toHex(),
      transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
      version: this.version.toNumber()
    });
  }

  /**
   * @description Creates a representation of the payload in raw Exrinsic form
   */
  public toRaw (): SignerPayloadRaw {
    const payload = this.toPayload();
    const data = u8aToHex(
      this.registry
        .createType('ExtrinsicPayload', payload, { version: payload.version })
        // NOTE Explicitly pass the bare flag so the method is encoded un-prefixed (non-decodable, for signing only)
        .toU8a({ method: true })
    );

    return {
      address: payload.address,
      data,
      type: 'payload'
    };
  }
}
