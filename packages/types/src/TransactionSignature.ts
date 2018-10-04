// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber, AnyU8a } from './types';

import Struct from './codec/Struct';
import Address from './Address';
import TransactionEra from './TransactionEra';
import Nonce from './Nonce';
import Signature from './Signature';

type TransactionSignatureValue = {
  signer?: AnyU8a | Address,
  signature?: AnyU8a
  nonce?: AnyNumber,
  era?: AnyU8a
};

// Signature Information.
//   1/3/5/9/33 bytes: The signing account identity, in Address format
//   64 bytes: The Ed25519 signature of the Signing Payload
//   8 bytes: The Transaction Index of the signing account
//   2 bytes: The Transaction Era
export default class TransactionSignature extends Struct {
  constructor (value?: TransactionSignatureValue) {
    super({
      signer: Address,
      signature: Signature,
      nonce: Nonce,
      era: TransactionEra
    }, value);
  }

  get era (): TransactionEra {
    return this.raw.era as TransactionEra;
  }

  get nonce (): Nonce {
    return this.raw.nonce as Nonce;
  }

  get signature (): Signature {
    return this.raw.signature as Signature;
  }

  get signer (): Address {
    return this.raw.signer as Address;
  }
}
