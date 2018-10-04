// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/util-keyring/types';
import { AnyNumber, AnyU8a } from './types';

import Struct from './codec/Struct';
import Call from './Call';
import Hash from './Hash';
import Nonce from './Nonce';
import TransactionEra from './TransactionEra';

type SignaturePayloadValue = {
  nonce?: AnyNumber,
  call?: Call,
  era?: AnyU8a | TransactionEra
  blockHash?: AnyU8a
};

// Signing Payload.
//   8 bytes: The Transaction Index/Nonce as provided in the transaction itself.
//   2+ bytes: The Function Descriptor as provided in the transaction itself.
//   2 bytes: The Transaction Era as provided in the transaction itself.
//   32 bytes: The hash of the authoring block implied by the Transaction Era and the current block.
export default class SignaturePayload extends Struct {
  protected _signature?: Uint8Array;

  constructor (value?: SignaturePayloadValue) {
    super({
      nonce: Nonce,
      call: Call,
      era: TransactionEra,
      blockHash: Hash
    }, value);
  }

  get isSigned (): boolean {
    return !!(this._signature && this._signature.length === 64);
  }

  get blockHash (): Hash {
    return this.raw.blockHash as Hash;
  }

  get call (): Call {
    return this.raw.call as Call;
  }

  get era (): TransactionEra {
    return this.raw.era as TransactionEra;
  }

  get nonce (): Nonce {
    return this.raw.nonce as Nonce;
  }

  get signature (): Uint8Array {
    if (!this.isSigned) {
      throw new Error('Transaction is not signed');
    }

    return this._signature as Uint8Array;
  }

  sign (signerPair: KeyringPair): Uint8Array {
    this._signature = signerPair.sign(this.toU8a());

    return this._signature;
  }
}
