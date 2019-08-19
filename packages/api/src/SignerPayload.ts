// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Balance, BlockNumber, Call, ExtrinsicEra, Hash, Index, RuntimeVersion } from '@polkadot/types/interfaces';
import { Constructor } from '@polkadot/types/types';
import { SignerPayload, SignerPayloadRaw } from './types';

import { createType, Compact, Struct, u8 } from '@polkadot/types';

export interface SignerPayloadType {
  address: Address;
  blockHash: Hash;
  blockNumber: BlockNumber;
  era: ExtrinsicEra;
  genesisHash: Hash;
  method: Call;
  nonce: Compact<Index>;
  runtimeVersion: RuntimeVersion;
  tip: Compact<Balance>;
  version: u8;
}

// We explicitly cast the type here to get the actual TypeScript exports right
// @ts-ignore We can ignore the properties, added via Struct.with
const _Payload: Constructor<SignerPayloadType> = Struct.with({
  address: 'Address',
  blockHash: 'Hash',
  blockNumber: 'BlockNumber',
  era: 'ExtrinsicEra',
  genesisHash: 'Hash',
  method: 'Call',
  nonce: 'Compact<Index>',
  runtimeVersion: 'RuntimeVersion',
  tip: 'Compact<Balance>',
  version: u8
});

export default class Payload extends _Payload {
  /**
   * @description Returns this as a SignerPayloadType. This works since the Struct.with injects all the getters automatically (just ensure the 2 definitiona are matching)
   */
  public get self (): SignerPayloadType {
    return this as any as SignerPayloadType;
  }

  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  public toPayload (): SignerPayload {
    const { address, blockHash, blockNumber, era, genesisHash, method, nonce, runtimeVersion: { specVersion }, tip, version } = this.self;

    return {
      address: address.toString(),
      blockHash: blockHash.toHex(),
      blockNumber: blockNumber.toHex(),
      era: era.toHex(),
      genesisHash: genesisHash.toHex(),
      method: method.toHex(),
      nonce: nonce.toHex(),
      specVersion: specVersion.toHex(),
      tip: tip.toHex(),
      version: version.toNumber()
    };
  }

  /**
   * @description Creates a representation of the payload in raw Exrinsic form
   */
  public toRaw (): SignerPayloadRaw {
    const payload = this.toPayload();
    const data = createType('ExtrinsicPayload', payload, { version: payload.version }).toHex();

    return {
      address: payload.address,
      data,
      type: 'payload'
    };
  }
}
