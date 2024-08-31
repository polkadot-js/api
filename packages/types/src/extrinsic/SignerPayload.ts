// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { bool, Text, Vec } from '@polkadot/types-codec';
import type { AnyJson, Registry } from '@polkadot/types-codec/types';
import type { HexString } from '@polkadot/util/types';
import type { Address, BlockHash, Call, ExtrinsicEra, Hash, MultiLocation } from '../interfaces/index.js';
import type { Codec, ICompact, INumber, IOption, IRuntimeVersion, ISignerPayload, SignerPayloadJSON, SignerPayloadRaw } from '../types/index.js';

import { Option, Struct } from '@polkadot/types-codec';
import { objectProperty, objectSpread, u8aToHex } from '@polkadot/util';

export interface SignerPayloadType extends Codec {
  address: Address;
  assetId: IOption<INumber | MultiLocation>;
  blockHash: Hash;
  blockNumber: INumber;
  era: ExtrinsicEra;
  genesisHash: Hash;
  metadataHash: IOption<Hash>;
  method: Call;
  mode: INumber;
  nonce: ICompact<INumber>;
  runtimeVersion: IRuntimeVersion;
  signedExtensions: Vec<Text>;
  tip: ICompact<INumber>;
  version: INumber;
}

const knownTypes: Record<string, string> = {
  address: 'Address',
  assetId: 'Option<TAssetConversion>',
  blockHash: 'Hash',
  blockNumber: 'BlockNumber',
  era: 'ExtrinsicEra',
  genesisHash: 'Hash',
  metadataHash: 'Option<[u8;32]>',
  method: 'Call',
  mode: 'u8',
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

  constructor (registry: Registry, value?: HexString | Record<string, unknown> | Map<unknown, unknown> | unknown[]) {
    const extensionTypes = objectSpread<Record<string, string>>({}, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra());

    super(registry, objectSpread<Record<string, string>>({}, extensionTypes, knownTypes, { withSignedTransaction: 'bool' }), value);

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
    return this.getT('address');
  }

  get blockHash (): BlockHash {
    return this.getT('blockHash');
  }

  get blockNumber (): INumber {
    return this.getT('blockNumber');
  }

  get era (): ExtrinsicEra {
    return this.getT('era');
  }

  get genesisHash (): BlockHash {
    return this.getT('genesisHash');
  }

  get method (): Call {
    return this.getT('method');
  }

  get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  get runtimeVersion (): IRuntimeVersion {
    return this.getT('runtimeVersion');
  }

  get signedExtensions (): Vec<Text> {
    return this.getT('signedExtensions');
  }

  get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  get version (): INumber {
    return this.getT('version');
  }

  get mode (): INumber {
    return this.getT('mode');
  }

  get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  get withSignedTransaction (): boolean {
    const val: bool = this.getT('withSignedTransaction');

    return val.isTrue;
  }

  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  public toPayload (): SignerPayloadJSON {
    const result: Record<string, AnyJson> = {};
    const keys = Object.keys(this.#extraTypes);

    // add any explicit overrides we may have
    for (let i = 0, count = keys.length; i < count; i++) {
      const key = keys[i];
      const value = this.getT(key);

      // Don't include Option.isNone
      if (!(value instanceof Option) || value.isSome) {
        // NOTE In the spread below we convert (mostly) to Hex to align
        // with the typings. In the case of "unknown" fields, we use the
        // primitive toJSON conversion (which is serializable). Technically
        // we can include isNone in here as well ("null" is allowed), however
        // for empty fields we just skip it completely (historical compat)
        result[key] = value.toJSON();
      }
    }

    return objectSpread(result, {
      // the known defaults as managed explicitly and has different
      // formatting in cases, e.g. we mostly expose a hex format here
      address: this.address.toString(),
      assetId: this.assetId ? u8aToHex(this.assetId.toU8a()) : null,
      blockHash: this.blockHash.toHex(),
      blockNumber: this.blockNumber.toHex(),
      era: this.era.toHex(),
      genesisHash: this.genesisHash.toHex(),
      metadataHash: this.metadataHash.isSome ? this.metadataHash.toHex() : null,
      method: this.method.toHex(),
      mode: this.mode.toNumber(),
      nonce: this.nonce.toHex(),
      signedExtensions: this.signedExtensions.map((e) => e.toString()),
      specVersion: this.runtimeVersion.specVersion.toHex(),
      tip: this.tip.toHex(),
      transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
      version: this.version.toNumber(),
      withSignedTransaction: this.withSignedTransaction
    });
  }

  /**
   * @description Creates a representation of the payload in raw Exrinsic form
   */
  public toRaw (): SignerPayloadRaw {
    const payload = this.toPayload();
    const data = u8aToHex(
      this.registry
        .createTypeUnsafe('ExtrinsicPayload', [payload, { version: payload.version }])
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
