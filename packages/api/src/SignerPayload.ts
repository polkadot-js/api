// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SignerPayload as ISignerPayload } from './types';

import { Address, Balance, BlockNumber, Compact, ExtrinsicEra, Hash, Nonce, Struct, U8, Method } from '@polkadot/types';

export interface SignerPayloadType {
  address: Address;
  blockHash: Hash;
  blockNumber: BlockNumber;
  era: ExtrinsicEra;
  genesisHash: Hash;
  method: Method;
  nonce: Compact<Nonce>;
  tip: Compact<Balance>;
  version: U8;
}

export default class SignerPayload extends Struct.with({
  address: Address,
  blockHash: Hash,
  blockNumber: BlockNumber,
  era: ExtrinsicEra,
  genesisHash: Hash,
  method: Method,
  nonce: Compact.with(Nonce),
  tip: Compact.with(Balance),
  version: U8
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
      version: version.toNumber()
    };
  }
}
