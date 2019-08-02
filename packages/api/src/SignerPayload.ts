// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Balance, BlockNumber, Call, ExtrinsicEra, Hash, Index } from '@polkadot/types/interfaces';
import { SignerPayload as ISignerPayload } from './types';

import { ClassOf, Compact, createType, Struct, u8 } from '@polkadot/types';

export interface SignerPayloadType {
  address: Address;
  blockHash: Hash;
  blockNumber: BlockNumber;
  era: ExtrinsicEra;
  genesisHash: Hash;
  method: Call;
  nonce: Compact<Index>;
  tip: Compact<Balance>;
  version: u8;
}

export default class SignerPayload extends Struct.with({
  address: ClassOf('Address'),
  blockHash: ClassOf('Hash'),
  blockNumber: ClassOf('BlockNumber'),
  era: ClassOf('ExtrinsicEra'),
  genesisHash: ClassOf('Hash'),
  method: ClassOf('Call'),
  nonce: ClassOf('Compact<Index>'),
  tip: ClassOf('Compact<Balance>'),
  version: u8
}) {
  /**
   * @description Returns this as a SignerPayloadType. This works since the Struct.with injects all the getters automatically (just ensure the 2 definitiona are matching)
   */
  public get self (): SignerPayloadType {
    return this as any as SignerPayloadType;
  }

  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  public toPayload (): ISignerPayload {
    const { address, blockHash, blockNumber, era, genesisHash, method, nonce, tip, version } = this.self;

    return {
      address: address.toString(),
      blockHash: blockHash.toHex(),
      blockNumber: blockNumber.toHex(),
      era: era.toHex(),
      genesisHash: genesisHash.toHex(),
      method: method.toHex(),
      nonce: nonce.toHex(),
      tip: tip.toHex(),
      version: version.toNumber(),
      get encoded (): Uint8Array {
        return createType('ExtrinsicPayload', this, { version: this.version }).toU8a();
      }
    };
  }
}
