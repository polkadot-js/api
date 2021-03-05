// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Address, Balance, BlockNumber, Call, ExtrinsicEra, Hash, Index, RuntimeVersion } from '../interfaces';
import type { Codec, Constructor, ISignerPayload, Registry, SignerPayloadJSON, SignerPayloadRaw } from '../types';

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

/**
 * @name GenericSignerPayload
 * @description
 * A generic signer payload that can be used for serialization between API and signer
 */
class _GenericSignerPayload extends Struct implements ISignerPayload {
  constructor (registry: Registry, value?: string | { [x: string]: any; } | Map<unknown, unknown> | unknown[]) {
    super(registry, {
      ...registry.getSignedExtensionTypes(),
      ...registry.getSignedExtensionExtra(),
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
    }, value);
  }

  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  public toPayload (): SignerPayloadJSON {
    const { address, blockHash, blockNumber, era, genesisHash, method, nonce, runtimeVersion: { specVersion, transactionVersion }, signedExtensions, tip, version } = this as unknown as SignerPayloadType;

    return {
      // add any explicit overrides we may have
      ...this.toJSON(),
      // the know defaults as managed explicitly
      address: address.toString(),
      blockHash: blockHash.toHex(),
      blockNumber: blockNumber.toHex(),
      era: era.toHex(),
      genesisHash: genesisHash.toHex(),
      method: method.toHex(),
      nonce: nonce.toHex(),
      signedExtensions: signedExtensions.map((e) => e.toString()),
      specVersion: specVersion.toHex(),
      tip: tip.toHex(),
      transactionVersion: transactionVersion.toHex(),
      version: version.toNumber()
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

export const GenericSignerPayload = _GenericSignerPayload as unknown as Constructor<SignerPayloadType>;
