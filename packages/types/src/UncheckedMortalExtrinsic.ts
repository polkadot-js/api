// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/util-keyring/types';
import { AnyNumber, AnyU8a } from './types';

import u8aConcat from '@polkadot/util/u8a/concat';

import Address from './Address';
import Call from './Call';
import Extrinsic from './Extrinsic';
import { FunctionMetadata } from './Metadata';
import SignaturePayload from './SignaturePayload';
import TransactionSignature from './TransactionSignature';

const EMPTY_U8A = new Uint8Array();
const IMMORTAL_ERA = new Uint8Array([0]);

/**
 * Unchecked mortal extrinsic, as defined here:
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class UncheckedMortalExtrinsic extends Extrinsic {
  protected _call: Call;
  protected _signature?: Uint8Array;

  constructor (call: Call) {
    super();

    this._call = call;
    this.raw = UncheckedMortalExtrinsic.encode(call);
  }

  static encode (call: Call, signature?: TransactionSignature): Uint8Array {
    // Version Information.
    // 1 byte: version information:
    // - 7 low bits: version identifier (should be 0b0000001).
    // - 1 high bit: signed flag: 1 if this is a transaction (e.g. contains a signature).
    const highBit = signature ? 0b10000000 : 0;
    const version = 0b00000001;

    return u8aConcat(
      new Uint8Array([highBit | version]),
      signature
        ? signature.toU8a()
        : EMPTY_U8A,
      call.toU8a()
    );
  }

  get isSigned () {
    return this._signature;
  }

  get meta (): FunctionMetadata {
    return this._call.meta;
  }

  get callIndex (): Uint8Array {
    return this._call.callIndex;
  }

  get methodIndex (): number {
    return this._call.methodIndex;
  }

  get sectionIndex (): number {
    return this._call.sectionIndex;
  }

  sign (signerPair: KeyringPair, nonce: AnyNumber, blockHash: AnyU8a): UncheckedMortalExtrinsic {
    const signature = this.createSignature(this._call, signerPair, nonce, blockHash);

    this._signature = signature.toU8a();
    this.raw = UncheckedMortalExtrinsic.encode(this._call, signature);

    return this;
  }

  private createSignature (call: Call, signerPair: KeyringPair, nonce: AnyNumber, blockHash: AnyU8a, era: Uint8Array = IMMORTAL_ERA): TransactionSignature {
    const signer = new Address(signerPair.publicKey());

    const signingPayload = new SignaturePayload({
      nonce,
      call,
      era,
      blockHash
    });
    const signature = signingPayload.sign(signerPair);

    return new TransactionSignature({
      era: signingPayload.era,
      nonce: signingPayload.nonce,
      signer,
      signature
    });
  }
}
