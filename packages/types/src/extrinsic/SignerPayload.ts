// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Address, Balance, BlockNumber, Call, ExtrinsicEra, Hash, Index, RuntimeVersion } from '../interfaces';
import { Codec, Constructor, ISignerPayload, SignerPayloadJSON, SignerPayloadRaw } from '../types';

import { u8aToHex } from '@polkadot/util';

import Compact from '../codec/Compact';
import Struct from '../codec/Struct';
import Vec from '../codec/Vec';
import Text from '../primitive/Text';
import u8 from '../primitive/U8';

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

// We explicitly cast the type here to get the actual TypeScript exports right
// We can ignore the properties, added via Struct.with
const _Payload = Struct.with({
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
}) as unknown as Constructor<SignerPayloadType>;

/**
 * @name SignerPayload
 * @description
 * A generic signer payload that can be used for serialization between API and signer
 */
export default class SignerPayload extends _Payload implements ISignerPayload {
  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  public toPayload (): SignerPayloadJSON {
    const { address, blockHash, blockNumber, era, genesisHash, method, nonce, runtimeVersion: { specVersion, transactionVersion }, signedExtensions, tip, version } = this;

    return {
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
    // NOTE Explicitly pass the bare flag so the method is encoded un-prefixed (non-decodable, for signing only)
    const data = u8aToHex(this.registry.createType('ExtrinsicPayload', payload, { version: payload.version }).toU8a({ method: true }));

    return {
      address: payload.address,
      data,
      type: 'payload'
    };
  }
}
