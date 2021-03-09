// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Address, Balance, BlockNumber, Call, ExtrinsicEra, Hash, Index, RuntimeVersion } from '../interfaces';
import type { Codec, InterfaceTypes, ISignerPayload, Registry, SignerPayloadJSON, SignerPayloadRaw } from '../types';

import { u8aToHex } from '@polkadot/util';

import { Compact } from '../codec/Compact';
import { Struct } from '../codec/Struct';
import { Vec } from '../codec/Vec';
import { Text } from '../primitive/Text';
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

const knownTypes: Record<string, keyof InterfaceTypes> = {
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
  private readonly _extraTypes: Record<string, keyof InterfaceTypes>;

  constructor (registry: Registry, value?: string | { [x: string]: any; } | Map<unknown, unknown> | unknown[]) {
    const extensionTypes = {
      ...registry.getSignedExtensionTypes(),
      ...registry.getSignedExtensionExtra()
    };

    super(registry, {
      ...extensionTypes,
      ...knownTypes
    }, value);

    // add all extras that are not in the base types
    this._extraTypes = Object.entries(extensionTypes).reduce<Record<string, keyof InterfaceTypes>>((map, [key, type]) => {
      if (!knownTypes[key]) {
        map[key] = type;
      }

      return map;
    }, {});
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
    return {
      // add any explicit overrides we may have
      ...(Object.keys(this._extraTypes).reduce<Record<string, string>>((map, key) => {
        map[key] = (this.get(key) as Codec).toHex();

        return map;
      }, {})),
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
    };
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
